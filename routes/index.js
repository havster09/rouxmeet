var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    var myArtwork = [];
    var myArtists = [];
    myArtists = appdata.speakers;

    appdata.speakers.forEach(function(item){
        myArtwork = myArtwork.concat(item.artwork);
    });
  res.render('index', {
      title: 'Home',
      artwork: myArtwork,
      artists: myArtists,
      page:'home'
  });
});

router.get('/speakers', function(req, res, next) {
    var myArtwork = [];
    var myArtists = [];
    myArtists = appdata.speakers;

    appdata.speakers.forEach(function(item){
        myArtwork = myArtwork.concat(item.artwork);
    });
    res.render('speakers', {
        title: 'Speakers',
        artwork: myArtwork,
        artists: myArtists,
        page:'artistList'
    });
});

router.get('/speakers/:speakerid', function(req, res, next) {
    var myArtwork = [];
    var myArtists = [];

    console.log(req.params.speakerid);
    appdata.speakers.forEach(function(item){
        if(item.shortname == req.params.speakerid){
            myArtists.push(item);
            myArtwork = myArtwork.concat(item.artwork);
        }
    });
    res.render('speakers', {
        title: 'Speakers',
        artwork: myArtwork,
        artists: myArtists,
        page:'artistDetail'
    });
});

module.exports = router;
