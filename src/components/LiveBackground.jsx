import { useEffect, useRef } from 'react';

const LiveBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const mouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.active = true;
        };

        const mouseLeave = () => {
            mouseRef.current.active = false;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseleave', mouseLeave);
        resize();

        // Cyber Grid & Particles settings
        const gridSize = 50;
        let gridOffset = 0;
        const maxDist = 120; // Maximum distance to draw connection lines

        const particles = [];
        const particleCount = Math.min(80, Math.floor((width * height) / 18000)); // Dynamic count based on screen size

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.5 + 0.5,
                baseAlpha: Math.random() * 0.3 + 0.1
            });
        }

        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.03)'; // Very subtle cyan
            ctx.lineWidth = 0.5;

            // Vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal scrolling lines
            for (let y = gridOffset; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            gridOffset += 0.2;
            if (gridOffset >= gridSize) {
                gridOffset = 0;
            }
        };

        const drawNetwork = () => {
            const mouse = mouseRef.current;
            
            // Update and draw particles
            particles.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce or wrap edges
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.fillStyle = `rgba(0, 229, 255, ${p.baseAlpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Draw lines between nearby particles
                for (let j = idx + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.12;
                        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // Draw lines to mouse cursor if close
                if (mouse.active && mouse.x !== null && mouse.y !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const mouseMaxDist = 180;

                    if (dist < mouseMaxDist) {
                        const alpha = (1 - dist / mouseMaxDist) * 0.25;
                        // Use gradient for lines to mouse for futuristic glow
                        ctx.strokeStyle = `rgba(124, 77, 255, ${alpha})`; // Indigo glow to mouse
                        ctx.lineWidth = 0.7;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            });
        };

        const render = () => {
            // Dark solid backdrop
            ctx.fillStyle = '#030307';
            ctx.fillRect(0, 0, width, height);

            // Ambient background glow centered on mouse
            const mouse = mouseRef.current;
            if (mouse.active && mouse.x !== null && mouse.y !== null) {
                const radialGlow = ctx.createRadialGradient(
                    mouse.x, mouse.y, 0,
                    mouse.x, mouse.y, 350
                );
                radialGlow.addColorStop(0, 'rgba(124, 77, 255, 0.04)');
                radialGlow.addColorStop(0.5, 'rgba(0, 229, 255, 0.01)');
                radialGlow.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = radialGlow;
                ctx.fillRect(0, 0, width, height);
            }

            drawGrid();
            drawNetwork();

            // Radial vignette edge gradient
            const vignette = ctx.createRadialGradient(width / 2, height / 2, width / 4, width / 2, height / 2, width * 0.8);
            vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
            vignette.addColorStop(1, 'rgba(2, 2, 5, 0.9)');
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, width, height);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseleave', mouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10"
        />
    );
};

export default LiveBackground;
