const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build"))); //static folder to build folder

// Put API routes here!
//* being a wildcard ,because of the wild card it goes last
//because if we were to go first, anything after it would never run.

//it says serve the file index.html inside of the build folder whenever anything but APi
//routes are hit

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//beause react is running on port 3000 we use 3001 as react app is already running on 3000 we use express app
//torun on 3001
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Express app running on port ${port}`));
