<<<<<<< HEAD
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.send('🔥 First Deployment from GitHub to Azure! 🔥');

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
=======
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Azure App Service CI/CD 🚀');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
>>>>>>> b3416f76bb6fbd5639c1e6bac261d5e6b5ee79f2
