document.addEventListener("DOMContentLoaded", () => {
    function countdown1() {
        const targetUnixTime = 1830308400;
        const currentUnixTime = Math.floor(Date.now() / 1000);
        let diff = targetUnixTime - currentUnixTime;
        if (diff <= 0) {
            diff = 0;
        }
        const days = Math.floor(diff / 86400)
        const hours = Math.floor(diff / 3600) % 24
        const minutes = Math.floor(diff / 60) % 60
        const seconds = diff % 60;

        document.getElementById("countdownUntilMyGrandpaLeaves").textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
    }
    countdown1();
    setInterval(countdown1, 1000);
})
