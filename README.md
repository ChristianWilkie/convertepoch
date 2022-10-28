# Convertepoch

Site: [https://convertepoch.com](https://convertepoch.com)

[![Build and Deploy](https://github.com/ChristianWilkie/convertepoch/actions/workflows/main.yml/badge.svg)](https://github.com/ChristianWilkie/convertepoch/actions/workflows/main.yml)

Simple, open source site without advertising for some basic time conversions.

## Project Goal
Hi! Thank you for your interest in this project.

My intention for this was to learn Angular as well as provide a simple site without ads for converting between unix time epoch formats. 
One of my previous jobs I would often work with unix timestamps and some other sites would work great but have a ton of ads. 
So I chose to base my Angular learning on that project. 
I decided to keep it open source in case it was useful to others.
Below are some notes mostly for myself (or if anyone else is interested in running the code locally)

## Developing

Run (not debug) `Angular CLI Server (npm run start)` then "Debug-run" `Angular Debug`

Note: this project was generated with [Angular CLI](https://github.com/angular/angular-cli) - so other default Angular CLI project scripts should also work. 

## Deployment to GH pages

`yarn deploy` (which runs `ng deploy --cname=convertepoch.com`)

See also https://www.npmjs.com/package/angular-cli-ghpages#cname

For the automated CI/CD deploy check https://github.com/marketplace/actions/angular-deploy-gh-pages-actions
