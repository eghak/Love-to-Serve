require("dotenv").config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");

const userController = require("./userController");
const sopostController = require("./sopostController");
const signinController = require("./signinController");
const solistController = require("./solistController");

const app = express();

const { PORT, DATABASE_URL } = process.env;

app.use(cors());
app.use(express.json());

// app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.static(path.resolve(`${__dirname}/../build`)));

massive({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
  })
  .catch((err) => console.log(err));

//Endpoint(or also called Routes)

//(signIn endpoint/routes)
app.post("/api/user/signin", signinController.create);

//(user endpoint/routes)
app.post("/api/user", userController.create);
app.get("/api/user", userController.getAll);
app.get("/api/user/:id", userController.getOne);
app.put("/api/user/:id", userController.create);
app.delete("/api/user/:id", userController.create);

//(soPost endpoint/routes)
app.post("/api/sopost", sopostController.create);
app.get("/api/sopost", sopostController.getAll);
app.get("/api/sopost", sopostController.getOne);
app.put("/api/sopost,", sopostController.create);
app.delete("/api/sopost", sopostController.create);

//(soList endpoint/routes)
app.get("/api/solist", solistController.getAll);

app.listen(PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});