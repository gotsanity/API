var express = require('express');
var router = express.Router();

const database  = {
  users: [
    { name: "Jesse", password: "Unsecure" },
    { name: "Hacker", password: "Super Unsecure" },
  ],
  brand: {
    name: "Smash Games",
    industry: "Game Developers",
    address: {
      street: "1212 Game Lane",
      city: "San Andreas",
      state: "California"
    },
    phone: "5551212"
  },
  posts: [
    { 
      title: "Best Company Ever",
      slug: "best",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Jesse",
      created_on: "Sept 1, 2024" 
    },
    { 
      title: "Still Best Company Ever",
      slug: "best-again",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Jesse",
      created_on: "Oct 1, 2024" 
    }
  ]
}

// posts enpoints

// Get all posts
router.use('/posts', (req, res, next) => {
  res.status(200);
  res.json(database.posts);
});

module.exports = router;
