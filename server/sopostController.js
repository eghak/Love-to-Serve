module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { fullName, serviceNeeded, email, phone, userID } = req.body;

    dbInstance
      .create_sopost([fullName, serviceNeeded, email, phone, userID])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .read_sopost()
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_sopost()
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
      .update_sopost()
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
      .delete_sopost()
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong!" });
      });
  },
};
