// Import's
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Exporting Routes
const indexRoute = require('./Routes/index');
const urlRoute = require('./Routes/url');


// middleware that allows to accept json data to Api
app.use(express.json({extented: false}));

// Using Routes
app.use("/",indexRoute);
app.use("/api/url",urlRoute);


// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
})

const port  = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on Port ${port}`));