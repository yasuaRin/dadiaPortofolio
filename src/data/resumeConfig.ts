// Configuration for CV / Resume and Portfolio Downloads
export interface ResumeConfig {
  cvFileName: string;
  cvDownloadUrl: string; // Direct link or local hosted file
  cvViewUrl: string; // Viewable link
  cvDriveUrl: string; // Official Google Drive file link
  portfolioWebUrl: string; // Live portfolio deployment URL
  lastUpdated: string;
}

export const resumeConfig: ResumeConfig = {
  cvFileName: 'CV_Ni_Putu_Dadia_Yasuarini.pdf',
  cvDownloadUrl: '/cv.pdf',
  cvViewUrl: '/cv.pdf',
  cvDriveUrl: 'https://drive.google.com/file/d/1NQX7oCL1s0LstmMDxjTvYODAbNlSOyCZ/view?usp=sharing',
  portfolioWebUrl: 'https://yasuarin-portofolio.vercel.app/',
  lastUpdated: 'September 2026'
};
