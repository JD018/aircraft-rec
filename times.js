// Sidebar and Toggle Button Functionality
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const overlay = document.getElementById('overlay');

sidebarToggle.addEventListener('click', function() {
    // Toggle sidebar and button positions
    sidebar.classList.toggle('open');
    sidebarToggle.classList.toggle('open');

    // Change the arrow direction
    if (sidebarToggle.innerHTML === '&lt;') {
        sidebarToggle.innerHTML = '&gt;';
    } else {
        sidebarToggle.innerHTML = '&lt;';
    }

    // Toggle overlay
    overlay.classList.toggle('active');
});

// Close sidebar when clicking outside
overlay.addEventListener('click', function() {
    sidebar.classList.remove('open');
    sidebarToggle.classList.remove('open');
    sidebarToggle.innerHTML = '&lt;';
    overlay.classList.remove('active');
});

// Update the time every second
function updateTime() {
    const now = new Date();

    // Local Time
    const localHours = now.getHours() % 12 || 12;
    const localMinutes = String(now.getMinutes()).padStart(2, '0');
    const localSeconds = String(now.getSeconds()).padStart(2, '0');
    const localSuffix = now.getHours() >= 12 ? 'PM' : 'AM';
    document.getElementById('local-time').textContent = `${localHours}:${localMinutes}:${localSeconds}`;
    document.getElementById('local-suffix').textContent = ` ${localSuffix}`;

    // UTC Time
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    document.getElementById('utc-time').textContent = `${utcHours}${utcMinutes} UTC`;
}

// Call updateTime every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately