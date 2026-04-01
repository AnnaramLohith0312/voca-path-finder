import { useEffect, useRef } from "react";

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const nodes: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      r: number;
      pulse: number;
      pulseSpeed: number;
    }[] = [];
    const nodeCount = 50;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize nodes with varying sizes and pulse animations
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2.5 + 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections with gradient effect
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const opacity = 0.12 * (1 - dist / 200);
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y, 
              nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, `rgba(45, 185, 175, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(45, 185, 175, ${opacity * 0.5})`);
            gradient.addColorStop(1, `rgba(45, 185, 175, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[j].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with pulsing glow
      nodes.forEach((node) => {
        // Update pulse
        node.pulse += node.pulseSpeed;
        const pulseScale = 1 + Math.sin(node.pulse) * 0.3;
        const pulseOpacity = 0.3 + Math.sin(node.pulse) * 0.15;
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.r * 4 * pulseScale
        );
        glowGradient.addColorStop(0, `rgba(45, 185, 175, ${pulseOpacity * 0.5})`);
        glowGradient.addColorStop(1, "rgba(45, 185, 175, 0)");
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 4 * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 185, 175, ${pulseOpacity + 0.2})`;
        ctx.fill();

        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges with slight padding
        if (node.x < 10 || node.x > canvas.width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > canvas.height - 10) node.vy *= -1;
      });

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default NetworkBackground;
