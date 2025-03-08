chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get("selectedFilter", function (data) {
        if (data.selectedFilter) {
            chrome.tabs.query({}, function (tabs) {
                tabs.forEach(tab => {
                    if (tab.url.startsWith("http")) {
                        chrome.scripting.executeScript({
                            target: { tabId: tab.id },
                            function: applyColorFilter,
                            args: [data.selectedFilter]
                        });
                    }
                });
            });
        }
    });
});

function applyColorFilter(filterType) {
    let filterStyles = {
        "protanopia": "grayscale(50%) sepia(100%)",
        "deuteranopia": "grayscale(50%) sepia(50%)",
        "tritanopia": "grayscale(50%) hue-rotate(180deg)",
        "achromatopsia": "grayscale(100%)",
        "none": "none"
    };

    document.documentElement.style.filter = filterStyles[filterType] || "none";
}
