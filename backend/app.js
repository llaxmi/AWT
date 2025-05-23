const prisma = require("./db/prisma");

async function main() {
  await prisma.user.create({
    data: {
      name: "Laxmi",
      email: "anju@gmail.com",
    },
  });
  console.log("User created");
}
main();
