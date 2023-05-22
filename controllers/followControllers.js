const User = require('../models/User');
const Follow = require('../models/Follow');

// Follow a user

/*
You need to implement a controller function called followUser that handles the logic for a user to follow another user. The function receives a request (req) and response (res) object, and it operates asynchronously.

The problem statement can be described as follows:

The followUser function takes in the followerId and followingId from the request body. It first attempts to find the user with the followerId and followingId using the User model. If either the follower or following user is not found, the function returns a JSON response with a 404 status code and an error message stating that the user was not found.

Next, the function checks if there is an existing follow relationship between the followerId and followingId using the Follow model. If such a follow relationship already exists, the function returns a JSON response with a 400 status code and an error message stating that the user is already being followed.

If the above checks pass, a new Follow object is created with the followerId and followingId, and it is saved to the database using the save() method. Then, a JSON response with a 201 status code and the newly created follow object is returned.

If any error occurs during the execution of the function, it is caught in the catch block. The error is logged to the console, and a JSON response with a 500 status code and an error message indicating a server error is sent back.

Sample Input:
{
  "followerId": "611d9e5d2c992a1f5a5b95d8",
  "followingId": "611d9e5d2c992a1f5a5b95d9"
}
Sample Output:
{
  "_id": "611d9e5d2c992a1f5a5b95da",
  "follower": "611d9e5d2c992a1f5a5b95d8",
  "following": "611d9e5d2c992a1f5a5b95d9",
  "createdAt": "2023-04-21T10:00:00.000Z",
  "updatedAt": "2023-04-21T10:00:00.000Z",
  "__v": 0
}
HTTP status code: 201 (Created)
-------------------------------------------
Sample Input:
{
  "followerId": "611d9e5d2c992a1f5a5b95d8",
  "followingId": "611d9e5d2c992a1f5a5b95d9"
}
Sample Output:
{
  "error": "You are already following this user"
}
HTTP status code: 400 (Bad Request)
-------------------------------------------
Sample Input:
{
  "followerId": "611d9e5d2c992a1f5a5b95d8",
  "followingId": "611d9e5d2c992a1f5a5b95da"
}
Sample Output:
{
  "error": "User not found"
}
HTTP status code: 404 (Not Found)
-------------------------------------------
Sample Input:
{
  "followerId": "invalidId",
  "followingId": "611d9e5d2c992a1f5a5b95d9"
}
Sample Output:
{
  "error": "Server error"
}
HTTP status code: 500 (Internal Server Error)
*/
async function followUser(req, res) {
  try {
    const { followerId, followingId } = req.body;
    //Write your code here
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Unfollow a user
/*
You need to implement a controller function called unfollowUser that handles the logic for a user to unfollow another user. The function receives a request (req) and response (res) object, and it operates asynchronously.

The problem statement can be described as follows:

The unfollowUser function takes in the followerId and followingId from the request body. It first attempts to find the user with the followerId and followingId using the User model. If either the follower or following user is not found, the function returns a JSON response with a 404 status code and an error message stating that the user was not found.

Next, the function checks if there is an existing follow relationship between the followerId and followingId using the Follow model. If such a follow relationship does not exist, the function returns a JSON response with a 400 status code and an error message stating that the user is not being followed.

If the above checks pass, the existing follow relationship is removed from the database using the remove() method.

Finally, a JSON response with a 200 status code and a message indicating a successful unfollow is returned.

If any error occurs during the execution of the function, it is caught in the catch block. The error is logged to the console, and a JSON response with a 500 status code and an error message indicating a server error is sent back.
Sample Input:
{
  "followerId": "6141878fc609042b6f0a6eb0",
  "followingId": "6141878fc609042b6f0a6eb1"
}
Sample Output (HTTP Code: 200):
{
  "message": "Unfollowed successfully"
}
----------------------------------------
Sample Input:
{
  "followerId": "6141878fc609042b6f0a6eb0",
  "followingId": "6141878fc609042b6f0a6eb1"
}
Sample Output (HTTP Code: 400):
{
  "error": "You are not following this user"
}
----------------------------------------
Sample Input:
{
  "followerId": "6141878fc609042b6f0a6eb0",
  "followingId": "invalid_id"
}
Sample Output (HTTP Code: 404):
{
  "error": "User not found"
}
*/
async function unfollowUser(req, res) {
  try {
    //Write your code here
    res.status(200).json({ message: 'Unfollowed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Remove a follower
/*
You need to implement a controller function called removeFollower that handles the logic for removing a follower from a user's followers list. The function receives a request (req) and response (res) object, and it operates asynchronously.

The problem statement can be described as follows:

The removeFollower function takes in the followerId and followingId from the request body. It first attempts to find the user with the followerId and followingId using the User model. If either the follower or following user is not found, the function returns a JSON response with a 404 status code and an error message stating that the user was not found.

Next, the function checks if there is an existing follow relationship between the followerId and followingId using the Follow model. If such a follow relationship does not exist, the function returns a JSON response with a 400 status code and an error message stating that the user is not following the target user.

If the above checks pass, the existing follow relationship is removed from the database using the remove() method.

Finally, a JSON response with a 200 status code and a message indicating a successful removal of the follower is returned.

If any error occurs during the execution of the function, it is caught in the catch block. The error is logged to the console, and a JSON response with a 500 status code and an error message indicating a server error is sent back.

Sample Input:
{
    "followerId": "6141878fc609042b6f0a6eb0",
    "followingId": "6141878fc609042b6f0a6eb1"
}
Sample Output (HTTP Code: 200):
{
    "message": "Follower removed successfully"
}
Sample Input:
{
    "followerId": "6141878fc609042b6f0a6eb0",
    "followingId": "6141878fc609042b6f0a6eb2"
}
Sample Output (HTTP Code: 400):
{
    "error": "This user is not following you"
}
*/
async function removeFollower(req, res) {
  try {
    const { followerId, followingId } = req.body;
    // Write your code here

    res.status(200).json({ message: 'Follower removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Get all followers of a user
/*
You need to implement a controller function called getAllFollowers that retrieves all the followers of a user. The function receives a request (req) and response (res) object, and it operates asynchronously.

The problem statement can be described as follows:

The getAllFollowers function takes in the userId from the request body. It first attempts to find the user with the userId using the User model. If the user is not found, the function returns a JSON response with a 404 status code and an error message stating that the user was not found.

If the user is found, the function retrieves all the followers of that user by querying the Follow model where the following field matches the userId. The populate('follower') method is used to populate the follower field with the corresponding user data, making it easier to access the follower details.

Finally, a JSON response with a 200 status code and the array of followers is returned.

If any error occurs during the execution of the function, it is caught in the catch block. The error is logged to the console, and a JSON response with a 500 status code and an error message indicating a server error is sent back.
Sample Input:
{
    "userId": "6141878fc609042b6f0a6eb0"
}
Sample Output (HTTP Code: 200):
[
    {
        "_id": "612b8cc47f0cc30f68b35c58",
        "follower": {
            "_id": "6141878fc609042b6f0a6eb2",
            "username": "johndoe",
            "email": "johndoe@example.com"
        }
    },
    {
        "_id": "612b8c7e7f0cc30f68b35c57",
        "follower": {
            "_id": "6141878fc609042b6f0a6eb3",
            "username": "janedoe",
            "email": "janedoe@example.com"
        }
    }
]
Sample Input:
{
    "userId": "invalid_id"
}
Sample Output (HTTP Code: 404):
{
    "error": "User not found"
}

*/
async function getAllFollowers(req, res) {
  try {
    const { userId } = req.body;

    //Write your code here
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Get all users that a user is following
/*
You need to implement a controller function called getAllFollowing that retrieves all the users a specific user is following. The function receives a request (req) and response (res) object, and it operates asynchronously.

The problem statement can be described as follows:

The getAllFollowing function takes in the userId from the request body. It first attempts to find the user with the userId using the User model. If the user is not found, the function returns a JSON response with a 404 status code and an error message stating that the user was not found.

If the user is found, the function retrieves all the users that the specified user is following by querying the Follow model where the follower field matches the userId. The populate('following') method is used to populate the following field with the corresponding user data, making it easier to access the following user details.

Finally, a JSON response with a 200 status code and the array of following users is returned.

If any error occurs during the execution of the function, it is caught in the catch block. The error is logged to the console, and a JSON response with a 500 status code and an error message indicating a server error is sent back.
Sample Input:
{
    "userId": "6141878fc609042b6f0a6eb0"
}
Sample Output (HTTP Code: 200):
[
    {
        "_id": "612b8cc47f0cc30f68b35c58",
        "following": {
            "_id": "6141878fc609042b6f0a6eb2",
            "username": "johndoe",
            "email": "johndoe@example.com"
        }
    },
    {
        "_id": "612b8c7e7f0cc30f68b35c57",
        "following": {
            "_id": "6141878fc609042b6f0a6eb3",
            "username": "janedoe",
            "email": "janedoe@example.com"
        }
    }
]
*/
async function getAllFollowing(req, res) {
  try {
    const { userId } = req.body;

   //Writ your code here
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  followUser,
  unfollowUser,
  removeFollower,
  getAllFollowers,
  getAllFollowing
};