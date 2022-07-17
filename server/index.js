// eslint-disable-next-line import/no-unresolved
const express = require('express');
const controllers = require('./controllers');


const app = express();

app.use(express.json());

app.use(express.static('client/dist'));

app.get('/products*', (req, res) => {
  controllers.get(req.path)
    .then((products) => {
      res.status(200).send(products);
    });
});

app.get('/reviews', (req, res) => {
  controllers.get(req.path)
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch();
});

app.get('/reviews/meta', (req, res) => {
  const config = { params: req.query };
  controllers.get(req.path, config).then((metaData) => {
    res.status(200).send(metaData);
  });
});

app.get('/products/:id', (req, res) => {
  controllers.get(req.path).then((productData) => {
    res.status(200).send(productData);
  });

});

app.get('/products/:id/styles', (req, res) => {
  controllers.get(req.path).then((styleData) => {
    res.status(200).send(styleData);
  });
});



app.get('/qa/questions', (req, res) => {
  debugger;
  controllers.get(req.path, { params: req.query })
    .then((questions) => res.status(200).send(questions));
});

//ALL PUT REQUESTS
app.put('/', (req, res) => {
  // 2nd arg
  console.log(req.body.data);
  controllers.put(req.path, req.body.data)
    .then((questions) => res.status(200).send(questions));
});


const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
