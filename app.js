const express = require("express");
const nodemon = require('nodemon');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "index.html"));
  });


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
