const mongoose = require('mongoose');

/*
You need to implement a followSchema using the Mongoose library, which defines the structure and properties of a follow relationship between users.

The followSchema consists of two main fields:

follower: This field represents the user who is initiating the follow action. It is of type mongoose.Schema.Types.ObjectId, indicating that it stores the unique identifier (ObjectId) of a user document in the database. The ref property is set to 'User', specifying that this field references the User model. It is marked as required: true, meaning that a valid follower must be provided.

following: This field represents the user who is being followed. Similar to the follower field, it is also of type mongoose.Schema.Types.ObjectId and references the User model. It is also marked as required: true, indicating that a valid user being followed must be provided.

Additionally, the { timestamps: true } option is included in the schema, which automatically adds two timestamp fields to the documents created from this schema: createdAt and updatedAt. These fields store the creation and last modification timestamps, respectively.

Sample Object:
{
  follower: ObjectId("609f7a49c2c67e0015376ef2"),
  following: ObjectId("60a24562f5f536001567b8a1"),
  createdAt: 2023-05-22T10:15:30.000Z,
  updatedAt: 2023-05-22T12:45:15.000Z
}
*/
const followSchema = new mongoose.Schema({
  //Write your code here
});

const Follow = mongoose.model('Follow', followSchema);

module.exports = Follow;