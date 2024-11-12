// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Vercel!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
