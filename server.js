const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const subscriptionsRouter = require("./routers/subscriptionsRoute");
const moviesRouter = require("./routers/moviesRoute");
const membersRouter = require("./routers/membersRoute");

const app = express();

app.use(cors());

require("./configs/database");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/movies", moviesRouter);
app.use("/api/members", membersRouter);
app.use("/api/subscriptions", subscriptionsRouter);

app.listen(8000);
