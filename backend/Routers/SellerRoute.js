const express = require("express");
const Route = express.Router();

const Register = require("../Controllers/Seller/Register");
const Login = require("../Controllers/Seller/Login");

const Sellerprofile = require("../Controllers/Seller/SellerProfileForm");
const CreateCourse = require("../Controllers/Seller/CreateCourse");
const SellerDashboard = require("../Controllers/Seller/SellerDashboard");
const UnpublishCourse = require("../Controllers/Seller/UnpublishCourse");
const UpdateCourse = require("../Controllers/Seller/UpdateCourse");
const SellerProfileForm = require("../Controllers/Seller/SellerProfileForm");

Route.post('/seller-register', Register);
Route.post('/seller-Login', Login);
Route.post('/Unpublish-course', UnpublishCourse);
Route.post('/sellerprofile', Sellerprofile);
Route.post('/create-course', CreateCourse);
Route.get('/seller-dashboard', SellerDashboard);
Route.put('/update-course', UpdateCourse );
Route.post('/seller-profile-form', SellerProfileForm);

module.exports = Route;