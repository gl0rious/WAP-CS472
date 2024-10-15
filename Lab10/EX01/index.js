import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

app.get('/image', (req, res) => {
  const imgPath = path.join(process.cwd(), 'diagram.png');
  fs.readFile(imgPath, (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data);
    }
  });
});

app.get('/pdf', (req, res) => {
  const pdfPath = path.join(process.cwd(), 'lab1.pdf');
  fs.readFile(pdfPath, (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.contentType('application/pdf');
      res.end(data);
    }
  });
});

app.get('/about', (req, res) => {
  const aboutPath = path.join(process.cwd(), 'input.txt');
  fs.readFile(aboutPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.contentType('text/plain');
      res.send(data);
    }
  });
});

app.get(['/home', '/'], (req, res) => {
  res.send('Welcome to my website');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.use((req, res, next) => {
  res.status(405).send('Method Not Allowed');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
