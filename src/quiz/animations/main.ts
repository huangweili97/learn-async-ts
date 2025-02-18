/**
 * Animates Alice images sequentially using async/await.
 * Each animation waits for the previous one to complete.
 */

  // Define animation keyframes
const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

// Define animation options
const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

// Select elements
const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

if (alice10 && alice20 && alice30) {
  // Ensure animations exist before executing
  try {
    alice10.animate(aliceTumbling1, aliceTiming1).finished  
      .then(() => {
        if (!alice20) throw new Error("alice20 is null");
        return alice20.animate(aliceTumbling1, aliceTiming1).finished;
      })
      .then(() => {
        if (!alice30) throw new Error("alice30 is null");
        return alice30.animate(aliceTumbling1, aliceTiming1).finished;
      })
      .catch((err) => alert(`Error when promising ... ${err.message}`));
  } catch (error) {
    console.error("Animation sequence error:", error);
  }
} else {
  console.warn("One or more Alice elements not found!");
}
