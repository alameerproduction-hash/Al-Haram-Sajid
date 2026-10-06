/**
 * Web Audio API Broadcast Sound Designer
 * Synthesizes a 10-second international TV news channel ident soundtrack
 * synchronized with the 3D logo intro timeline:
 *
 * 0:00 — Opening: Deep atmospheric rumble + low-frequency cinematic drone
 * 0:01 — Light Streak: Futuristic airy sweep panning left to right
 * 0:02 — Logo Emergence: Deep cinematic bass swell
 * 0:03 — 3D Rotation Starts: Smooth metallic whoosh with stereo movement
 * 0:04–0:06 — 360° Rotation: Continuous cinematic riser, rotational whooshes, low pulses
 * 0:06 — Camera Orbit: Cinematic orbital sweep across stereo field
 * 0:07 — Logo Faces Front: Tension riser + DEEP BROADCAST IMPACT (sub hit + metallic resonance + shimmer)
 * 0:08 — Final Logo Hold: Premium tonal glass chime
 * 0:09–0:10 — End: Reverse whoosh + soft atmospheric tail into silence
 */
export class BroadcastSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;
  private isPlaying: boolean = false;

  public start(muted: boolean = false): boolean {
    this.isMuted = muted;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return false;

      if (this.ctx) {
        this.stop();
      }

      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.isMuted ? 0 : 0.75;
      this.masterGain.connect(this.ctx.destination);

      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }

      this.isPlaying = true;
      this.scheduleTimeline();
      return true;
    } catch {
      return false;
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        muted ? 0 : 0.75,
        this.ctx.currentTime,
        0.05
      );
    }
    if (!muted && this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.ctx) {
      try {
        this.ctx.close().catch(() => {});
      } catch {
        // Ignore close error
      }
      this.ctx = null;
      this.masterGain = null;
    }
  }

  private createNoiseBuffer(durationSec: number): AudioBuffer | null {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * durationSec;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  private scheduleTimeline() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // 0:00 — OPENING: Deep atmospheric rumble + low-frequency cinematic drone (55Hz A1 + 110Hz A2)
    this.scheduleDrone(now, 9.8);

    // 0:01 — LIGHT STREAK: Futuristic whoosh / airy sweep (Left -> Right)
    this.scheduleWhoosh(now + 0.9, 1.3, -0.85, 0.85, 400, 1800, 0.22);

    // 0:02 — LOGO EMERGENCE: Deep cinematic bass swell
    this.scheduleBassSwell(now + 1.8, 2.2);

    // 0:03 — 3D ROTATION STARTS: Smooth metallic whoosh
    this.scheduleWhoosh(now + 2.9, 1.4, 0.7, -0.7, 300, 1200, 0.28);

    // 0:04–0:06 — 360° ROTATION: Continuous cinematic riser + subtle digital broadcast pulses
    this.scheduleCinematicRiser(now + 3.6, 3.3);
    this.scheduleBroadcastPulses(now + 3.5, 3.2);

    // 0:06 — CAMERA ORBIT: Cinematic orbital sweep moving around stereo field
    this.scheduleWhoosh(now + 5.7, 1.3, -0.9, 0.9, 250, 1600, 0.32);

    // 0:07 — LOGO FACES FRONT: DEEP BROADCAST IMPACT
    this.scheduleBroadcastImpact(now + 6.95);

    // 0:08 — FINAL LOGO HOLD: Premium tonal shimmer / glass chime
    this.scheduleGlassChime(now + 7.6);

    // 0:09–0:10 — END: Subtle reverse whoosh + soft atmospheric tail
    this.scheduleWhoosh(now + 8.8, 1.1, 0.3, -0.3, 900, 220, 0.16);
  }

  private scheduleDrone(startTime: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(55, startTime); // A1

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(55.4, startTime); // Slight detune for warmth

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, startTime);
    filter.frequency.exponentialRampToValueAtTime(260, startTime + 6.5);
    filter.frequency.exponentialRampToValueAtTime(90, startTime + duration);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(0.18, startTime + 1.5);
    gain.gain.setValueAtTime(0.18, startTime + duration - 2.0);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
  }

  private scheduleWhoosh(
    startTime: number,
    duration: number,
    panStart: number,
    panEnd: number,
    freqStart: number,
    freqPeak: number,
    peakGain: number
  ) {
    if (!this.ctx || !this.masterGain) return;
    const noiseBuffer = this.createNoiseBuffer(duration);
    if (!noiseBuffer) return;

    const source = this.ctx.createBufferSource();
    source.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.setValueAtTime(2.2, startTime);
    filter.frequency.setValueAtTime(freqStart, startTime);
    filter.frequency.exponentialRampToValueAtTime(
      freqPeak,
      startTime + duration * 0.5
    );
    filter.frequency.exponentialRampToValueAtTime(
      Math.max(120, freqStart * 0.7),
      startTime + duration
    );

    const panner = this.ctx.createStereoPanner();
    panner.pan.setValueAtTime(panStart, startTime);
    panner.pan.linearRampToValueAtTime(panEnd, startTime + duration);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + duration * 0.45);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    source.connect(filter);
    filter.connect(panner);
    panner.connect(gain);
    gain.connect(this.masterGain);

    source.start(startTime);
    source.stop(startTime + duration);
  }

  private scheduleBassSwell(startTime: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(48, startTime);
    osc.frequency.exponentialRampToValueAtTime(82.4, startTime + duration);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(0.28, startTime + duration * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  private scheduleCinematicRiser(startTime: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110, startTime);
    osc.frequency.exponentialRampToValueAtTime(440, startTime + duration);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, startTime);
    filter.frequency.exponentialRampToValueAtTime(2400, startTime + duration);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.22, startTime + duration * 0.92);
    gain.gain.linearRampToValueAtTime(0.001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  private scheduleBroadcastPulses(startTime: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    const step = 0.25; // 4 pulses per second
    const count = Math.floor(duration / step);

    for (let i = 0; i < count; i++) {
      const t = startTime + i * step;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const panner = this.ctx.createStereoPanner();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(i % 2 === 0 ? 220 : 330, t);

      panner.pan.setValueAtTime(Math.sin(i * 0.9) * 0.65, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.06, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);

      osc.connect(panner);
      panner.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.2);
    }
  }

  private scheduleBroadcastImpact(startTime: number) {
    if (!this.ctx || !this.masterGain) return;

    // 1. Deep Sub-Bass Drop (110Hz -> 36Hz)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(115, startTime);
    subOsc.frequency.exponentialRampToValueAtTime(36, startTime + 0.45);
    subOsc.frequency.exponentialRampToValueAtTime(28, startTime + 2.2);

    subGain.gain.setValueAtTime(0.001, startTime);
    subGain.gain.linearRampToValueAtTime(0.55, startTime + 0.025);
    subGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.3);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(startTime);
    subOsc.stop(startTime + 2.35);

    // 2. Metallic Resonance Chord (A2, E3, A3, C#4)
    const freqs = [110, 164.81, 220, 277.18];
    freqs.forEach((f) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, startTime);

      g.gain.setValueAtTime(0.001, startTime);
      g.gain.linearRampToValueAtTime(0.11, startTime + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.4);

      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(startTime);
      osc.stop(startTime + 2.45);
    });
  }

  private scheduleGlassChime(startTime: number) {
    if (!this.ctx || !this.masterGain) return;
    // Shimmering high harmonic triad (A5, E6, A6)
    const harmonics = [880, 1318.5, 1760];
    harmonics.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = startTime + idx * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.075, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.1);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 2.15);
    });
  }
}
