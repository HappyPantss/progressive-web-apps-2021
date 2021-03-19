import cleanData from "./public/js/cleanNames.js";

import express from "express";
//const express = require('express')
import fetch from "node-fetch";
//const fetch = require('node-fetch')

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
    res.redirect('/heroes');
});

let userStats = []

// Create a overview route
app.get('/heroes', async function(req, res) {
    userStats = await fetch("https://ovrstat.com/stats/pc/Sergini-21678", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log(response)
            }
        })

    //console.log(userStats)
    const newUserData = await cleanData(userStats)

    res.render("heroes.ejs", {
        postData: newUserData,
        heroes: newUserData.competitiveStats.topHeroes
    })
});

// Create a detail route
app.get('/heroes/:name', async function(req, res) {
    userStats = await fetch("https://ovrstat.com/stats/pc/Sergini-21678", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log(response)
            }
        })

    const newUserData = await cleanData(userStats)
    const hero = newUserData.competitiveStats.topHeroes.find(hero => hero.name == req.params.name)

    res.render("hero.ejs", {
        postData: newUserData,
        hero: hero,
    })
});

app.get('/offline', function(req, res) {
    res.render('offline', {
        pageTitle: 'Offline'
    })
})

// Actually set up the server
app.listen(config.port, function() {
    console.log(`Application started on port: http://localhost:${config.port}`);
});