const asyncHandler = require('express-async-handler');
const PDFParser = require('pdf2json');
const path = require('path');
const fs = require('fs');

const FILE_SIZE_LIMIT = 25;

const parsePDF = (inputFile, outputFile) => {
  return new Promise((resolve, reject) => {
    const inputFilePath = path.resolve(__dirname, inputFile);
    const outputFilePath = path.resolve(__dirname, outputFile);

    const pdfParser = new PDFParser(this, 1);

    pdfParser.on('pdfParser_dataError', (errData) =>
      reject(errData.parserError)
    );
    pdfParser.on('pdfParser_dataReady', (pdfData) => {
      const parsedTextContent = pdfParser.getRawTextContent();
      fs.writeFile(outputFilePath, parsedTextContent, () => {
        console.log('Done.');
      });
      resolve(parsedTextContent);
    });

    pdfParser.loadPDF(inputFilePath);
  });
};

const deleteFile = (file) => {
  const filePath = path.resolve(__dirname, file);
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log(`${filePath} was deleted`);
  });
};

// @desc   Register user (receive user data from Firebase)
// @route  POST /api/upload
// @access Public
const upload = asyncHandler(async (req, res) => {
  const file = `../${req.file.path}`.replace('\\', '/');
  // Check file size
  const fileSizeInBytes = req.file.size;
  const maxFileSizeInBytes = FILE_SIZE_LIMIT * 1024 * 1024; // Example: 25 MB

  if (fileSizeInBytes > maxFileSizeInBytes) {
    deleteFile(file);
    throw new Error('File size exceeds the allowed limit', 400);
  }

  if (file.endsWith('.pdf')) {
    //if file is a PDF
    try {
      const txtFilePath = file.replace('.pdf', '.txt');
      const parsedText = await parsePDF(file, txtFilePath);
      res.status(200).json({
        message: 'PDF parsed successfully',
        pdfData: parsedText,
      });
      deleteFile(txtFilePath);
    } catch (error) {
      console.log(error);
      throw new Error('Error in Parsing PDF', 400);
    }
  } else {
    throw new Error('Invalid File Format', 400);
  }
  deleteFile(file);
});

module.exports = { upload };
