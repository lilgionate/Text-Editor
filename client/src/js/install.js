const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior to avoid showing the browser's install prompt
    event.preventDefault();

    // Store the event for later use
    deferredPrompt = event;

    //Update the UI or show a custom install button
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the browser's install prompt
        deferredPrompt.prompt();

        // Wait for th user to respond to the prompt
        const choiceResult = await deferredPrompt.userChoice;

        // Check the result
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        // Clear the defferedPrompt variable
        deferredPrompt = null;

        // Hide the custom install button
        butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // The app has been successfully installed
    console.log('App installed successfully')
});
