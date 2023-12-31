const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');


app.use(cors());


const connection = require("../course-management-backend/Helper/Connection");

var cookieParser = require("cookie-parser");

app.use(cookieParser());

require("dotenv").config();

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.json());

const PORT = process.env.PORT;

connection();

const seller = require("../course-management-backend/Routers/SellerRoute");
const user = require("../course-management-backend/Routers/UserRoute");
const Courses = require("../course-management-backend/Routers/UserRoute");
const payment  = require("../course-management-backend/Routers/Paymentroutr");

app.use("/user", user);
app.use("/seller", seller);
app.use("/courses", Courses);
app.use("/payment", payment);
app.get("/payment/getkey",(req, res)=>{
  res.status(200).json({key:process.env.RAZORPAY_API_KEY})
});

app.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.end();
});

 

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
