const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger')
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');


//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();

//Route files
const artistProfiles = require('./routes/artistProfiles');

const app = express();

//Body parser
app.use(express.json());

// Dev logging middleware


//app.use(logger);
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//mount Routers
app.use('/api/v1/artistprofiles', artistProfiles);

//Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(() => process.exit(1));
});
