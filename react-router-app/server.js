const morgan = require('morgan');
const express = require('express');

const app = express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 8000);

app.use(morgan('combined'));
app.use(express.static('dist'));

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + app.get('host') + ':' + app.get('port'));
});
