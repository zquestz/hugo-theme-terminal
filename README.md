# Terminal

A simple, retro-inspired Hugo theme with a clean terminal aesthetic.

![Terminal](https://github.com/zquestz/hugo-theme-terminal/blob/master/images/screenshot.png?raw=true)

## Features

- **7 color themes** — orange (default), blue, green, grey, pink, red, and yellow
- **Two font options** — [Fira Code](https://github.com/tonsky/FiraCode) (default) or [Source Code Pro](https://github.com/adobe-fonts/source-code-pro)
- **Syntax highlighting** — beautiful duotone highlighting powered by [PrismJS](https://prismjs.com)
- **Responsive images** — automatic resizing with srcset support for optimal loading
- **Fully responsive** — looks great on desktop, tablet, and mobile
- **Multi-language support** — built-in language selector
- **Table of contents** — optional per-post ToC
- **Reading time** — estimated reading time display

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Front-matter Options](#front-matter-options)
- [Shortcodes](#shortcodes)
- [Code Highlighting](#code-highlighting)
- [Customization](#customization)
- [Development](#development)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Installation

### Option 1: Git Clone

```bash
git clone https://github.com/zquestz/hugo-theme-terminal.git themes/terminal
```

### Option 2: Git Submodule (recommended)

```bash
git submodule add -f https://github.com/zquestz/hugo-theme-terminal.git themes/terminal
```

### Option 3: Manual Download

Download the theme from [GitHub](https://github.com/zquestz/hugo-theme-terminal) and extract it to `themes/terminal`.

### Requirements

- Hugo version **0.74.x** or higher

### Running Your Site

```bash
hugo server -t terminal
```

Then visit `localhost:1313` in your browser.

## Configuration

Add the following to your `config.toml`:

```toml
baseurl = "/"
languageCode = "en-us"
theme = "terminal"
paginate = 5

[params]
  # Content directory (default: "posts")
  contentTypeName = "posts"

  # Color theme: orange, blue, red, green, pink, yellow, grey
  themeColor = "orange"

  # Number of menu items to show (0 = show submenu trigger only)
  showMenuItems = 2

  # Layout options
  fullWidthTheme = false
  centerTheme = true

  # Features
  autoCover = true              # Auto-detect cover images
  showLastUpdated = false       # Show last updated date
  readingTime = false           # Show reading time
  Toc = false                   # Show table of contents

  # Fonts
  useSourceCodePro = false      # Use Source Code Pro instead of Fira Code

  # Image processing
  skipResizePaths = []          # Paths to skip when resizing (for animated images)

  # Custom favicon (default: colored square based on theme)
  # favicon = "favicon.ico"

[params.twitter]
  creator = ""                  # Your Twitter handle (without @)
  site = ""

[languages.en]
  languageName = "English"
  title = "Terminal"
  subtitle = "A simple, retro theme for Hugo"
  copyright = ""
  menuMore = "Show more"
  readMore = "Read more"
  readOtherPosts = "Read other posts"
  newerPosts = "Newer posts"
  olderPosts = "Older posts"
  missingContentMessage = "Page not found..."
  missingBackButtonLabel = "Back to home page"

  [languages.en.params.logo]
    logoText = "Terminal"
    logoHomeLink = "/"

  [[languages.en.menu.main]]
    identifier = "about"
    name = "About"
    url = "/about"
```

## Front-matter Options

| Option            | Type    | Description                         |
| ----------------- | ------- | ----------------------------------- |
| `title`           | string  | Post title                          |
| `date`            | string  | Publication date                    |
| `author`          | string  | Author name                         |
| `authorTwitter`   | string  | Author's Twitter handle (without @) |
| `cover`           | string  | Path to cover image                 |
| `coverCredit`     | string  | Cover image credit (shown on hover) |
| `tags`            | array   | List of tags                        |
| `keywords`        | array   | SEO keywords                        |
| `description`     | string  | Post description for SEO            |
| `showFullContent` | boolean | Show full content on list pages     |
| `readingTime`     | boolean | Show reading time for this post     |
| `hideComments`    | boolean | Hide comments for this post         |
| `Toc`             | boolean | Show table of contents              |
| `TocTitle`        | string  | Custom ToC title                    |

### Example

```toml
+++
title = "My Post"
date = "2026-01-01"
author = "quest"
authorTwitter = "zquestz"
cover = "images/cover.webp"
coverCredit = "Photo by Someone"
tags = ["hugo", "terminal"]
keywords = ["blog", "theme"]
description = "A description of my post"
readingTime = true
Toc = true
+++
```

## Shortcodes

### Image

```go
{{< image src="/img/photo.png" alt="Description" position="center" style="border-radius: 8px;" >}}
```

**Options:** `src` (required), `alt`, `position` (left/center/right), `style`

### Figure

```go
{{< figure src="/img/photo.png" alt="Description" position="center" caption="My caption" captionPosition="center" >}}
```

**Options:** Same as image, plus `caption`, `captionPosition`, `captionStyle`

### Collapsible Code

```go
{{< code language="css" title="My Snippet" isCollapsed="true" >}}
.example {
  color: red;
}
{{< /code >}}
```

**Options:** `language` (required), `title`, `id`, `expand`, `collapse`, `isCollapsed`

### PrismJS (Advanced)

```go
{{< prismjs lang="bash" line-numbers="true" line="2,4" >}}
echo "Line 1"
echo "Highlighted"
echo "Line 3"
echo "Highlighted"
{{< /prismjs >}}
```

**Options:** `lang`, `line-numbers`, `command-line`, `line`, `start`, `user`, `host`, `prompt`, `output`

## Code Highlighting

Wrap code in fenced code blocks with a language identifier:

````
```javascript
console.log("Hello, world!");
```
````

**Supported languages:** actionscript, apacheconf, applescript, bash, c, cmake, coffeescript, cpp, csharp, css, diff, django, docker, elixir, elm, erlang, flow, fsharp, git, go, graphql, haml, handlebars, haskell, http, java, javascript, json, jsx, kotlin, latex, less, llvm, makefile, markdown, markup, nasm, objectivec, ocaml, perl, php, powershell, processing, pug, python, r, reason, ruby, rust, sass, scala, scheme, scss, sql, stylus, swift, textile, toml, tsx, twig, typescript, vim, visual-basic, wasm, yaml

## Customization

### Override Styles

Create `static/style.css` in your site root to override theme styles without modifying the theme directly.

### Extend Templates

Override any template by creating a matching file in your site's `layouts/` directory:

- `layouts/partials/comments.html` — Add a comment system
- `layouts/partials/extended_head.html` — Add custom CSS/JS to `<head>`
- `layouts/partials/extended_footer.html` — Add content before `</body>`

## Development

To modify the theme's source files:

```bash
cd themes/terminal
npm install
yarn
```

Watch mode:

```bash
yarn dev
```

Build for production:

```bash
yarn build
```

## Contributing

Found a bug or have a feature idea?

1. Check the [Issue Tracker](https://github.com/zquestz/hugo-theme-terminal/issues)
2. Open a [Pull Request](https://github.com/zquestz/hugo-theme-terminal/pulls)

## Acknowledgments

This theme is a fork of the original [Terminal theme](https://github.com/panr/hugo-theme-terminal) created by [Radosław Kozieł (panr)](https://twitter.com/panr).

Huge thanks to panr for creating such a beautiful, clean, and well-designed theme. His work served as the foundation for this project, and this fork wouldn't exist without his excellent starting point. 🙏

If you enjoy this theme, please [check out panr's original work](https://github.com/panr/hugo-theme-terminal) and give it a star!

## License

Copyright © 2019-2020 [Radosław Kozieł (panr)](https://twitter.com/panr)

Copyright © 2022-2026 [Josh Ellithorpe (zquestz)](https://github.com/zquestz)

Released under the [MIT License](https://github.com/zquestz/hugo-theme-terminal/blob/master/LICENSE.md).
