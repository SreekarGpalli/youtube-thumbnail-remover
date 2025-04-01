document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('toggleCheckbox');

  // Retrieve the current setting (default is enabled)
  chrome.storage.sync.get({ enabled: true }, function(data) {
    checkbox.checked = data.enabled;
  });

  // Update setting and notify the content script when the checkbox state changes
  checkbox.addEventListener('change', function() {
    const enabled = checkbox.checked;
    chrome.storage.sync.set({ enabled: enabled }, function() {
      // Send message to active tab to update the toggle state
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, { type: 'toggleThumbnailRemoval', enabled: enabled });
        }
      });
    });
  });
});
