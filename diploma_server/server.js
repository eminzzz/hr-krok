require("./config/db")();
const express = require("express");
const app = express();
const { PORT, SERVER_URI } = require("./config");
const { serverListenMessage } = require("./messages");
const { userRoute, vacancieRoute } = require("./routes");

app.use(express.json());

app.use("/user", userRoute);
app.use("/vacancie", vacancieRoute);

app.listen(PORT, () => {
  console.log(`${serverListenMessage} ${SERVER_URI}:${PORT}`);
});
