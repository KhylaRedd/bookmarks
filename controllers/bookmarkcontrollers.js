const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmarks.js");

//localhost:3400
bookmarks.get("/", (req, res) => {
  res.json(bookmarksArray);
});

//show routes gets on of the bookmarks 
// SHOW
bookmarks.get("/:arrayIndex", (req, res) => {
  
  const { arrayIndex } = req.params;

  if (bookmarksArray[arrayIndex]) {
    res.json(bookmarksArray[arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Here Friend" });
  }
});

//Post
  bookmarks.post("/", (req, res) => {
  bookmarksArray.push(req.body);
  //pushes the bookmarksArray onto the body from the request object
  res.status(201).json(bookmarksArray[bookmarksArray.length - 1]);
})

module.exports = bookmarks;