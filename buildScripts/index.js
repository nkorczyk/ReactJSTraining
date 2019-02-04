const app = require('./app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Express listening on port ${port}`); // eslint-disable-line no-console
});
