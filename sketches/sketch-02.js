const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";
    
    const center_x = width * 0.5;
    const center_y = height * 0.5;
    let x, y;

    const w = width * 0.01;
    const h = height * 0.1;

    const num = 12;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
        const slice = degToRad(360) / num;
        const angle = slice * i;

        x = center_x + radius * Math.sin(angle);
        y = center_y + radius * Math.cos(angle);
  
        context.save()
  
        context.translate(x, y);
        context.rotate(-angle)
  
        context.beginPath();
        context.rect(-w * 0.5, -h * 0.5, w, h)
        context.fill();
      
        // context.beginPath();
        // context.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 -42.5 * i) + ',0)';
        // context.arc(0, 0, 50, 0, Math.PI * 2);
        // context.fill();
        context.restore();
    }

  };
};

canvasSketch(sketch, settings);
