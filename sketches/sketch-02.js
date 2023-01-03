const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const getRandomColor =() => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomRange = (min, max) => {
  return Math.random() * (min, max) + min;
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
        context.rotate(-angle);
        context.scale(randomRange(1, 3), 1);

        // context.fillStyle = getRandomColor();
        context.beginPath();
        context.rect(-w * 0.5, -h * 0.5, w, h)
        context.fill();
        context.restore();

        context.save()
        context.translate(center_x, center_y);
        context.rotate(-angle)

        context.lineWidth = 10;
        
        context.beginPath()
        context.arc(0, 0, radius, slice * -0.3 , slice * 0.3);
        context.stroke();
        context.restore();

    }

  };
};

canvasSketch(sketch, settings);
