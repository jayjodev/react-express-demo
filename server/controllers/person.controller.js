const Person = require("../models/Person");

module.exports = (app) => {

  // Get All People
  app.get("/api/person", async (req, res) => {
    const people = await Person.find({});
    res.send(people);
  });


  // Get Add People
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

  
  // Update person`s name
  app.put("/api/person/:id", async (req, res) => {
    await Person.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) {
        return res.status(500).send({ error: "unsuccessful" });
      }
      res.send({ success: "success" });
    });
  });

  // Delete person`s name
  app.delete("/api/person/:id", async (req, res) => {
    await Person.deleteOne({ _id: req.params.id }, (err, user) => {
      if (err) {
        return res.status(500).send({ error: "unsuccessful" });
      }
      res.send({ success: "success" });
    });
  });
};
