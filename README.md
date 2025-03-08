# Color-Blindness-Filter
Color Blindness Filter - Final Prototype

Overview:
This is the final version of our Chrome extension that helps color-blind users by applying real-time color adjustments to webpages. The extension provides a simple popup UI where users can choose from different filters designed for various types of color blindness. Now, the filter persists across pages until the browser is closed, ensuring a seamless user experience.

Current Status:
The extension is now fully functional with real-time filtering. Filters persist across all webpages until Chrome is closed. The performance and usability have been optimized for a smoother experience. This version is ready for potential publishing on the Chrome Web Store.

How It Works:
The user selects a color blindness type from the popup menu, and the extension modifies the colors on all webpages for better visibility. It uses CSS filters to enhance color contrast automatically, ensuring the filter remains active across all open webpages.

Supported Color Blindness Types:
Protanopia (Red-Blind), Deuteranopia (Green-Blind), Tritanopia (Blue-Blind), and Achromatopsia (Total Color Blindness) are supported in this version.

Installation (For Testing Only):
To install, download the project files to your computer, open Google Chrome, and navigate to chrome://extensions/. Enable Developer Mode, click Load Unpacked, and select the project folder. Once installed, the extension will appear in the Chrome toolbar.

How to Use:
Click the Color Blindness Filter extension icon in the Chrome toolbar, select a filter from the dropdown menu, and click Apply. The selected filter will instantly adjust webpage colors and persist across all pages until Chrome is closed. To reset, select "None" in the filter menu.

Project Structure:
The project consists of several core files: manifest.json for Chrome extension configuration, popup.html for the user interface, popup.js for handling user input and filter persistence, content.js for applying color filters to webpages, and background.js for ensuring filters are applied automatically. The styles.css file handles popup styling, and the icons/ folder contains extension icons.

Future Improvements:
Future updates may include saving user preferences beyond browser sessions, adding custom color adjustment sliders for more precise control, optimizing performance for dynamic websites, and exploring AI-based adaptive filtering to enhance visibility dynamically.

License:
This project is a final prototype and remains open for further improvements. It is licensed under the MIT License.

