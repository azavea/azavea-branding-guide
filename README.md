# Azavea’s Design System
A design system for Azavea that contains visual assets (logos, color palettes, logo do’s and don’ts, etc) and guiding principles (blog writing tips, accessibility tools, resources, etc).

## How it works
Azavea’s design system is built using [Jekyll](https://jekyllrb.com/), a static site generator, and [Style Guide Guide](https://github.com/bradfrost/style-guide-guide), a style guide boilerplate. The SCSS follows rules set in Brad Frost's article [CSS Architecture for Design Systems.](http://bradfrost.com/blog/post/css-architecture-for-design-systems/)

Jekyll uses a plugin called [Hawkins](https://github.com/awood/hawkins) (specified in the `Gemfile`) that integrates with [LiveReload](http://livereload.com) to watch for changes and rebuild static files. 

## Requirements
- Vagrant 2.0+
- VirtualBox 5.1+

## Getting Started

From your workstation, execute the following command to bring up a Vagrant virtual machine with all of the necessary dependencies installed:

```bash
$ ./scripts/setup
```

Next, login to the Vagrant virtual machine and launch the Jekyll services:

```bash
$ vagrant ssh
$ ./scripts/server
```

If `server` isn't running, or to trigger a build of Jekyll's static website output, use:

```bash
$ ./scripts/update
```

## URLS

The Vagrant configuration creates a host-only private network between the virtual machine host and the Vagrant virtual machine. In order to access the content served by Jekyll, and the LiveReload endpoint, use the following links:

| Service    | URL                                                    |
|------------|--------------------------------------------------------|
| Jekyll     | [`http://localhost:4000`](http://localhost:4000) |