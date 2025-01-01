var express = require('express');
var router = express.Router();

const posts = require('../lib/sample-posts.json');

const dbConn = require('../lib/db');

/* GET home page. */
router.get('/posts', function(req, res, next) {
    
    
    const db = dbConn.getInstance();
    db.all('SELECT * FROM posts').then(tests => {
        console.log(tests);
        res.json(tests);
    });


});

router.get('/posts/:id', function(req, res, next) {
    const id = req.params.id;
    dbConn.getInstance().get(`SELECT * FROM posts WHERE id = ${id}`)
    .then(post => {
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    })
});

router.post('/posts/write', function(req, res, next) {
    
    const { title, content } = req.body;

    dbConn.getInstance().exec(`INSERT INTO POSTS values (
            (SELECT IFNULL(MAX(ID), 0) FROM POSTS) + 1,
            "${title}",
            "${content}",
            unixepoch()
            )`)
            .then(r => {
                console.info('insert done', title, content);
                res.status(200).json({});
            })
            .catch(e => {
                console.error('err', e);
                res.status(500).json({});
            })

});

module.exports = router;
