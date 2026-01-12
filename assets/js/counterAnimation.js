/**
 * Animates a single counter element from 0 to its target value.
 * @param {HTMLElement} counterElement
 * @param {number} duration - Time in ms for animation to complete
 */
export const animateCounter = (counterElement, duration = 2000) => {
  // Get the target number from the HTML attribute
  const target = +counterElement.getAttribute("data-target");
  const start = 0;
  const startTime = performance.now();

  const updateCount = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    // Easing function: easeOutQuad (starts fast, slows down at end)
    // Formula: 1 - (1 - t) * (1 - t)
    const easeProgress = 1 - (1 - progress) * (1 - progress);

    const currentCount = Math.floor(easeProgress * (target - start) + start);

    // Format number with commas (e.g., 10,000)
    counterElement.innerText = currentCount.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      // Ensure final number is exact
      counterElement.innerText = target.toLocaleString() + "+";
    }
  };

  requestAnimationFrame(updateCount);
};

export default animateCounter;
