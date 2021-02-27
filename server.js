const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;
const expressLayouts = require('express-ejs-layouts');
const Routes = require('./routes/index');
const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine','ejs');

// BODY PASSER AND PUBLIC FOLDER
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

// ROUTES
app.use('/', Routes);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})