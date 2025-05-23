console.log("Hello, World!");
const themeIcon = document.getElementById("themeIcon");

let isDarkMode = false;

function changeTheme() {
    console.log("Theme changed!");
    isDarkMode = !isDarkMode;

    console.log(isDarkMode);
    toggleTheme();
}

function toggleTheme() {
    if (isDarkMode) {
        themeIcon.className = "ph ph-moon cursor-pointer p-2 hover:bg-gray-200 rounded-lg transition-all duration-300";
        // change background color
        document.body.className = "bg-gray-900 text-white transition-all duration-300";
    } else {
        themeIcon.className = "ph ph-sun cursor-pointer p-2 hover:bg-gray-200 rounded-lg transition-all duration-300";
        // change background color
        document.body.className = "bg-white text-gray-900 transition-all duration-300";
    }
}
