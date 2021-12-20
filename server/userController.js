
const bcrypt = require("bcrypt");

module.exports = {
  create: async (req, res, next) => {
    const dbInstance = req.app.get("db"); //this is massive connecting to my db
    const { firstName, lastName, email, phone, password } = req.body;
    const result = await dbInstance.read_user(email); //telling massive to run this query

    console.log(result);
    dbInstance
      .read_user([email])
      .then(async(req) => {
        if (req.length > 0) {
          console.log("Email taken");
          return res.send("Email already exist").status(401);
        } else {
          console.log("Create User");
          //hash password here - before we create a new user
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(password, salt)
          dbInstance
            .create_user([firstName, lastName, email, phone, hashedPassword])
            .then(() => res.sendStatus(200))
            .catch((err) => {
              res
                .status(500)
                .send({ errorMessage: "Oops! Something went wrong!" });
              console.log(err);
            });
        }
      })
      .catch((err) => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .read_user()
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_user()
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(err);
      });
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_user()
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_user()
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
      });
  },
};

// axios.post(`http://localhost:3001/api/user/${}`, values) - to delete

//when user login their user_id needs to be send to the front end.
