# Color-Blindness-Filter
Color Blindness Filter - Prototype

Overview: This is a prototype for a Chrome extension that helps color-blind users by applying real-time color adjustments to webpages. The extension provides a simple popup UI where users can choose from different filters designed for various types of color blindness.

Current Status: This is an early-stage prototype and not yet optimized for full user customization. Currently supports basic CSS-based color adjustments on webpages. No user preferences are saved—filters reset when the page reloads. Not yet published on the Chrome Web Store.

How It Works: The user selects a color blindness type from the popup menu. The extension modifies the colors on the current webpage. It uses CSS filters to enhance color contrast for better visibility. Supported Color Blindness Types Protanopia (Red-Blind) Deuteranopia (Green-Blind) Tritanopia (Blue-Blind) Achromatopsia (Total Color Blindness)

Installation (For Testing Only): Download the project files to your computer. Open Google Chrome and go to chrome://extensions/. Enable Developer Mode using the toggle switch. Click Load Unpacked and select the project folder. The extension will now appear in the Chrome toolbar. How to Use Click the extension icon in the Chrome toolbar. Select a color blindness filter from the dropdown menu. Click Apply, and the colors on the webpage will adjust. To reset, refresh the page or select "None" in the filter menu.

Project Structure: manifest.json – Chrome extension configuration. popup.html – UI for selecting color filters. popup.js – Handles user input. content.js – Applies color filters to the webpage. styles.css – Popup styling. icons/ – Stores icons for the extension.

Future Improvements: Save user preferences so the filter persists across pages. Add custom color adjustment sliders for more control. Optimize for better performance on dynamic websites. Explore AI-based adaptive filtering.

License: This project is a prototype and is open for improvements. Licensed under MIT License.
