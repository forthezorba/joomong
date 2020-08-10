const express = require("express");
const router = express.Router();
const { Blog } = require("../models/Blog");
const { BlogCategory } = require("../models/BlogCategory");

const { auth } = require("../middleware/auth");
const multer = require("multer");

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".png" && ext !== ".mp4") {
      return cb(res.status(400).end("only jpg, png, mp4 is allowed"), false);
    }
    cb(null, true);
  },
});

const upload = multer({ storage: storage }).single("file");

//=================================
//             Blog
//=================================

// fieldname: 'file',
// originalname: 'React.png',
// encoding: '7bit',
// mimetype: 'image/png',
// destination: 'uploads/',
// filename: '1573656172282_React.png',
// path: 'uploads/1573656172282_React.png',
// size: 24031

router.post("/uploadfiles", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      url: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/createPost", (req, res) => {
  console.log(req.body);

  /* 새 글 작성 */
  if (!req.body.originalPostId) {

    let blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      writer: req.body.userID,
      category: req.body.category,
      category_item: req.body.category_item,
    });
  
    blog.save((err, blogInfo) => {
      if (err) return res.json({ success: false, err });
      console.log(blogInfo);
      return res.status(200).json({ success: true, blogInfo });
    });
  }

  /* 기존 글 수정 */
  if (req.body.originalPostId) {
    Blog.findOneAndUpdate(
      { _id: req.body.originalPostId },
      { title: req.body.title, content: req.body.content },
      { new: true },
      (err, category) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }
        console.log(category);
        res.status(200).json({ success: true, category });
      }
    );
  }
});

router.post("/post/write", (req, res) => {
  console.log(req.body);

  if (originalPostId) {
    Blog.findOneAndUpdate(
      { _id: req.body.originalPostId },
      { title: req.body.title, content: req.body.content },
      { new: true },
      (err, category) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }
        console.log(category);
        res.status(200).json({ success: true, category });
      }
    );
  }
});

router.post("/getPosts", (req, res) => {
  console.log(req.body);
  if (req.body.category_item_id) {
    /* 카테고리 눌렀을 때 검색 */

    Blog.find({ category_item: req.body.category_item_id })
      .populate("writer")
      .sort({ _id: -1 }) //mongo에서 고유 id는 _id
      .exec((err, posts) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, posts });
      });
  } else {
    /* 모든 포스트 검색 */
    Blog.find({})
      .sort({ _id: -1 }) //mongo에서 고유 id는 _id
      .populate("writer")
      .exec((err, posts) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, posts });
      });
  }
});

router.post("/getPost", (req, res) => {
  Blog.findOne({ _id: req.body.postId })
    .populate("writer")
    .exec((err, post) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, post });
    });
});

router.post("/deletePost", (req, res) => {
  console.log(req.body);
  Blog.findOneAndDelete({ _id: req.body.postId }).exec((err, blog) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, blog });
  });
});

//=================================
//             Blog Category
//=================================
router.get("/getBlogs", (req, res) => {
  Post.find()
    .populate("writer")
    .exec((err, blogs) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, blogs });
    });
});

router.post("/getCategories", (req, res) => {
  console.log(req.body);
  BlogCategory.find({ writer: req.body.userId })
    .populate("writer")
    .exec((err, cates) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, cates });
    });
});

router.post("/deleteCategory", (req, res) => {
  console.log(req.body);
  if (req.body.category_item_id) {
    /* 소분류 카테고리 지우기 */
    BlogCategory.findOneAndUpdate(
      { _id: req.body.category_id },
      { $pull: { sub_category: { _id: req.body.category_item_id } } },
      { new: true },
      (err, category) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }
        console.log(category);
        res.status(200).json({ success: true, category });
      }
    );
  } else {
    /* 대분류 카테고리 전체 지우기 */
    BlogCategory.findByIdAndDelete(
      { _id: req.body.category_id },
      (err, category) => {
        if (err) {
          return res.status(400).send(err);
        }
        res.status(200).json({ success: true, category });
      }
    );
  }
});

router.post("/editCategory", (req, res) => {
  console.log(req.body);
  if (req.body.category_item_id) {
    /* 소분류 카테고리 수정 */
    BlogCategory.findOneAndUpdate(
      { sub_category: { $elemMatch: { _id: req.body.category_item_id } } },
      { $set: { "sub_category.$.name": req.body.edited_category_item } },
      { new: true },
      (err, category) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }
        console.log(category);
        res.status(200).json({ success: true, category });
      }
    );
  } else {
    /* 대분류 카테고리 수정 */
    BlogCategory.findOneAndUpdate(
      { _id: req.body.category_id },
      { category: req.body.edited_category },
      (err, category) => {
        if (err) {
          return res.status(400).send(err);
        }
        res.status(200).json({ success: true, category });
      }
    );
  }
});

router.post("/createCategory", (req, res) => {
  BlogCategory.findOne({
    category: req.body.category,
    writer: req.body.writer,
  }).then((result) => {
    if (result !== null) {
      /* 기 카테고리에 추가 */
      BlogCategory.findOneAndUpdate(
        { category: req.body.category },
        { $push: { sub_category: req.body.sub_category } },
        { new: true },
        (err, urlInfo) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).json({ success: true, urlInfo });
        }
      );
    } else {
      /* 처음 카테고리 생성 */
      let blogCategory = new BlogCategory(req.body);
      blogCategory.save((err, urlInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, urlInfo });
      });
    }
  });
});

module.exports = router;
