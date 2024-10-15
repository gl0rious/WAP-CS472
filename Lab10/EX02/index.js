import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getNumbers = (req) => {
  let a, b;
  
  if (req.params.a && req.params.b) {
    a = parseFloat(req.params.a);
    b = parseFloat(req.params.b);
  } 
  else if (req.query.a && req.query.b) {
    a = parseFloat(req.query.a);
    b = parseFloat(req.query.b);
  } 
  else if (req.body.a && req.body.b) {
    a = parseFloat(req.body.a);
    b = parseFloat(req.body.b);
  }

  return { a, b };
};

app.get(['/addition/:a/:b', '/addition'], (req, res) => {
  const { a, b } = getNumbers(req);
  if (!a || !b) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.json({ result: a + b });
});

app.get(['/subtraction/:a/:b', '/subtraction'], (req, res) => {
  const { a, b } = getNumbers(req);
  if (!a || !b) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.json({ result: a - b });
});

app.get(['/multiplication/:a/:b', '/multiplication'], (req, res) => {
  const { a, b } = getNumbers(req);
  if (!a || !b) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.json({ result: a * b });
});

app.get(['/division/:a/:b', '/division'], (req, res) => {
  const { a, b } = getNumbers(req);
  if (!a || !b) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero' });
  }
  res.json({ result: a / b });
});

app.get(['/modulus/:a/:b', '/modulus'], (req, res) => {
  const { a, b } = getNumbers(req);
  if (!a || !b) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  res.json({ result: a % b });
});

app.post(['/addition', '/subtraction', '/multiplication', '/division', '/modulus'], (req, res) => {
  const { a, b } = getNumbers(req);
  if (!a || !b) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  let result;
  switch (req.path) {
    case '/addition':
      result = a + b;
      break;
    case '/subtraction':
      result = a - b;
      break;
    case '/multiplication':
      result = a * b;
      break;
    case '/division':
      if (b === 0) {
        return res.status(400).json({ error: 'Division by zero' });
      }
      result = a / b;
      break;
    case '/modulus':
      result = a % b;
      break;
    default:
      return res.status(404).json({ error: 'Operation not found' });
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
