const express = require("express");
const userApi = require("./userApi");
const thoughtApi = require("./thoughtApi");

const api = express.Router();

api.use('/user', userApi);
api.use('/thought', thoughtApi);

module.exports = api;