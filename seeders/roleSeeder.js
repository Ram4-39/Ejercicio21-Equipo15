const Role = require("../models/Role");

module.exports = async () => {
  const roles = [
    { name: "Lector" },
    { name: "Escritor" },
    { name: "Editor" },
    { name: "Administrador" },
  ];

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de roles.");
};
