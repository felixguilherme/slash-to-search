# Slash to Search

## 💡 About

Slash to Search is a browser extension which aims to improve your browsing efficiency by providing you a way to focus search inputs with your keyboard.

## ⚙ Technologies Used

-   [TypeScript](https://typescript.org)
-   [Webpack](https://webpack.js.org/)
-   [PNPM](https://pnpm.io/)

## 📦 Installation

Only manual installation is possible for now.

### Chromium-based browsers (Chrome, Edge, Brave and others)

To install the extension, follow these steps:

1. Clone or download the repository (remember to extract the ZIP file if you downloaded it)
2. Build the extension using `pnpm run build`.
3. Open your browser and go to the menu, then select 'Extensions' > 'Manage Extensions'.
4. Enable 'Developer mode' by toggling the switch in the top right corner.
5. Click on 'Load unpacked' and select the `dist` directory.

### Firefox, Safari and other browsers

Please note that this extension is currently supported only on Chromium-based browsers and isn't compatible with Firefox, Safari and other browsers. I do plan to support these browsers in the future.

## 🧠 Using the extension

Open any webpage that contains a search field and press <kbd>/</kbd>. A custom shortcut will be implemented in the future.

## 🚀 How to Contribute

Contributions from the community are welcome. To contribute to the development of this extension, please follow these steps:

1. Fork the repository and clone it to your local machine.
2. Install the necessary dependencies using `pnpm install`.
3. Make the required changes and ensure that the code lints properly.
4. Build the extension using `pnpm run build` and test the changes thoroughly.
5. Submit a pull request, explaining the changes you have made and providing a clear description of the problem you are solving.

## 📄 License

This extension is licensed under the GNU General Public License v3.0
