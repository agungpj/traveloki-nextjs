// const Room = require("../models/room");
// const dbConnect = require("../config/dbConnect.js");
// const rooms = require("../data/rooms.js");

// dbConnect();

// const importData = async () => {
//   try {
//     await Room.deleteMany();
//     console.log("Room is deleted!");

//     await Room.insertMany(rooms);
//     console.log("All rooms is added!");
//   } catch (e) {
//     console.log(e.message);
//     process.exit();
//   }
// };

// const destroyData = async () => {
//   try {
//     await Room.deleteMany();
//     console.log("Data Is Destroyed");

//     // exit node.js process
//     process.exit();
//   } catch (error) {
//     console.error(`${error}`);
//     process.exit(1);
//   }
// };

// // node backend/seeder -d command validation
// if (process.argv[2] === "-d") {
//   destroyData();
// } else {
//   importData();
// }

const mongoose = require("mongoose");
const Room = require("../models/room");
const rooms = require("../data/rooms");

mongoose.connect("mongodb://localhost:27017/traveloka", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const importData = async () => {
  try {
    await Room.deleteMany();
    console.log("Room is deleted!");

    await Room.insertMany(rooms);
    console.log("All rooms is added!");
  } catch (e) {
    console.log(e.message);
    process.exit();
  }
};

importData();
