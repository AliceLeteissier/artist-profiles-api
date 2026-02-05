const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

//Load models
const ArtistProfile = require('./models/artistProfiles');

// Connect to database
mongoose.connect(process.env.MONGO_URI);

// Read JSON  files 
const artistProfiles = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/artistProfiles.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
    try {
        await ArtistProfile.create(artistProfiles);
        console.log('Data Imported...');
        process.exit();
    }   catch (err) {
        console.error(err);
    }
};

// Delete data 
const deleteData = async () => {
    try {
        await ArtistProfile.deleteMany();
        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    }   catch (err) {
        console.error(err);
    }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}
