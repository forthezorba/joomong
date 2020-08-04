const express = require("express");
const router = express.Router();
const { Site } = require("../models/Site");

//=================================
//             Blog
//=================================

router.post("/createSite", (req, res) => {
  console.log(req.body);
  /*   let site = new Site(req.body);
  site.save()
  return */
  Site.findOne({ category: req.body.category, writer: req.body.writer }).then(
    (result) => {
      if (result !== null) {
        Site.findOneAndUpdate(
          { category: req.body.category },
          { $push: { todo: req.body.todo } },
          { new: true },
          (err, urlInfo) => {
            if (err) return res.json({ success: false, err });
            console.log(urlInfo);
            return res.status(200).json({ success: true, urlInfo });
          }
        );
      } else {
        let site = new Site(req.body);
        site.save((err, urlInfo) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).json({ success: true, urlInfo });
        });
      }
    }
  );
});

router.post("/getSites", (req, res) => {
  //console.log(req.body.userId)
  Site.find({ writer: req.body.userId })
    .populate("writer")
    .exec((err, sites) => {
      if (err) return res.status(400).send(err);
      //console.log(sites)
      res.status(200).json({ success: true, sites });
    });
});

router.post("/check", (req, res) => {
  search = req.body.url;
  console.log(req.body);

  //전체 선택

  if (!req.body.todo_id) {
    Site.updateMany(
      { _id: req.body.category_id },
      { $set: { "todo.$[elem].checked": !req.body.checked } },
      { arrayFilters: [{ "elem.checked": req.body.checked }] },
      (err, site) => {
        console.log("site", site);
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true });
      }
    );
    return;
  }

  //하나 
  Site.findOne(
    { todo: { $elemMatch: { _id: req.body.todo_id } } },
    { todo: { $elemMatch: { _id: req.body.todo_id } } },
    (err, site) => {
      checked = !site.todo[0].checked;
      console.log(checked)
      Site.findOneAndUpdate(
        {'todo._id':req.body.todo_id},
        { $set: { "todo.$.checked": checked } },
        { new: true },
        (err, urlInfo) => {
          console.log(urlInfo);
          if (err) return res.json({ success: false, err });
          return res.status(200).json({ success: true, urlInfo });
        }
      );
    }
  );
});

router.post("/deleteSite", (req, res) => {
  console.log(req.body)  
  if(req.body.id){
    /* 사이트 지우기 */
    Site.findOneAndUpdate(
      {_id:req.body.categoryId},
      { $pull: { todo: {_id:req.body.id} } },
      { new: true },
      (err, site) => { 
        if (err) {
          console.log(err)
          return res.status(400).send(err);
        }
        console.log(site);   
        res.status(200).json({ success: true, site });
      }
    )
  }else{
    /* 카테고리 전체 지우기 */
    Site.findByIdAndDelete(
      { _id: req.body.categoryId },
      (err, category) => {
        if (err) {return res.status(400).send(err);}
        res.status(200).json({ success: true, category });
      }
    );
  }
  
});

router.post("/getPost", (req, res) => {
  console.log(req.body);
  Post.findOne({ _id: req.body.postId })
    .populate("writer")
    .exec((err, post) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, post });
    });
});

router.post("/deletePost", (req, res) => {
  console.log(req.body);
  Post.findOneAndDelete({ _id: req.body.postId }).exec((err, post) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, post });
  });
});

module.exports = router;
