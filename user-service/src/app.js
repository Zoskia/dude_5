const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3002;

mongoose.connect('mongodb://dude_mongo_user:27017/dudeUser', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({ name: String });
const UserModel = mongoose.model('User', UserSchema);

app.get('/health', (req, res) => {
  res.send('User Service running');
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
