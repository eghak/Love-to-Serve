module.exports = {
  getAll: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance.read_so().then((soInfo) => res.status(200).send(soInfo));
  },
};
