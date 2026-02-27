import express from "express";
import  upload  from "../middleware/upload.js"; // this is your multer middleware

const router = express.Router();

// single file upload
router.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);

  // Return the URL for frontend
  res.json({
    imageUrl: `/uploads/${req.file.filename}`,
  });
});

export default router;