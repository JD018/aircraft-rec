document.getElementById("launchBtn").addEventListener("click", function() {
    // Show the popup
    document.getElementById("popup").style.display = "block";
    document.getElementById("launchBtn").style.display = "none";
});

// Handle the confirmation inside the popup
document.getElementById("confirmLaunchBtn").addEventListener("click", function() {
    // Hide the popup
    document.getElementById("popup").style.display = "none";

    // Hide the text elements and the main launch button
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.subtext').style.display = 'none';
    document.getElementById('launchBtn').style.display = 'none';

    // Move the logo to the bottom right corner and apply the pulse effect
    const logo = document.getElementById("logo");
    logo.classList.add("bottom-right");

    // Wait for a few seconds, then navigate to main.html
    setTimeout(function() {
        window.location.href = "main.html";
    }, 4000); // Loading
});
