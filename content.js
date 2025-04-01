(function() {
  // Function to inject CSS for hiding thumbnails
  function injectThumbnailCSS() {
    if (document.getElementById('yt-thumbnail-remover-style')) return; // Already injected

    const style = document.createElement('style');
    style.id = 'yt-thumbnail-remover-style';
    style.textContent = `
      /* Hide video thumbnails on YouTube homepage while preserving layout */
      /* Targets images inside video grid items on the homepage */
      ytd-rich-grid-media ytd-thumbnail img {
          visibility: hidden !important;
      }
      /* Remove any background image preview on the thumbnail container */
      ytd-rich-grid-media ytd-thumbnail {
          background-image: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Function to remove the injected CSS
  function removeThumbnailCSS() {
    const style = document.getElementById('yt-thumbnail-remover-style');
    if (style) {
      style.remove();
    }
  }

  // Function to apply the toggle state
  function applyToggleState(enabled) {
    if (enabled) {
      injectThumbnailCSS();
    } else {
      removeThumbnailCSS();
    }
  }

  // Only run on the homepage (exact path "/")
  if (window.location.pathname === "/" || window.location.pathname === "/?") {
    // Retrieve the toggle state from chrome storage (default: enabled)
    chrome.storage.sync.get({ enabled: true }, function(data) {
      applyToggleState(data.enabled);
    });
  }

  // Listen for messages (from popup) to update the toggle state dynamically
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'toggleThumbnailRemoval') {
      applyToggleState(message.enabled);
      sendResponse({ status: 'done' });
    }
  });

  // MutationObserver to handle any dynamically added content (if needed)
  const observer = new MutationObserver(function(mutations) {
    // With CSS in place, new nodes are already styled.
    // This block is available for future checks if inline styles or elements require adjustment.
    mutations.forEach(function(mutation) {
      // For demonstration: you might reapply CSS if unexpected changes occur.
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
