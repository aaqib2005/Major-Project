require('dotenv').config();
const bcrypt = require('bcrypt');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const AWS = require('aws-sdk');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1"
});

// S3 + DynamoDB setup
const s3 = new AWS.S3();
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Multer setup (memory storage for S3)
const upload = multer({ storage: multer.memoryStorage() });

// Test route
app.get('/', (req, res) => {
  res.redirect('/homepage.html');
});

// Upload + Save Data route
app.post('/upload', upload.single('file'), (req, res) => {

  const fileParams = {
    Bucket: "aaqib-project-storage", // your bucket name
    Key: req.file.originalname,
    Body: req.file.buffer
  };

  // Upload file to S3
  s3.upload(fileParams, (err, data) => {
    if (err) {
      console.log(err);
      return res.send("File upload failed ❌");
    }

    // Prepare user data
    const userData = {
      email: req.body.email,
      name: req.body.name,
      fatherName: req.body.fatherName,
      mobile: req.body.mobile,
      gender: req.body.gender,
      religion: req.body.religion,
      stream: req.body.stream,
      fileUrl: data.Location
    };

    const dbParams = {
      TableName: "lfs-users",
      Item: userData
    };

    // Save to DynamoDB
    dynamoDB.put(dbParams, (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Data save failed ❌");
      }

      console.log("Saved in DB:", userData);
      res.send(`
  <h2>Data + File uploaded successfully 🚀</h2>
  <p>Redirecting to dashboard...</p>

  <script>
    setTimeout(() => {
      window.location.href = "http://localhost:3000/dashboard.html?name=${req.body.name}&fileUrl=${data.Location}";
    }, 3000);
  </script>
`);
  
    });

  });
});
// signup
app.post('/signup', async (req, res) => {

  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const userData = {
    email: email,
    name: name,
    password: hashedPassword
  };

  const params = {
    TableName: "lfs-login-users",
    Item: userData
  };

  dynamoDB.put(params, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Signup failed ❌");
    }

    res.send(`
  <h2>Signup successful ✅</h2>
  <p>You can now login using your credentials.</p>
  <a href="http://localhost:3000/login.html">Go to Login</a>
`);
  });

});
// login
app.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const loginParams = {
    TableName: "lfs-login-users",
    Key: { email: email }
  };

  // Step 1: Get user login data
  dynamoDB.get(loginParams, async (err, data) => {
    if (err) {
      console.log(err);
      return res.send("Login error ❌");
    }

    if (!data.Item) {
      return res.send("User not found ❌");
    }

    const user = data.Item;

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send("Incorrect password ❌");
    }

    // Step 2: Get file data from upload table
    const fileParams = {
      TableName: "lfs-users",
      Key: { email: email }
    };

    dynamoDB.get(fileParams, (err, fileData) => {
      if (err) {
        console.log(err);
        return res.send("Error fetching file ❌");
      }

      const fileUrl = fileData.Item ? fileData.Item.fileUrl : "";

      res.redirect(`http://localhost:3000/dashboard.html?name=${user.name}&fileUrl=${fileUrl}`);
    });

  });

});


// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});