# Azavea’s Branding Guide
A guide that contains visual assets (logos, color palettes, logo do’s and don’ts, etc) and guiding principles (blog writing tips, accessibility tools, resources, etc).
 1. [Developing locally](#developing-locally)
 2. [Site Structure](#site-structure)
 3. [Editing the site configuration](#editing-the-site-configuration)
 4. [Editing Pages](#editing-pages)
 5. [Data files](#data-files)
 6. [Copy Paste Components](#copy-paste-components)

## Developing locally
## How it works
Azavea’s branding guide is built using [Jekyll](https://jekyllrb.com/), a static site generator, and [Style Guide Guide](https://github.com/bradfrost/style-guide-guide), a style guide boilerplate. 

Jekyll uses a plugin called [Hawkins](https://github.com/awood/hawkins) (specified in the `Gemfile`) that integrates with [LiveReload](http://livereload.com) to watch for changes and rebuild static files. 

## Requirements
- Docker

## Getting Started

To get started or trigger a rebuild of Jekyll's static website output, use:

```bash
$ ./scripts/update
```

Then you can have Jekyll run locally so you can see your changes in a browser. 

```bash
$ ./scripts/server
```

## URLS

In order to access the content served by Jekyll, and the LiveReload endpoint, use the following links:

| Service    | URL                                                    |
|------------|--------------------------------------------------------|
| Jekyll     | [`http://localhost:4000`](http://localhost:4000) |



## Site Structure
### Data: `./_data/`
Within the data folder are YAML files, holding structured data used by other components of the website.
- `nav.yml` This includes navigation information that will be used for the next/prev buttons and primary navigation.

### Includes `./_includes/`
Includes are `html` partials used in creating the structure of the pages. These rarely change. They all pull from .yml files or front matter.

### Layouts `./_layouts/`
Layouts are the skeleton of every page. These rarely change.

### Pages `./_pages/`
Pages make up the bulk of the site. See [Editing pages.](#editing-pages)

### Posts `./_posts/`
Posts are being used for announcing releases of the Branding Guide. See [Announcing Releases.](#announcing-releases)

### Sass `./_sass/`
We use `.scss` for styling. The SCSS follows rules set in Brad Frost's article [CSS Architecture for Design Systems.](http://bradfrost.com/blog/post/css-architecture-for-design-systems/)

### Site `./_site/`
The compiled jekyll site which is served on Github Pages. Do not edit files within.

### Downloads `./downloads/`
Contains assets that users of the guide can download from the site, such as .zip, .ai, .scss files.

### Images `./images/`
Contains imagery used in the frontend of the site, such as logos, font examples, and dos and don’ts. 

### Fonts `./fonts/`
Contains fonts and font icons being used within the site.

### CSS `./css/`
Should contain only one file: `main.scss` which includes every file from the above sass directory.




## Editing the site configuration
### Jekyll Config
The `_config.yml` file contains a few very important site settings. This is a [YAML](https://github.com/Animosity/CraftIRC/wiki/Complete-idiot%27s-introduction-to-yaml) file. YAML keeps data stored as keys and values associated to those keys. For example:

```yaml
key: value
title: Azavea Branding Guide
```

When you make changes to this file, you must rebuild the entire website for the changes to take effect. If you're working locally, this means you will want to restart `./scripts/server`. The most common settings to change are the following:

- SEO Description and Email

#### SEO Description and Email
The first section of the config controls the default SEO values used across the site (`title` and `description`).

Additionally, there is an option to set the email address for the jobs website. *info@azavea.com is currently used*





## Editing Pages
Main pages of the website can be located within the `_pages` directory of the repo. Notably, the some pages are in the root.

| Setting     | Description | Type        |
|-------------|-------------|-------------|
| layout | Determines which layout from the `_layouts` directory this page will uses | string | yes|
| permalink | The link users will use to navigate to the page | string |
| body_class | A class applied to the body of the page to help with specific styles to the page. | string |
| group | **Important** Subpages (e.g. any page within a subfolder of _pages/) must have their group (the name of the folder) specified for navigation purposes | string |
| title | SEO Title used in the meta tag within the header | string |
| status| Indicate how "complete" a page is. **in_progress**, **complete**, **deprecated** | string | 

### Jekyll front matter
We take advantage of [front matter](https://jekyllrb.com/docs/frontmatter/) for copy editing. Front matter is defined via two lines of three dashes each with YAML inside.
```yaml
---
front-matter: true
---
```
Each page of our site uses front matter to inject copy into our html code. This makes it so you never have to dig through hundreds of lines of html to find the copy you want to change. In addition to copy we also define page variables such as the layout, permalink and seo overrides. Our front matter is typically laid out to follow the natural structure of our page. From top to bottom, the front-matter and actual computed page should line up.

**tl;dr**: front-matter allows us to use the power of YAML in our html files.

### List of pages
| Page                   | permalink                  | files                          | In `_pages`                    |
|------------------------|----------------------------|--------------------------------|--------------------------------|
| Homepage               | `/`                        | `index.html`                   | no                             |
| Welcome                | `/welcome.html`            | `welcome.md`                   | no                             |
| Identity               | `/identity`                | `/identity/index.md`           | yes                            |
| - Company              | `/identity/company`        | `/identity/company.md`         | yes                            |
| - Fellowships          | `/identity/fellowships/`   | `/identity/fellowships.md`     | yes                            |
| - Products             | `/identity/products/`      | `/identity/products.md`        | yes                            |
| - Open Source          | `/identity/open-source/`   | `/identity/open-source.md`     | yes                            |
| - Community            | `/identity/community/`     | `/identity/community.md`       | yes                            |
| - Partners             | `/identity/partners/`      | `/identity/partners.md`        | yes                            |
| Communication          | `/communication`           | `/communication/index.md`      | yes                            |
| - Voice and Tone       | `/communication/voice-and-tone` | `/communication/voice-and-tone.md` | yes                   |
| - Blog                 | `/communication/blog`      | `/communication/blog.md`       | yes                            |
| - Social Media         | `/communication/social-media` | `/communication/social-media.md` | yes                       |
| - Email Signature      | `/communication/email-signature` | `/communication/email-signature.md` | yes                 |
| Design                 | `/design`                  | `/design/index.md`             | yes                            |
| - Logo                 | `/design/logo`             | `/design/logo.md`              | yes                            |
| - Colors               | `/design/colors`           | `/design/colors.md`            | yes                            |
| - Typography           | `/design/typography`       | `/design/typography.md`        | yes                            |
| Resources              | `/resources.html`          | `resources.md`                 | no                             |
| Release History        | `/release-history.html`    | `release-history.md`           | no                             |


### Editing pages
- **Homepage**
Most copy edits will be made for the blocks that enter into specific parts of the site:

```
{% include block.html
  title = "Repeat after me: ah-zay-vee-ah"
  description = "Learn about what makes us Azavea, from our mission to our partners to the community groups we support."
  link-title = "Identity"
  link = "/identity/"
%}
```
- **Welcome**, **Communications/**, **Design/**, **Identity/**, **Resources**
Card copy (appears on Overview pages) and introductory header copy both pull from the `description` field in the front matter. The name and status of the page are also edited in the front matter. Most else can be edited outside of the front matter and written as markdown.
- **Release History**
All changes should be made to the front matter. This page pulls new posts in `_posts` in reverse date order.

## Data files
### Nav.yml
The `nav.yml` file sets up the footer previous/next navigation as well as the primary navigation.
**Entries with no children should look like the following:**
```yaml
- title: "Page Title"
  href: "/permalink"
- title: "Welcome"
  href: "/welcome"
  ...
```
**Entries with children should look like the following:**
```yaml
- title: "Identity"
  href: "/identity/"
  subpages:
  - title: "Company"
    href: /identity/company
    group: "Identity"
  ...
```

### Copy paste components
Copy paste components are built using the built-in `_includes` functionality of Jekyll. More information about `_includes` [here.](https://jekyllrb.com/docs/includes/)

Most copy/paste components are very simple to set up. This is what one looks like in a markdown page:
```
{% include copy-paste.html
  description = "Copy this text"
%}
```

Including links, line breaks or Markdown elements in your copy/paste component is a little more complicated. First you need to insert your Markdown/HTML block in a [capture:](https://shopify.github.io/liquid/tags/variable/)

```
{% capture your_markdown_text %}
  [youremail@azavea.com](mailto:youremail@azavea.com)  
{% endcapture %}
```

Now we have a variable to work with for our copy/paste. The next step is to properly convert the variable’s Markdown so we can pass it to our copy/paste component. We can simply [assign](https://shopify.github.io/liquid/tags/variable/) the same variable to a markdownified version of itself:
```
{% assign your_markdown_text = your_markdown_text | markdownify %}
```

Finally, you pass the variable that you’ve created above into the description:
```
{% include copy-paste.html
  description = your_markdown_text
%}
```
