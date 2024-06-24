const express = require("express");
const cors = require("cors");
const specRouter = require("./routes/specialties.routes");
const subjectsRouter = require("./routes/subjects.routes");
const resultRouter = require("./routes/result.routes");
const config = require("./config/config");

const app = express();
app.use(cors());

app.use("/api", specRouter);
app.use("/api", subjectsRouter);
app.use("/api", resultRouter);
app.listen(config.port);
