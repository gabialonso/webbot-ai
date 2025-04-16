  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = 'アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤャユュヨョラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array.from({ length: columns }, () => 1);

  function draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#cccccc';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, x) => {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, x * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[x] = 0;
      }

      drops[x]++;
    });
  }

  setInterval(draw, 33);

