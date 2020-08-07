const Person = require("../models/Person");

module.exports = (app) => {
  app.get("/api/person", async (req, res) => {
    const people = await Person.find({});
    res.send(people);
  });

  app.post("/api/person", async (req, res) => {
    const { name } = req.body;
    const person = new Person({
      name,
    });
    try {
      await person.save();
      res.send(person);
    } catch (err) {
      res.send(400, err);
    }
  });
};
