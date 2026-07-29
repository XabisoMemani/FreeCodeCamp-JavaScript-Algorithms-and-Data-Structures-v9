# Markdown to HTML Converter

Converts basic Markdown syntax into HTML in real time as you type.

## What it handles

| Markdown | HTML |
|---|---|
| `# heading` | `<h1>heading</h1>` |
| `## heading` | `<h2>heading</h2>` |
| `### heading` | `<h3>heading</h3>` |
| `**bold**` or `__bold__` | `<strong>bold</strong>` |
| `*italic*` or `_italic_` | `<em>italic</em>` |
| `![alt](src)` | `<img alt="alt" src="src">` |
| `[text](url)` | `<a href="url">text</a>` |
| `> quote` | `<blockquote>quote</blockquote>` |

## Key concepts

- Regex with capture groups and flags (`g`, `i`, `m`)
- Replacement order matters - h3 before h2 before h1, images before links, bold before italic
- Non-greedy `+?` so patterns don't over-match across multiple instances on the same line
- Live DOM updates using the `input` event
