const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "en";

module.exports = async () => {
  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      username: faker.internet.userName(),
      password: await bcrypt.hash("1234", 8),
      role_id: faker.datatype.number({ min: 1, max: 4 }),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
