const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const userInput = req.query.input;
  // Intentional Bug: Using eval() can lead to code injection vulnerabilities.
  // let result = eval("2 + " + userInput); 
  res.send(`Result is: true`);
});

// Unused variable example (dead code)
// const unusedVariable = 42;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
