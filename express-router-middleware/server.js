require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(cors("*"));

// Routes
app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("Hello welcome to our API");
});

const PORT = 3001;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
