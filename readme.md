# Google Chrome extension

## Abstract

This browser extension provides a convenient way to manage your open tabs:

1. Lists all tabs currently open in the browser window.
2. Displays the list in a popup interface when the extension icon is clicked.
3. Allows quick navigation between tabs directly from the popup.

The extension offers a streamlined view of your open tabs, making it easier to find and switch to the tab you need, especially when you have many tabs open.

## How to run

1. Install [Rust](https://rustup.rs/)
2. Install Wasm-pack
```bash
cargo install wasm-pack
```
3. Run the app
```bash
wasm-pack build --target web
```
4. Open Google Chrome browser and [install the extension](https://support.google.com/chrome_webstore/answer/2664769?hl=en)
5. Press the button to see the URLs in the window

Also [consult](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing).

## How to debug

You may install plugin in your browser as temporary extension. That's easy to do.

- [Temporary Extension in Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [Temporary Extension in Chrome](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)
