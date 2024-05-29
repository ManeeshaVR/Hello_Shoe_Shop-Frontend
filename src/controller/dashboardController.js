let currentTheme = document.documentElement.getAttribute('data-theme');

$('#theme_changer').click(function () {
    let newTheme = currentTheme === 'sunset' ? 'winter' : 'sunset';
    document.documentElement.setAttribute('data-theme', newTheme);
    currentTheme = newTheme;

    const moonIcon = $('#moon');
    const sunIcon = $('#sun');
    if (currentTheme === 'sunset') {
        moonIcon.hide();
        sunIcon.show();
    } else {
        moonIcon.show();
        sunIcon.hide();
    }
});