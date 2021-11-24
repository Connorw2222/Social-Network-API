const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { User, Thought } = require('./models');
const apiRoutes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// localhost:3000/api
app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// mongoose.set('useCreateIndex', true);
// mongoose.set('debug', true);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
