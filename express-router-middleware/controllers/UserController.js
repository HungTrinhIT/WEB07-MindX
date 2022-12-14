const { db } = require("../config/db");
const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");

const Create = async (user) => {
  const { username, password, address } = user;
  const existingUser = await db.users.findOne({ username });

  if (existingUser) {
    throw Error("User already existed");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = {
    username,
    password: hashPassword,
    role: "user",
    address,
    createdDate: new Date(),
  };

  const createdUser = await db.users.insertOne(newUser);

  const returnUser = {
    ...newUser,
    id: createdUser.insertedId,
  };
  return returnUser;
};
const GetById = (id) => {
  return db.users.findOne({
    _id: ObjectId(id),
  });
};

const Update = (id, payload) => {};

module.exports = {
  Create,
  GetById,
  Update,
};
