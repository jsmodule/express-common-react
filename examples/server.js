import express from 'express';
// const routes = require('./routes');

const app = express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

// app.use(routes);
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + app.get('host') + ':' + app.get('port'));
});
