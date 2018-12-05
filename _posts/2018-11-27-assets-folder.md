---
layout: post
title:  "Logo and Favicon links"
date:   2018-11-27
categories: update
---

An assets folder containing favicon files and logos for each of our products and programs (including the company) has been added to the branding guide.

## What is in this release
Upon launch, we included downloads so that folks can easily access logos of all of our products. We learned that it would be be helpful for us to host some of these images and favicons at an easily-accessed URL, for use in:
- Demos
- R&D apps
- Google Slideshows
- Sharing outside of the company

## About the assets
All available assets current live in a `assets/` directory, organized by name. 

For products, programs, and open source projects that have favicons, they’ve been created using [Real Favicon Generator](https://realfavicongenerator.net/) and are located in a nested `favicons/` directory. Summer of Maps and OpenDataPhilly are two examples of programs that don’t need their own `favicons/` folder, as the former uses Azavea’s favicon and the latter is unlikely to have related projects.

### Folder names:
- `azavea/`
- `cicero/`
- `climate-api/`
- `districtbuilder/`
- `fellowship/`
- `geophilly/`
- `geotrellis/`
- `opendataphilly/`
- `opendatavote/`
- `opentreemap/`
- `raster-vision/`
- `raster-foundry/`
- `summer-of-maps/`
- `temperate/`

## How to use
The file-naming structure has been simplified in favor of shorter URLs. Each folder contains a `logo.png` so that is always a safe bet.

Files (other than favicons) use this structure: `[logo/mark]-[color?]-[alignment?]-[tagline?].[extension]` 

Available filetypes currently include:
1. PNG (1425px wide)
2. SVG

### URL Example
URLs should begin with `https://branding.azavea.com/assets/`
For example, `https://branding.azavea.com/assets/azavea/logo.svg`

### Google Slides
In Google Slides, there is an option to insert images by their url:

![How to upload by URL in Google Slides](/images/posts/google-upload-by-url.png)

Please note that Google Slides does not allow SVGs, so this will only work for images with .png extension.
