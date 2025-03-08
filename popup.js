document.getElementById("applyFilter").addEventListener("click", function () {
    let selectedFilter = document.getElementById("filter").value;

    // Save the selected filter in Chrome storage
    chrome.storage.local.set({ selectedFilter: selectedFilter }, function () {
        console.log("Filter saved:", selectedFilter);
    });

    // Apply the filter globally across all valid tabs
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(tab => {
            if (tab.url && tab.url.startsWith("http")) { // ✅ Check if tab.url exists before applying startsWith
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: applyColorFilter,
                    args: [selectedFilter]
                });
            }
        });
    });
});

// Function to apply the filter
function applyColorFilter(filterType) {
    let filterStyles = {
        "protanopia": "grayscale(50%) sepia(100%)",
        "deuteranopia": "grayscale(50%) sepia(50%)",
        "tritanopia": "grayscale(50%) hue-rotate(180deg)",
        "achromatopsia": "grayscale(100%)",
        "none": "none"
    };

    document.body.style.filter = filterStyles[filterType] || "none";
}

// Load the saved filter and update the dropdown
chrome.storage.local.get("selectedFilter", function (data) {
    if (data.selectedFilter) {
        document.getElementById("filter").value = data.selectedFilter;
    }
});
