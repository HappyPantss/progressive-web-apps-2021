# Progressive Web Apps @cmda-minor-web · 20-21
![Overview Page](https://i.imgur.com/7uJpqhA.png)

# Table of Contents
* [Live version](https://github.com/HappyPantss/progressive-web-apps-2021#-live-version)
* [Concept](https://github.com/HappyPantss/progressive-web-apps-2021#-concept)
* [Installation](https://github.com/HappyPantss/progressive-web-apps-2021#-installation)
* [Usage](https://github.com/HappyPantss/progressive-web-apps-2021#-usage)
* [Features](https://github.com/HappyPantss/progressive-web-apps-2021#-features)
* [External Data Source](https://github.com/HappyPantss/progressive-web-apps-2021#-external-data-source)
* [Packages and Tooling](https://github.com/HappyPantss/progressive-web-apps-2021#-packages-and-tooling)
* [Functionalities](https://github.com/HappyPantss/progressive-web-apps-2021#-functionalities)
* [Optimizing](https://github.com/HappyPantss/progressive-web-apps-2021#-optimizing)
* [Critical Render Path](https://github.com/HappyPantss/progressive-web-apps-2021#-critical-render-path)
* [License](https://github.com/HappyPantss/progressive-web-apps-2021#-diagrams)
* [Extra](https://github.com/HappyPantss/progressive-web-apps-2021#%EF%B8%8F-extra)
# 🌍 Live version 
This is the repository for frontend-applications CMD 2020/2021.
Live version: https://owstats-pwa.herokuapp.com
# 💬 Concept
The idea of this website is that you can search for your account, and see some basic statistics from your Overwatch account. You can find your personal information like level, games won etc. And you can find some statistics about your heroes you played last season of competitive. Disclaimer: You have to play Overwatch to see your stats.
# 🚀 Installation
**Clone the repository:**<br>
`https://github.com/HappyPantss/progressive-web-apps-2021.git`

**Install NPM:**<br>
`npm install`

**Visit the local website in your browser with:**<br>
Start the server and go to `http://127.0.0.1:5500`
# 🔧 Usage
**Start the local server on port 3000:**<br>
`npm run start`

> Use `npm run dev` if you're changing the code, so you only have to refresh the page to see the changes.

**Visit the local website in your browser with:**<br>
`http://localhost:3000/`

# 🔨 Features
You can see all your heroes you played this season. If you click on a specific hero, you can see the detail statistics.
# 📈 External Data Source
The API I use is from [Ovrstat](https://ovrstat.com/). The overstat API is an unofficial Overwatch Stats API written in Go. Accesing its main API endpoint is extremely simple. 
```Javascript
https://ovrstat.com/stats/{platform}/{username} // For example: /pc/Sergini-21678
```
Response: https://ovrstat.com/stats/pc/Sergini-21678
# 📦 Packages and Tooling
* `ejs`: EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
* `express`: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* `gulp`: Gulp is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development like minification, concatenation, cache busting, unit testing, linting, optimization, etc.
* `gulp-autoprefixer`: Autoprefixer is plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.
* `gulp-clean-css`: Clean-css is a fast and efficient CSS optimizer for Node.js platform and any modern browser.
* `gulp-concat`: Concat will link all your files together.
* `node-fetch`: A light-weight module that brings Fetch API to Node.js.
# ✨ Functionalities
## Routing
When visiting the site, you will be redirected to `/overview`, this is the homepage. When choosing a hero for checking there details, you go to `/heroes/:name`. You can change the name of the hero to go to their detail page.
## Service Worker
The Service Worker saves the files you need for the specific page that you're on in the cache. Not only the .js and .css files are saved, but also the routes. This wil make sure the files will be available when offline. The files are saved in the cache when you're online, and are being served when offline. When a page isn't found, you're going to a offline page.
# ⚡️ Optimising
## Minifying CSS
One of the things I've done to optimise my site, is minifying my CSS. To make this work, I used the npm package Gulp. To see the results of implementing this, see [Tests](#-tests).
## Images
### Making images static
A big issue, is that I have alot of images. For reasons of ease, I used links for the images. And I thought this would help for optimising reasons. But I wanted to compress the images for beter performance. So I downloaded all images, and set them in my project.
### Tinypng
One big fix would be compressing my images. Some of them were already not that big, but it always helps to compress them. So I compressed all of my images with the tool [tinypng](https://tinypng.com/). Compressing with tinypng makes sure the size of the images drops, but the quality stays.
# 📝 Critical Render Path
## First View
The time your spending waiting until you see all the elements for the first time.
## Repeat View
The time your spending waiting until you see all the elements after the first time.
## Perceived performance
How quickly a page can load and render all of its visual elements to the screen.
## Time To Interaction
Time to interactive is the amount of time it takes for the page to become fully interactive.
## Time To First Byte
Time To First Byte is the amount of time spent waiting for the initial response. The time you have to wait for the response going from the client to the server, and back.
# 📘 License
This project is released under the under terms of the MIT License.

# ❤️ Extra
## With help from:
[Oussama Fahchouch - ofahchouch-gh](https://github.com/ofahchouch-gh)<br>
[Robin Frugte - RobinFrugte97](https://github.com/RobinFrugte97)<br>
[Stan Bankras - StanBankras](https://github.com/StanBankras)<br>
