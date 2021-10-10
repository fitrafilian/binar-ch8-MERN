const mongoose = require("mongoose");

// Connect database
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
