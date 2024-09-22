# Tab Lister Browser Extension

## Overview

Tab Lister is a lightweight Chrome extension that provides a convenient way to manage and navigate through your open tabs. It displays a list of all currently open tabs in the current window in a compact popup interface, allowing for quick tab switching and easy sharing of tab information in Markdown format.

## Key Features

1. **Tab Listing**: Displays all tabs open in the current window in a scrollable list.
2. **Quick Navigation**: Switch to any listed tab with a single click.
3. **Markdown Export**: Copy all tab titles and URLs in Markdown format for easy sharing or note-taking.
4. **Responsive Design**: Uses Bulma CSS framework for a clean, modern, and mobile-friendly interface.
5. **Compact Interface**: Popup size of 300x500 pixels, suitable for a browser extension.

## Technical Implementation

- **Frontend**: Built with HTML5, CSS3, and vanilla JavaScript.
- **Styling**: Utilizes Bulma CSS framework and Font Awesome icons.
- **Browser API**: Uses the Chrome extension API for tab management.
- **Manifest**: Implements Manifest V3 for enhanced security and performance.

## Functionality

1. **Tab Listing**: On opening, the extension queries all tabs in the current window and renders them in a scrollable list.
2. **Tab Switching**: Clicking on any tab in the list activates that tab in the browser.
3. **Markdown Copy**: The "Copy MD" button allows users to copy all tab information (title and URL) in Markdown format to their clipboard.

## User Interface

- Fixed navbar with the extension title and a "Copy MD" button.
- Scrollable list of tabs, each clickable to switch to that tab.
- Compact design (300x500 pixels) suitable for a browser extension popup.

## How It Works

1. The `popup.html` file defines the structure of the extension's popup interface.
2. `styles.css` and Bulma CSS provide styling for the popup.
3. `popup.js` handles the core functionality:
   - Queries open tabs using `chrome.tabs.query`.
   - Renders the tab list in the popup.
   - Manages tab switching and Markdown copying functionality.

## Installation and Usage

1. Load the extension in Chrome:
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the extension directory
2. Click the extension icon in the browser toolbar to open the popup.
3. Click on any tab in the list to switch to it.
4. Use the "Copy MD" button to copy tab information in Markdown format.

## Permissions

- `tabs`: To access and manipulate tab information.
- `clipboardWrite`: To copy tab information to the clipboard.

## Future Enhancements

- Implement tab search functionality.
- Add options for customizing the appearance and behavior.
- Explore cross-browser compatibility (currently Chrome-focused).

Tab Lister aims to streamline tab management, making it easier for users to navigate through multiple open tabs and share their browsing sessions efficiently.
