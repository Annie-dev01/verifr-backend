const Staff = require("../models/staff.model");
const bcrypt = require("bcrypt");

const seedAdmin = async () => {
  try {
    //const adminRole = "admin";
    const foundAdmin = await Staff.findOne({ role: admin });

    if (!foundAdmin) {
      const adminData = {
        firstName: "Admin",
        lastName: "User",
        password: "adminpassword",
        email: "admin@example.com",
        role: admin,
      };

      const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
      const hashedPassword = await bcrypt.hash(adminData.password, saltRounds);
      adminData.password = hashedPassword;

      const admin = new Staff(adminData);
      await admin.save();
 
      console.log("Admin user seeded successfully");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
};

module.exports = seedAdmin;
