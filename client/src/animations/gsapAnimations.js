import gsap from 'gsap';

/**
 * Animate numeric counter using GSAP
 * @param {HTMLElement} targetRef - The DOM element or object to animate
 * @param {number} endValue - Final number
 * @param {number} duration - Seconds duration
 * @param {string} suffix - e.g. '%', ' GPA', etc.
 */
export function animateCounter(targetRef, endValue, duration = 1.2, suffix = '') {
  if (!targetRef) return null;
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      if (targetRef) {
        const isFloat = endValue % 1 !== 0;
        targetRef.textContent = (isFloat ? obj.val.toFixed(1) : Math.round(obj.val).toLocaleString()) + suffix;
      }
    }
  });
}

/**
 * Pulse effect for AI indicator or glowing element
 */
export function pulseElement(targetRef) {
  if (!targetRef) return null;
  return gsap.to(targetRef, {
    scale: 1.05,
    opacity: 0.85,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}

