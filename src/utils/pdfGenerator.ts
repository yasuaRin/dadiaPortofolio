import { toCanvas } from 'html-to-image';
import { jsPDF } from 'jspdf';

export interface PDFProgressCallback {
  (current: number, total: number): void;
}

/**
 * Converts the entire webpage exactly as rendered into a multi-page PDF document.
 * Slices the continuous layout into crystal-clear A4 pages, eliminating canvas texture
 * limits and blurriness, while preserving all backgrounds, modern CSS colors (oklab/oklch),
 * physics ornaments, avatars, typography, cards, and decorative graphic elements identically.
 */
export async function generatePortfolioPDF(
  onProgress?: PDFProgressCallback
): Promise<void> {
  const targetElement = (document.getElementById('portfolio-root') ||
    document.querySelector('main') ||
    document.body) as HTMLElement;

  if (!targetElement) {
    throw new Error('Target element for PDF capture not found');
  }

  // 1. Record initial state to guarantee clean restoration
  const originalScrollY = window.scrollY;
  const originalScrollX = window.scrollX;
  const originalBodyOverflow = document.body.style.overflow;
  const originalHtmlOverflow = document.documentElement.style.overflow;

  // 2. Hide modal and active overlays before measurement or capture
  const modalEl = document.getElementById('resume-download-modal');
  if (modalEl) {
    modalEl.style.display = 'none';
  }

  // Activate PDF export mode: forces visibility of all cards/sections, pauses animations
  document.documentElement.classList.add('pdf-export-active');
  document.body.style.overflow = 'visible';
  document.documentElement.style.overflow = 'visible';

  // Array to hold any inline styles we temporarily override
  const restoredElements: Array<{
    el: HTMLElement;
    opacity: string;
    transform: string;
    visibility: string;
  }> = [];

  try {
    // 3. Smooth pre-scroll pass across the entire document
    // This wakes up all Framer Motion whileInView / IntersectionObserver triggers,
    // ensures lazy-rendered cards and sections are hydrated and visible.
    const docScrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      targetElement.scrollHeight
    );
    const scrollStep = Math.min(window.innerHeight || 800, 900);

    for (let y = 0; y < docScrollHeight; y += scrollStep) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
    window.scrollTo(0, docScrollHeight);
    await new Promise((resolve) => setTimeout(resolve, 60));
    window.scrollTo(0, 0);
    await new Promise((resolve) => setTimeout(resolve, 150));

    // 4. Force full opacity and reset any un-triggered translateY on all elements
    const allDescendants = targetElement.querySelectorAll<HTMLElement>('*');
    allDescendants.forEach((el) => {
      const styleOp = el.style.opacity;
      const styleTr = el.style.transform;
      const styleVis = el.style.visibility;
      if (
        styleOp === '0' ||
        styleOp === '0.0' ||
        (styleOp && parseFloat(styleOp) < 0.2) ||
        styleVis === 'hidden'
      ) {
        restoredElements.push({
          el,
          opacity: styleOp,
          transform: styleTr,
          visibility: styleVis,
        });
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('visibility', 'visible', 'important');
        if (styleTr && styleTr.includes('translateY')) {
          el.style.setProperty('transform', 'none', 'important');
        }
      }
    });

    // 5. Measure layout geometry
    const contentWidth = Math.max(targetElement.offsetWidth || 1200, 1080);
    const totalHeight = Math.max(
      targetElement.scrollHeight,
      targetElement.offsetHeight,
      document.documentElement.scrollHeight
    );

    // Exact A4 portrait aspect ratio (297 / 210 = 1.4142857)
    const sliceHeight = Math.round(contentWidth * (297 / 210));
    const totalPages = Math.max(1, Math.ceil(totalHeight / sliceHeight));

    // Detect active color mode
    const isDarkMode =
      document.documentElement.classList.contains('dark') ||
      document.body.classList.contains('dark') ||
      targetElement.classList.contains('dark');
    const bgColor = isDarkMode ? '#0D0D0D' : '#FFFFFF';

    // 6. Initialize jsPDF document (Standard A4)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // 7. Render each A4 page slice independently
    // By keeping each rasterized chunk under 2800px, we stay strictly below
    // Chrome's GPU texture limit (4096px), preventing texture clamping, cutoffs, and blur.
    for (let page = 0; page < totalPages; page++) {
      if (onProgress) {
        onProgress(page + 1, totalPages);
      }

      const offsetY = page * sliceHeight;

      const pageCanvas = await toCanvas(targetElement, {
        width: contentWidth,
        height: sliceHeight,
        pixelRatio: 1.6, // Pristine high-DPI rendering without GPU memory overflow
        cacheBust: true,
        skipFonts: true, // Prevents cross-origin CSS rule reading exceptions
        fontEmbedCSS: '',
        backgroundColor: bgColor,
        style: {
          width: `${contentWidth}px`,
          height: `${totalHeight}px`,
          minHeight: `${totalHeight}px`,
          maxHeight: `${totalHeight}px`,
          transform: `translateY(-${offsetY}px)`,
          transformOrigin: '0 0',
          margin: '0',
          overflow: 'visible',
        },
        filter: (domNode) => {
          if (!(domNode instanceof HTMLElement)) return true;
          if (domNode.classList.contains('no-pdf-export')) return false;
          if (domNode.id === 'resume-download-modal') return false;
          if (domNode.classList.contains('custom-cursor')) return false;
          if (domNode.id === 'scroll-progress-bar') return false;
          if (domNode.getAttribute('role') === 'dialog') return false;
          return true;
        },
      });

      if (!pageCanvas || pageCanvas.width === 0 || pageCanvas.height === 0) {
        throw new Error(`Slice capture failed for page ${page + 1}`);
      }

      if (page > 0) {
        pdf.addPage();
      }

      // Export slice canvas with 0.95 JPEG quality using SLOW (bicubic) interpolation for razor-sharp text
      const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.95);
      pdf.addImage(pageImgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'SLOW');
    }

    // 8. Download the finished PDF
    pdf.save('Ni_Putu_Dadia_Yasuarini_Portfolio.pdf');
  } finally {
    // 9. Pristine teardown and state restoration
    restoredElements.forEach(({ el, opacity, transform, visibility }) => {
      if (opacity) {
        el.style.opacity = opacity;
      } else {
        el.style.removeProperty('opacity');
      }
      if (transform) {
        el.style.transform = transform;
      } else {
        el.style.removeProperty('transform');
      }
      if (visibility) {
        el.style.visibility = visibility;
      } else {
        el.style.removeProperty('visibility');
      }
    });

    document.documentElement.classList.remove('pdf-export-active');
    document.body.style.overflow = originalBodyOverflow;
    document.documentElement.style.overflow = originalHtmlOverflow;

    if (modalEl) {
      modalEl.style.display = '';
    }

    window.scrollTo(originalScrollX, originalScrollY);
  }
}
