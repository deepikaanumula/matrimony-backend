const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cloudinary = require("../utils/cloudinary");

// Multer temporary file storage
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Cloudinary upload helper
async function uploadToCloudinary(localFile) {
    const result = await cloudinary.uploader.upload(localFile, {
        folder: "matrimony_uploads"
    });

    fs.unlinkSync(localFile); // delete temp file
    return result.secure_url;
}

module.exports = { upload, uploadToCloudinary };
