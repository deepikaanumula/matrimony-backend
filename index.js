const connectToMongo = require("./db/db");
const express = require('express')

const path = require('path');

const cors = require('cors');
// //For connecting the Database To MongoDB
connectToMongo();
//Express APIs
const app = express()
const port = 5000
//Middleware for the "req" 
app.use(express.json());


// CORS Setup – allow only your frontend domain
app.use(cors({
  origin: ['https://ssjmatha.in'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'auth-token','id'] // ✅ add 'auth-token'
}));



//Available Routes

app.get('/login', (req, res) => {
  res.send("Login");
});
app.use('/auth', require("./routes/auth"));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


