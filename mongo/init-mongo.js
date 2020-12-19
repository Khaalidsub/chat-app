// db.createUser({ user: "lotus", pwd: "2345", roles: ["root"] });
db.createCollection("users");
db.users.insert({
  _id: ObjectId("507f191e810c19729de860ea"),
  title: "MongoDB Overview",
  description: "MongoDB is no sql database",
  by: "tutorials point",
  url: "http://www.tutorialspoint.com",
  tags: ["mongodb", "database", "NoSQL"],
  likes: 100,
});
