  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {
      res.send('This is the DB fo SL MED FORUM!');
  });

  const port = process.env.PORT || 4444;
  app.listen(port);