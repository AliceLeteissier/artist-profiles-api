const mongoose = require('mongoose');
const slugify = require('slugify');

/* ---------- Sub Schemas ---------- */

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  year: Number,
  imageUrl: String
}, { _id: false });

const exhibitionSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  year: Number,
  venue: { type: String, trim: true },
  imageUrl: String
}, { _id: false });

const educationSchema = new mongoose.Schema({
  degree: { type: String, trim: true },
  institution: { type: String, trim: true },
  year: Number
}, { _id: false });

const residencySchema = new mongoose.Schema({
  program: { type: String, trim: true },
  location: { type: String, trim: true },
  year: Number
}, { _id: false });

const distinctionSchema = new mongoose.Schema({
  title: { type: String, trim: true },
  organization: { type: String, trim: true },
  year: Number
}, { _id: false });

/* ---------- Main Schema ---------- */

const artistProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  bio: {
    type: String,
    required: [true, 'Please add a bio'],
    maxlength: [500, 'Bio can not be more than 500 characters']
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters']
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be longer than 20 characters']
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
location: {
  city: String,
  country: String
},

mediums: {
    type: [String],
    enum: [
      'painting',
      'sculpture',
      'installation',
      'photography',
      'video',
      'performance',
      'digital',
      'mixed media'
    ],
    default: []
  },

  artworks: {
    type: [artworkSchema],
    default: []
  },

  exhibitions: {
    type: [exhibitionSchema],
    default: []
  },

  education: {
    type: [educationSchema],
    default: []
  },

  residencies: {
    type: [residencySchema],
    default: []
  },

  distinctions: {
    type: [distinctionSchema],
    default: []
  }

}, { timestamps: true });

// Create Artist profile slug from name

artistProfileSchema.pre('save', function () {
  this.slug = slugify(this.name, { lower: true });
});


module.exports = mongoose.model('ArtistProfile', artistProfileSchema);
