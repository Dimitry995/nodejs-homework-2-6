const mongoose = require("mongoose");

const app = require("./app");
const PORT = 3600;
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
