const mongoose = require("mongoose");

const app = require("./app");
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect('mongodb+srv://dimas_zd:X32fCHGr6VWrtOXj@cluster13.ecufgwe.mongodb.net/')
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Database connection successful. Server run on PORT ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
