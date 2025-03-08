chrome.storage.local.get("selectedFilter", function (data) {
    if (data.selectedFilter) {
        applyColorFilter(data.selectedFilter);
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "applyFilter") {
        applyColorFilter(request.filter);
    }
});

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
