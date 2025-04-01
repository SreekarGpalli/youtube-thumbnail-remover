# youtube-thumbnail-remover
A Chrome extension that selectively removes thumbnail images from YouTube's homepage while maintaining the layout and structure of the page.

# Build Instructions

This document contains step-by-step instructions for building and packaging the YouTube Thumbnail Remover Chrome extension.

## Prerequisites

- Basic knowledge of web development
- A text editor or IDE (Visual Studio Code, Sublime Text, etc.)
- Chrome browser installed
- Basic understanding of Chrome extension architecture

## Project Structure

Create a project folder with the following structure:

```
youtube-homepage-thumbnail-remover/
├── manifest.json
├── content.js
├── popup.html
├── popup.js
```

## Step 1: Implementation Files

1. **Create manifest.json**
   - Copy the code from the provided manifest.json file
   - This file defines the extension metadata and permissions

2. **Create content.js**
   - Copy the code from the provided content.js file
   - This is the main script that runs on YouTube pages


3. **Create popup.html**
   - Copy the code from the provided popup.html file
   - This is the user interface for the extension popup

4. **Create popup.js**
   - Copy the code from the provided popup.js file
   - This handles the functionality of the popup UI

## Step 3: Testing the Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" using the toggle in the top-right corner
3. Click "Load unpacked" and select your project folder
4. The extension should now appear in your extensions list
5. Click on the extension icon to ensure the popup works correctly
6. Navigate to YouTube's homepage to test the thumbnail removal functionality
7. Make any necessary adjustments to the code and reload the extension as needed

## Modifying the Extension

If you want to modify the extension:

1. **Edit the appropriate files**:
   - For functionality changes: modify content.js
   - For styling changes: modify styles.css
   - For popup interface changes: modify popup.html and popup.js

2. **Reload the extension**:
   - After making changes, go to `chrome://extensions/`
   - Find your extension and click the reload icon (↻)
   - Alternatively, you can click the "Update" button

3. **Testing changes**:
   - Navigate to YouTube and test the functionality
   - Check different YouTube layouts and themes
   - Verify the extension works as expected

## Advanced Customization

To further customize the extension:

1. **Modify thumbnail placeholders**:
   - Edit the styles.css file to change the appearance of placeholders
   - Adjust colors, borders, or other visual elements

2. **Add additional functionality**:
   - Extend the content.js file to add more features
   - Consider adding options for different levels of thumbnail hiding

3. **Improve performance**:
   - Optimize the MutationObserver implementation
   - Consider using more specific selectors in CSS
