const express = require("express");

// const fs = require("fs");
const morgan = require("morgan");

const mongoose = require("mongoose");

const BlogRoutes = require("./routes/blogRoutes");

const dbURI =
  "mongodb+srv://Owolabi5541:Owolabi5541@nodetuts.xwcnfnt.mongodb.net/node-tuts?retryWrites=true&w=majority";

const app = express();
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));
mongoose.set("strictQuery", false);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "Nice seeing this",
//     snippet: "How is going",
//     body: "This is the body, you know",
//   });

//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// app.get("/all-blog", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/find-blog", (req, res) => {
//   Blog.findById("63c1f1811a6124d3f58974fa")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/", (req, res) => {
//   res.sendFile("./views/index.html", { root: __dirname });
// });
// app.get("/about", (req, res) => {
//   res.sendFile("./views/about.html", { root: __dirname });
// });
// app.get("/contact", (req, res) => {
//   res.sendFile("./views/contact.html", { root: __dirname });
// });
// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat bowser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs: blogs });

  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: " About" });
});

app.use(BlogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});
