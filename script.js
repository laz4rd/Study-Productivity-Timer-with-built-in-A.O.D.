let countdown;
        let silentModeTimeout;

        function startTimer(seconds) {
            clearInterval(countdown);
            disableButtons(true);
            const endTime = Date.now() + seconds * 1000;
            displayTimeLeft(seconds);
            countdown = setInterval(() => {
                const secondsLeft = Math.round((endTime - Date.now()) / 1000);
                if (secondsLeft < 0) {
                    clearInterval(countdown);
                    disableButtons(false);
                    return;
                }
                displayTimeLeft(secondsLeft);
            }, 1000);
        }

        function displayTimeLeft(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            document.getElementById('timer').innerHTML = 
                `<span class="hours">${String(hours).padStart(2, '0')}</span>:` +
                `<span class="minutes">${String(minutes).padStart(2, '0')}</span>:` +
                `<span class="seconds">${String(secs).padStart(2, '0')}</span>`;
        }

        function disableButtons(state) {
            document.querySelectorAll(".button-container button").forEach(button => {
                button.disabled = state;
            });
        }

        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }

        function activateSilentMode() {
        document.body.classList.add("silent-mode");
    }

    function deactivateSilentMode() {
        document.body.classList.remove("silent-mode");
        clearTimeout(silentModeTimeout);
        silentModeTimeout = setTimeout(activateSilentMode, 5000);
    }

        silentModeTimeout = setTimeout(activateSilentMode, 5000);
    document.addEventListener("mousemove", deactivateSilentMode);