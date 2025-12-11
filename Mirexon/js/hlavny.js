    // 🎨 NEURAL BACKGROUND (React → Vanilla JS)
    const canvas = document.getElementById('neural-canvas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Resize handler
    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse tracking
    const mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    
    // Nodes array
    const nodes = [];
    const nodeCount = 450;
    
    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5
      });
    }
    
    // Animation loop
    const animate = () => {
      // Trail efekt namiesto clearRect
      ctx.fillStyle = 'rgba(14, 14, 14, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      // Update & draw nodes
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        
        // Update position
        n.x += n.vx;
        n.y += n.vy;
        
        // Bounce off edges
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffaa';
        ctx.shadowColor = '#00ffaa';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      // Connections between nodes
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 170, ${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Mouse connections (MAGNETIC EFFECT)
      if (mouse.x && mouse.y) {
        for (let i = 0; i < nodeCount; i++) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 0, 180, ${1 - dist / 150})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    console.log('🧠 Neural Background aktivovaný! (Scroll OK)');