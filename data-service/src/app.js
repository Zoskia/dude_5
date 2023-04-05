const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

mongoose.connect('mongodb://dude_mongo_data:27017/dudeData', { useNewUrlParser: true, useUnifiedTopology: true });

const DataSchema = new mongoose.Schema({ data: String });
const DataModel = mongoose.model('Data', DataSchema);

app.get('/health', (req, res) => {
  res.send('Data Service running');
});

app.listen(port, () => {
  console.log(`Data service listening at http://localhost:${port}`);
});
