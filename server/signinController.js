const bcrypt = require("bcrypt");

module.exports = {
  create: async (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { email, password } = req.body;
    console.log(email, password);
    const userID = await dbInstance.get_email([email]);
    console.log(userID)
    if (!userID[0]) {
      return res.status(401).send("Wrong email or password");
    }
    const isAuth = bcrypt.compareSync(password, userID[0].password);
    if (!isAuth) {
        return res.status(403).send('Wrong email or password')
    }
    return res.status(200).send(userID[0])
  },
};
