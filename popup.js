document.getElementById("applyFilter").addEventListener("click", function () {
    let selectedFilter = document.getElementById("filter").value;

    chrome.storage.local.set({ selectedFilter: selectedFilter }, function () {
        console.log("Filter saved:", selectedFilter);
    });

    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(tab => {
            if (tab.url && tab.url.startsWith("http")) { // ✅ Check if tab.url exists
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: applyColorFilter,
                    args: [selectedFilter]
                });
            }
        });
    });
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

chrome.storage.local.get("selectedFilter", function (data) {
    if (data.selectedFilter) {
        document.getElementById("filter").value = data.selectedFilter;
    }
});
