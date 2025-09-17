# Image Blurrer - Browser Extension

Open websites are often filled with visually distracting images that pull your focus away from the content you're there to read. Image Blurrer solves this by automatically applying a soft blur to all images, creating a calmer, more text-focused browsing environment. It's the perfect tool for improving concentration while reading or for maintaining privacy during presentations and screen shares.

***

## ## Features

* **Automatic Blurring:** Blurs all existing images as soon as a page loads.
* **Dynamic Content Support:** Uses a `MutationObserver` to find and blur images that are added to the page later (e.g., through infinite scroll).
* **Lightweight & Performant:** Uses a single, efficient CSS `filter` rule for the blur effect, ensuring minimal impact on browser performance.
* **Self-Contained:** All necessary logic and styling are packaged into a single JavaScript file.

***

## ## How to Install and Use

Since this extension is not on the Chrome Web Store, you need to load it manually using "Developer mode."

1.  **Download the Code**
    * On the GitHub repository page, click the green **`< > Code`** button.
    * Select **Download ZIP**.
    * Find the downloaded `.zip` file on your computer and **unzip it** into a permanent folder. 

2.  **Open the Extensions Page**
    * In your Chromium-based browser (Google Chrome, Microsoft Edge, etc.), navigate to the extensions management page. You can typically do this by typing `chrome://extensions` or `edge://extensions` into your address bar and pressing **Enter**.

3.  **Enable Developer Mode**
    * On the extensions page, find the **Developer mode** toggle, usually in the top-right corner, and turn it **on**. 

4.  **Load the Extension**
    * With Developer mode enabled, new buttons will appear. Click on **Load unpacked**.
    * A file selection dialog will open. Navigate to and select the folder you unzipped in Step 1 (the one that contains the `manifest.json` file).
    * The "Image Blurrer" extension will now appear in your list and is active.

Now, simply browse to any website, and the images will be blurred automatically.

***

## ## How It Works

This extension uses a **Content Script** (`content.js`) that is injected into every webpage you visit.

1.  The script first injects a small piece of CSS into the page's `<head>`. This CSS defines a class named `.image-is-blurred` that applies a `blur` filter.
2.  It then scans the entire page for any `<img>` tags and adds this `.image-is-blurred` class to them, making sure the images are fully loaded first.
3.  A `MutationObserver` continues to watch the page in the background, applying the blur class to any new images that appear.

***

## ## File Structure

* `manifest.json`: The core file that defines the extension's properties, permissions, and tells the browser which scripts to run.
* `content.js`: The JavaScript file that contains all the logic for finding and blurring images.
* `icons/icon16.png`: The 16x16 pixel icon for the extension.