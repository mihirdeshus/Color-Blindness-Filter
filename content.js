// Immediately fetch and apply the saved filter
chrome.storage.local.get("selectedFilter", function (data) {
    if (data.selectedFilter) {
        applyColorFilter(data.selectedFilter);
    }
});

// Listen for filter updates and apply changes instantly
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "applyFilter") {
        applyColorFilter(request.filter);
    }
});

// Function to apply the color filter instantly
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
