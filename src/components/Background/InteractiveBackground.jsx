import { useEffect, useRef } from 'react';

export const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let w, h;
        let particles = [];

        // Split metrics for tailored feel
        const interactionRadius = 150; // Smaller, tighter physical reaction
        const colorRadius = 300;       // Larger, "longer" gradient glow
        const spacing = 40;            // Grid spacing

        let mouse = { x: undefined, y: undefined };

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            init();
        };

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = 2;
                this.density = (Math.random() * 30) + 1;
                this.distance = 1000;
            }

            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                this.distance = distance; // Store strictly for color

                // --- movement logic (smaller radius) ---
                if (distance < interactionRadius) {
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;

                    let maxDistance = interactionRadius;
                    let force = (maxDistance - distance) / maxDistance;

                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // Elastic return
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 15;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 15;
                    }
                }
            }

            draw() {
                // --- color logic (longer gradient) ---
                // Base: Slate 400 (Grayish Blue) - Resting
                // Active: Pure Blue (var(--accent-primary))

                let r = 148, g = 163, b = 184; // Slate 400
                let opacity = 0.3;
                let size = this.size;

                if (this.distance < colorRadius) {
                    const factor = 1 - (this.distance / colorRadius);
                    const enhancedFactor = Math.pow(factor, 0.6);

                    // Interpolate to Blue (37, 99, 235) ONLY
                    r = 148 + (37 - 148) * enhancedFactor;
                    g = 163 + (99 - 163) * enhancedFactor;
                    b = 184 + (235 - 184) * enhancedFactor;

                    opacity = 0.3 + (0.7 * enhancedFactor);
                    size = this.size + (2 * enhancedFactor);
                }

                ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            // Create a grid of particles
            // Fix: loop until w + spacing to ensure right edge coverage
            for (let y = 0; y < h + spacing; y += spacing) {
                for (let x = 0; x < w + spacing; x += spacing) {
                    particles.push(new Particle(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        resize();
        animate();

        const handleResize = () => {
            resize();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        };

        const handleTouchStart = (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        };

        const handleMouseLeave = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleMouseLeave);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleMouseLeave);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                // Light gradient: White center -> Soft Blue/Grey edges
                background: 'radial-gradient(circle at center, #ffffff 0%, #f1f5f9 100%)'
            }}
        />
    );
};
