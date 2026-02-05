const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const ArtistProfile = require('../models/artistProfiles');

// @desc Get all artist profiles
// @route GET /api/v1/artistprofiles
// @access Public
exports.getArtistProfiles = asyncHandler(async (req, res, next) => {
    const artistProfiles = await ArtistProfile.find();
    res
    .status(200)
    .json({ success: true, count: artistProfiles.length, data: artistProfiles})
});

// @desc Get single artist profile
// @route GET /:id/api/v1/artistprofiles/:id
// @access Public
exports.getArtistProfile = asyncHandler(async (req, res, next) => { 
    const artistProfile = await ArtistProfile.findById(req.params.id);
    if(!artistProfile){ 
        return next(new ErrorResponse(`Artist profile not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({success : true, data: artistProfile});
}); 


// @desc Create new artist profiles
// @route POST /api/v1/artistprofiles
// @access Private
exports.createArtistProfile = asyncHandler(async (req, res, next) => {

        const artistProfile = await ArtistProfile.create(req.body)
        res.status(201).json({
            success: true,
            data: artistProfile
        });
    });

// @desc Update artist profile
// @route PUT /api/v1/artistprofiles/:id
// @access Private
exports.updateArtistProfile = asyncHandler(async (req, res, next) => {
    const artistProfile = await ArtistProfile.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!artistProfile){
        return next(new ErrorResponse(`Artist profile not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({success: true, data: artistProfile});
});

// @desc Delete artist profiles
// @route DELETE /api/v1/artistprofiles/:id
// @access Private
exports.deleteArtistProfile = asyncHandler(async (req, res, next) => {
    const artistProfile = await ArtistProfile.findByIdAndDelete(req.params.id);
    if(!artistProfile){
        return next(new ErrorResponse(`Artist profile not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({success: true, data: {}});
});
