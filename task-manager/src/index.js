// To start up mongo server
// /Users/"Jeff Slavin"/mongodb/bin/mongod.exe --dbpath=/Users/"Jeff Slavin"/mongodb-data
const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'));    // reject upload, throw error back
        };

        cb(undefined, true);       // allow upload 
        
        // cb(new Error('File must be a PDF'));    // sending back an error
        // cb(undefined, true);    // success and upload is expected
        // cb(undefined, false);   // silently rejects the upload (not really used)
    }
});

app.post('/upload', upload.single('upload'),  (req, res) => {
    res.send();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});

