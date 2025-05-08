---
title: First Blog Post
date: 2025-05-08
tags:
  - intro
  - example
---

# Markdown Extensions Demo

This document demonstrates the use of various `markdown_extensions` available in `mkdocs` with `pymdown-extensions`. Each section includes a short explanation of the extension and a working example.

## Table of Contents

\[toc]

---

## Admonition

Provides styled callouts for notes, warnings, tips, etc.

!!! note
This is a note admonition.

!!! warning
This is a warning admonition.

## Codehilite

Adds syntax highlighting to code blocks. `guess_lang` can be disabled to avoid misclassification.

```python hl_lines="2"
def hello():
    print("Hello, world!")
```

## TOC Permalink

Adds clickable permalinks to each heading in the Table of Contents.

### Subsection Example

This subsection has a permalink.

## Arithmatex

Supports MathJax or KaTeX for LaTeX-style math rendering.

$E = mc^2$

Inline math: $a^2 + b^2 = c^2$

## Pymdownx Extensions

### b64

Allows embedding base64-encoded images directly in Markdown.

```markdown
![Red dot](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P4z8DwHwAFgwJ/l9hU3gAAAABJRU5ErkJggg==)
```

### betterem

Improves handling of emphasis (e.g., avoids nested emphasis bugs).

*Italic* vs **Bold** vs ***BoldItalic***

### caret

Adds support for ^superscript^.

This is ^superscript^ text.

### critic

Enables Critic Markup for editorial suggestions and inline changes.

{-- deleted text --}
{++ added text ++}
{\~\~ replaced text \~> new text \~\~}
{== highlighted ==}{>> comment <<}

### details

Creates collapsible blocks.

??? info "Click to Expand"
This is hidden in a collapsible block.

### emoji

Replaces emoji shortcodes with Unicode or image emojis.

\:tada: :+1: :100:

### escapeall

Escapes all Markdown-sensitive characters by default.

\*This\* is not italic because of escapeall.

### extra

A bundle of useful extensions like abbreviations and tables.

Abbreviation: HTML\*\[Hyper Text Markup Language]

### highlight

Allows highlighting using `==` markers.

\==Highlighted text==

### inlinehilite

Adds highlighting inside inline code blocks.

Here is some `==inline code==` that’s highlighted.

### keys

Formats keyboard keys.

Press ++ctrl+alt+delete++ to reboot.

### magiclink

Auto-converts URLs and emails into links.

Visit [https://github.com/](https://github.com/) for more info.

### mark

Highlights text using `==` markup.

\==Marked text==

### pathconverter

Automatically converts relative paths to absolute ones when needed (e.g., for images).

An image: ![example](docs/images/example.png)

### progressbar

Creates text-based progress bars.

\[=        ] 25%

### smartsymbols

Automatically replaces common textual representations with symbols.

(c) (tm) (r) --> --> <-> ...

### snippets

Allows reusing content from other files.

\--8<-- "snippets/example.md"

### striphtml

Strips raw HTML tags from Markdown output.

<p>This paragraph will be stripped if striphtml is enabled.</p>

### superfences

Supports advanced fenced code blocks like `mermaid`, `plantuml`, etc.

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### tabbed

Creates tabbed content sections.

\=== "Tab One"
Content for tab one.

\=== "Tab Two"
Content for tab two.

### tasklist

Adds GitHub-style task lists.

* [x] Task one
* [ ] Task two

### tilde

Enables strikethrough text using `~~`.

~~Strikethrough text~~

