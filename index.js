// Require third-party modules
const express = require('express')
const fetch = require('node-fetch')

// Config object
const config = {
    port: 3000
}

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

// Create a route for our overview page
app.get('/', function(req, res) {
    res.redirect('/overview');
});

// Create a home route
app.get('/overview', function(req, res) {
    fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })

    .then(res => res.json())
        .then(json =>
            res.render('posts', {
                title: 'Posts',
                postData: json
            }))
        .catch(err => console.log(err))
});

// Create a home route
app.get('/hero/:id', function(req, res) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + req.params.id, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })

    .then(res => res.json())
        .then(json =>
            res.render('post', {
                title: 'Posts' + req.params.id,
                postData: json
            }))
        .catch(err => console.log(err))
});

// Actually set up the server
app.listen(config.port, function() {
    console.log(`Application started on port: http://localhost:${config.port}`);
});