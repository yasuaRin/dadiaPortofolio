// Web Audio API playful and cute bubble sound synthesizer for theme switching
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  } catch {
    return null;
  }
}

/**
 * Play a cute, cheerful organic bubble sound on theme toggle
 * Light mode: Multi-bubble rising pop popping upward (bloop-bloop-pop!)
 * Dark mode: Deep gentle waterdrop bubble bloop with warm ripple resonance
 */
export function playThemeSound(mode: 'light' | 'dark') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (mode === 'light') {
      // 🫧 CUTE MULTI-BUBBLE POPPING SEQUENCE (Rising bubbles) 🫧
      const bubbles = [
        { startFreq: 420, endFreq: 980, delay: 0.00, dur: 0.055, vol: 0.13 },  // bubble 1
        { startFreq: 640, endFreq: 1350, delay: 0.045, dur: 0.050, vol: 0.15 }, // bubble 2 (higher pop)
        { startFreq: 920, endFreq: 1980, delay: 0.085, dur: 0.060, vol: 0.12 }, // bubble 3 (cute sparkle pop)
      ];

      bubbles.forEach(({ startFreq, endFreq, delay, dur, vol }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(startFreq, now + delay);
        osc.frequency.exponentialRampToValueAtTime(endFreq, now + delay + dur);

        gain.gain.setValueAtTime(0.001, now + delay);
        gain.gain.linearRampToValueAtTime(vol, now + delay + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + dur + 0.02);
      });

      // Extra sweet micro chime ping
      const ping = ctx.createOscillator();
      const pingGain = ctx.createGain();
      ping.type = 'sine';
      ping.frequency.setValueAtTime(1760, now + 0.12); // A6
      pingGain.gain.setValueAtTime(0.001, now + 0.12);
      pingGain.gain.linearRampToValueAtTime(0.08, now + 0.13);
      pingGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
      ping.connect(pingGain);
      pingGain.connect(ctx.destination);
      ping.start(now + 0.12);
      ping.stop(now + 0.30);

    } else {
      // 🫧 CUTE COZY DEEP WATER DROPLET BUBBLE (Bloop-plop) 🫧
      const dropOsc = ctx.createOscillator();
      const dropGain = ctx.createGain();

      dropOsc.type = 'sine';
      // Classic cute waterdrop frequency modulation curve
      dropOsc.frequency.setValueAtTime(580, now);
      dropOsc.frequency.exponentialRampToValueAtTime(1480, now + 0.035);
      dropOsc.frequency.exponentialRampToValueAtTime(440, now + 0.095);

      dropGain.gain.setValueAtTime(0.01, now);
      dropGain.gain.linearRampToValueAtTime(0.18, now + 0.025);
      dropGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);

      dropOsc.connect(dropGain);
      dropGain.connect(ctx.destination);

      dropOsc.start(now);
      dropOsc.stop(now + 0.14);

      // Soft water ripple overtone
      const rippleOsc = ctx.createOscillator();
      const rippleGain = ctx.createGain();
      rippleOsc.type = 'sine';
      rippleOsc.frequency.setValueAtTime(880, now + 0.04);
      rippleGain.gain.setValueAtTime(0.001, now + 0.04);
      rippleGain.gain.linearRampToValueAtTime(0.07, now + 0.06);
      rippleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
      rippleOsc.connect(rippleGain);
      rippleGain.connect(ctx.destination);
      rippleOsc.start(now + 0.04);
      rippleOsc.stop(now + 0.26);
    }
  } catch {
    // Gracefully ignore audio errors in restricted sandboxes
  }
}

/**
 * Play a cute, cheerful "Let's Start!" audio chime and feminine vocalized phrase
 */
export function playStartSound() {
  try {
    // 1. Play cute cheerful video game level-start musical fanfare (cute sweet arpeggio)
    const ctx = getAudioContext();
    if (ctx) {
      const now = ctx.currentTime;

      // Joyful 4-note ascending fanfare: C5 -> E5 -> G5 -> C6 with sparkle
      const notes = [
        { freq: 523.25, time: 0.00, dur: 0.12, vol: 0.11 }, // C5
        { freq: 659.25, time: 0.08, dur: 0.12, vol: 0.12 }, // E5
        { freq: 783.99, time: 0.16, dur: 0.15, vol: 0.13 }, // G5
        { freq: 1046.50, time: 0.24, dur: 0.35, vol: 0.14 }, // C6 (triumph pop)
        { freq: 2093.00, time: 0.28, dur: 0.40, vol: 0.08 }, // C7 fairy dust sparkle
      ];

      notes.forEach(({ freq, time, dur, vol }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + time);

        gain.gain.setValueAtTime(0.001, now + time);
        gain.gain.linearRampToValueAtTime(vol, now + time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur + 0.02);
      });
    }

    // 2. Play soft, cute feminine voice "Let's start!" using Web Speech API
    speakFeminine("Let's start!");
  } catch {
    // Ignore audio errors
  }
}

/**
 * Play a cute celebratory completed chime & cheerful feminine voice ("Yay! / Thank you!")
 */
export function playCelebrationSound(type: 'yay' | 'yippee' | 'thankyou' | 'done' = 'yay') {
  try {
    const ctx = getAudioContext();
    if (ctx) {
      const now = ctx.currentTime;

      // Cute celebratory 3-note sparkle chime: F5 -> A5 -> C6 -> E6
      const chimeNotes = [
        { freq: 698.46, time: 0.00, dur: 0.14, vol: 0.11 }, // F5
        { freq: 880.00, time: 0.09, dur: 0.16, vol: 0.12 }, // A5
        { freq: 1046.50, time: 0.18, dur: 0.22, vol: 0.13 }, // C6
        { freq: 1318.51, time: 0.27, dur: 0.38, vol: 0.12 }, // E6 sparkle
      ];

      chimeNotes.forEach(({ freq, time, dur, vol }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + time);

        gain.gain.setValueAtTime(0.001, now + time);
        gain.gain.linearRampToValueAtTime(vol, now + time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur + 0.02);
      });
    }

    const phrases = {
      yay: 'Yay! Thank you!',
      yippee: 'Yippee! Thank you!',
      thankyou: 'Thank you so much!',
      done: 'All done! Yay!'
    };

    speakFeminine(phrases[type] || 'Yay! Thank you!');
  } catch {
    // Ignore audio errors
  }
}

/**
 * Helper to speak with a clear, cheerful, and sweet girl / feminine voice
 */
function speakFeminine(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Pick explicitly female/girl voices available across browsers & OSs (Windows, Mac, iOS, Android, Chrome)
    const voices = window.speechSynthesis.getVoices();
    const feminineVoice = voices.find(v => 
      /girl|female|woman|zira|samantha|karen|victoria|moira|tessa|fiona|veena|susan|cora|amelie|yuna|kyoko|google.*female|natural.*female|jenny|aria|ana|stephanie|helena/i.test(v.name)
    ) || voices.find(v => 
      v.lang.startsWith('en') && !/male|david|mark|guy|george|stefan|daniel|richard|james|microsoft.*david/i.test(v.name)
    ) || voices.find(v => v.lang.startsWith('en'));

    if (feminineVoice) {
      utterance.voice = feminineVoice;
    }

    // Set pitch high and cheerful to ensure it sounds like a sweet young girl/feminine voice
    utterance.rate = 1.08; // Bright, natural cheerful pace
    utterance.pitch = 1.60; // Sweet, cute girl pitch
    utterance.volume = 1.0;
    window.speechSynthesis.speak(utterance);
  } catch {
    // Ignore speech errors
  }
}

