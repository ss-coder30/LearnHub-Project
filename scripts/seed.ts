const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const existingCategories = await database.category.findMany();
    if (existingCategories.length === 0) {
      await database.category.createMany({
        data: [
          { name: "Computer Science" },
          { name: "Fitness" },
          { name: "Music" },
          { name: "Engineering" },
          { name: "Photography" },
          { name: "Accounting" },
        ],
      });
      console.log("Categories seeded successfully");
    } else {
      console.log("Categories already exist");
    }
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
