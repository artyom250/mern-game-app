const express = require('express');
const cors = require("cors");
const routes = require("./router");
const app = express();

app.use(cors());
app.use(routes);

app.listen(3000, function() {
    console.log("🚀 Server is live");
});