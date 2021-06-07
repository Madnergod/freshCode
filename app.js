const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
app.use(express.json({extended  : true}))

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/card",require("./routes/card.route"))
const PORT = config.get("port") || 5000;
//asd

async function start() {
  try {
    await mongoose.connect(
      config.get("mongoUri", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
    );
    app.listen(PORT, () => console.log(`App has been started on PORT ${PORT}`));
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

start();
