const express = require('express');

const {
getArtistProfiles,
getArtistProfile,
createArtistProfile,
updateArtistProfile,
deleteArtistProfile 
} = require('../controllers/artistProfiles')
console.log('Controllers:', {
  getArtistProfiles,
  getArtistProfile,
  createArtistProfile,
  updateArtistProfile,
  deleteArtistProfile
});


const router = express.Router();

router
.route('/')
    .get(getArtistProfiles) 
    .post(createArtistProfile);

router.route('/:id')
    .get(getArtistProfile)
    .put(updateArtistProfile)
    .delete(deleteArtistProfile);

module.exports = router;
 
