const multer = require('multer')
const path = require('path')

let isFileLarge = false;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

const uploadHandler = (type) => upload.single(type)

module.exports = uploadHandler