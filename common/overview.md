# Tab Lister Browser Extension

## Overview

Tab Lister is a lightweight browser extension compatible with both Chrome and Firefox. It provides a convenient way to manage and navigate through your open tabs, displaying a list of all currently open tabs in the current window in a compact popup interface. The extension allows for quick tab switching and easy sharing of tab information in Markdown format.

## Key Features

1. **Tab Listing**: Displays all tabs open in the current window in a scrollable list.
2. **Quick Navigation**: Switch to any listed tab with a single click.
3. **Markdown Export**: Copy all tab titles and URLs in Markdown format for easy sharing or note-taking.
4. **Responsive Design**: Uses Bulma CSS framework for a clean, modern, and mobile-friendly interface.
5. **Compact Interface**: Popup size of 300x500 pixels, suitable for a browser extension.
6. **Cross-browser Compatibility**: Works on both Chrome and Firefox.

## Technical Implementation

- **Frontend**: Built with HTML5, CSS3, and vanilla JavaScript.
- **Styling**: Utilizes Bulma CSS framework and Font Awesome icons.
- **Browser API**: Uses the Chrome extension API for Chrome and the browser API for Firefox.
- **Manifest**: Implements Manifest V2 for both Chrome and Firefox (for compatibility).

## Project Structure

/
├── chrome/
│   ├── manifest.json    # Chrome manifest file
│   ├── popup.html       # HTML for extension popup (Chrome)
│   ├── popup.js         # JavaScript for extension popup (Chrome)
│   └── styles.css       # CSS for extension popup (Chrome)
├── firefox/
│   ├── manifest.json    # Firefox manifest file
│   └── popup.js         # JavaScript for extension popup (Firefox)
├── common/
│   └── overview.md      # This file, containing project documentation
├── README.md            # Project readme file
└── Cargo.lock           # Rust package manager lock file