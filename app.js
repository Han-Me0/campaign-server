// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
const { isAuthenticated } = require('./middlewares/jwt.middleware')
// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRouter = require("./routes/index.routes");
app.use("/api", allRouter);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// const searchRouter = require("./routes/search.routes");
// app.use("/api/search", allRoutes);

const campaignsRouter = require("./routes/campaigns.routes");
app.use("/api/campaigns",isAuthenticated, campaignsRouter);

const categoriesRouter = require("./routes/categories.routes");
app.use("/api/categories",isAuthenticated, categoriesRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
