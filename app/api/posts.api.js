var express  = require('express');
var router   = express.Router();
var Post     = require('mongoose').model('Post');

// api route to retrieve posts
router.get('/get', function(req, res) {

    try {
        Post.find(function(err, posts) {
            if (err) {
                res.json({
                    'message': 'error retrieving posts',
                    'success': false
                });

                console.error(err);
            } else {
                console.log('successfully retrieved posts');

                res.json({
                    'message': posts,
                    'success': true
                });
            }
        });
    } catch (e) {
        console.error(e);

        res.json({
            'message': 'error retrieving posts',
            'success': false
        });
    }
});

// api route to add new post
router.post('/add', function(req, res) {

    // create new post, following Post mongoose schema
    var newPost = Post({
        title   : 'test post',
        content : 'test post content',
        author  : 'roger moore',
        data    : Date.now()
    });

    // try to save the post to mongodb
    try {
        newPost.save(function(err, data) {

            // if there is an error, report and return
            // result accordingly to user
            if (err) {
                console.log(err);

                res.json({ 
                    'message': 'error adding post',
                    'success': false
                });
            } else {
                // else, log that it was added successfully
                console.log('Successfully added post: ' + data);

                // report back to the user
                res.json({ 
                    'message': 'added post',
                    'success': true
                });
            }
        });
    } catch (e) {
        // if an error occurs when trying to save, log
        console.log('Error: ' + e);

        // return appropriate message to the user
        res.json({ 
            'message': 'error adding post',
            'success': false
        });
    }
});

router.delete('/remove', function(req, res) {
    res.json({ 'message': 'remove post temp message' });
});

module.exports = router;
