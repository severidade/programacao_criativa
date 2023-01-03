const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]
};

const getRandomColor =() => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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

    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
        const slice = math.degToRad(360) / num;
        const angle = slice * i;

        x = center_x + radius * Math.sin(angle);
        y = center_y + radius * Math.cos(angle);
  
        context.save()
  
        context.translate(x, y);
        context.rotate(-angle);
        context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

        // context.fillStyle = getRandomColor();
        context.beginPath();
        context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h)
        context.fill();
        context.restore();

        context.save()
        context.translate(center_x, center_y);
        context.rotate(-angle)

        context.lineWidth = random.range(5 , 20);
        
        context.beginPath()
        // context.arc(0, 0, radius, slice * -0.3 , slice * 0.3);
        
        context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8) , slice * random.range(1, 5));
        context.stroke();
        context.restore();

    }

  };
};

canvasSketch(sketch, settings);
