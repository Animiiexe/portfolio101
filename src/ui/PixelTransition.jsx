import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

function PixelTransition({
    firstContent,
    secondContent,
    gridSize = 7,
    pixelColor = 'currentColor',
    animationStepDuration = 0.3,
    className = '',
    style = {},
    aspectRatio = '100%',
    onMouseEnter,
}) {
    const containerRef = useRef(null);
    const pixelGridRef = useRef(null);
    const activeRef = useRef(null);
    const delayedCallRef = useRef(null);

    const [isActive, setIsActive] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentSecondContent, setCurrentSecondContent] = useState(secondContent);

    const isTouchDevice =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;

    useEffect(() => {
        setCurrentSecondContent(secondContent);
    }, [secondContent]);

    useEffect(() => {
        const pixelGridEl = pixelGridRef.current;
        if (!pixelGridEl) return;

        pixelGridEl.innerHTML = '';

        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const pixel = document.createElement('div');
                pixel.classList.add('pixelated-image-card__pixel');
                pixel.classList.add('absolute', 'hidden');
                pixel.style.backgroundColor = pixelColor;

                const size = 100 / gridSize;
                pixel.style.width = `${size}%`;
                pixel.style.height = `${size}%`;
                pixel.style.left = `${col * size}%`;
                pixel.style.top = `${row * size}%`;

                pixelGridEl.appendChild(pixel);
            }
        }
    }, [gridSize, pixelColor]);

    const animatePixels = useCallback((activate) => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setIsActive(activate);

        const pixelGridEl = pixelGridRef.current;
        const activeEl = activeRef.current;
        if (!pixelGridEl || !activeEl) return;

        const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
        if (!pixels.length) return;

        gsap.killTweensOf(pixels);
        if (delayedCallRef.current) {
            delayedCallRef.current.kill();
        }

        gsap.set(pixels, { display: 'none' });

        const totalPixels = pixels.length;
        const staggerDuration = animationStepDuration / totalPixels;

        gsap.to(pixels, {
            display: 'block',
            duration: 0,
            stagger: {
                each: staggerDuration,
                from: 'random'
            }
        });

        delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
            activeEl.style.display = activate ? 'block' : 'none';
            activeEl.style.pointerEvents = activate ? 'none' : '';
            setIsAnimating(false);
        });

        gsap.to(pixels, {
            display: 'none',
            duration: 0,
            delay: animationStepDuration,
            stagger: {
                each: staggerDuration,
                from: 'random'
            }
        });
    }, [animationStepDuration, isAnimating]);

    const handleMouseEnter = useCallback(() => {
        if (!isActive && !isAnimating) {
            animatePixels(true);
            if (onMouseEnter) onMouseEnter();
        }
    }, [isActive, isAnimating, animatePixels, onMouseEnter]);

    const handleMouseLeave = useCallback(() => {
        if (isActive && !isAnimating) {
            animatePixels(false);
        }
    }, [isActive, isAnimating, animatePixels]);

    const handleClick = useCallback(() => {
        if (!isAnimating) {
            animatePixels(!isActive);
        }
    }, [isActive, isAnimating, animatePixels]);

    return (
        <div
            ref={containerRef}
            className={`
                ${className}
                bg-[#742bf3]
                text-white
                w-[300px]
                max-w-full
                relative
                overflow-hidden
            `}
            style={style}
            onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
            onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
            onClick={isTouchDevice ? handleClick : undefined}
        >
            <div style={{ paddingTop: aspectRatio }} />

            <div className="absolute inset-0 w-full h-full">
                {firstContent}
            </div>

            <div
                ref={activeRef}
                className="absolute inset-0 w-full h-full z-[2]"
                style={{ display: 'none' }}
            >
                {currentSecondContent}
            </div>

            <div
                ref={pixelGridRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
            />
        </div>
    );
}

export default PixelTransition;