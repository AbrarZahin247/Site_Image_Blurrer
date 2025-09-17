// content.js

/**
 * Creates a <style> element and injects the CSS rules into the page's <head>.
 */
function injectCss() {
    const css = `
        .image-is-blurred {
            filter: blur(10px);
            transition: filter 0.3s ease-in-out;
        }
    `;
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}

/**
 * A more robust and performant function to blur an image by adding a CSS class.
 * @param {HTMLImageElement} imageElement The image to potentially blur.
 */
function applyBlur(imageElement) {
    // 1. Guard Clauses: Ensure it's an IMG and not already processed.
    if (imageElement.tagName !== 'IMG' || imageElement.dataset.blurApplied) {
        return;
    }

    // 2. Mark as processed immediately to prevent re-running.
    imageElement.dataset.blurApplied = 'true';

    // 3. Handle image loading:
    // If the image is already loaded and has dimensions, blur it now.
    if (imageElement.complete) {
        imageElement.classList.add('image-is-blurred');
    } else {
        // Otherwise, wait for the 'load' event to fire before blurring.
        imageElement.addEventListener('load', () => {
            imageElement.classList.add('image-is-blurred');
        }, { once: true });
    }
}

// --- Main Execution ---

// 1. Inject our CSS rules into the page first.
injectCss();

// 2. Blur all images that are already on the page.
document.querySelectorAll('img').forEach(applyBlur);

// 3. Create an observer to watch for new images being added to the DOM.
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // ELEMENT_NODE
                if (node.tagName === 'IMG') {
                    applyBlur(node);
                } else {
                    node.querySelectorAll('img').forEach(applyBlur);
                }
            }
        });
    });
});

// 4. Start observing the entire document for additions.
observer.observe(document.body, {
    childList: true,
    subtree: true
});