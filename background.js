chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get("selectedFilter", function (data) {
        if (data.selectedFilter) {
            applyFilterToAllTabs(data.selectedFilter);
        }
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url && tab.url.startsWith("http")) { // ✅ Check if tab.url exists
        chrome.storage.local.get("selectedFilter", function (data) {
            if (data.selectedFilter) {
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    function: applyColorFilter,
                    args: [data.selectedFilter]
                });
            }
        });
    }
});

function applyFilterToAllTabs(filterType) {
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(tab => {
            if (tab.url && tab.url.startsWith("http")) { // ✅ Check if tab.url exists
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: applyColorFilter,
                    args: [filterType]
                });
            }
        });
    });
}

function applyColorFilter(filterType) {
    let filterStyles = {
        "protanopia": "contrast(1.2) sepia(1) hue-rotate(-15deg)", 
        "deuteranopia": "contrast(1.2) sepia(0.8) hue-rotate(20deg)", 
        "tritanopia": "contrast(1.2) sepia(0.8) hue-rotate(180deg)", 
        "achromatopsia": "grayscale(1)", 
        "none": "none"
    };

    document.documentElement.style.filter = filterStyles[filterType] || "none";
}
