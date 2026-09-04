import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to a DOM element
 * and returns whether it has entered the viewport.
 *
 * @param {Object}  options
 * @param {number}  options.threshold  - % of element visible before triggering (0–1). Default 0.15.
 * @param {string}  options.rootMargin - Shrinks/expands the root viewport. Default '0px 0px -60px 0px'.
 * @param {boolean} options.once       - If true, stop observing after first reveal. Default true.
 */
export function useScrollReveal({
    threshold  = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once       = true,
} = {}) {
    const ref         = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setIsRevealed(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isRevealed };
}
