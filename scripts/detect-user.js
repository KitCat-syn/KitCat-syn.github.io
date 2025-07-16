const ua = navigator.userAgent;
let os = "an unknown OS";
let browser = "an unknown browser";

if (ua.includes("Windows")) os = "Windows";
else if (ua.includes("Macintosh")) os = "macOS";
else if (ua.includes("Linux")) os = "Linux";
else if (ua.includes("Android")) os = "Android";
else if (ua.includes("iPhone") || ua.includes("iPad")) os = "iOS";

if (ua.includes("Firefox")) browser = "Firefox";
else if (ua.includes("Edg")) browser = "Microsoft Edge";
else if (ua.includes("Chrome")) browser = "Chrome";
else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";

let message = "";

if (browser === "Firefox" && os === "Linux") {
    message = "Wow Firefox and Linux! You're doing great!";
}
else if (os === "IOS" || os === "Android") {
    message = "Get off your phone and go use a computer";
}
else if (browser === "Firefox") {
    message = "Nice job using Firefox! You should try it on Linux :)";
}
else if (os === "Linux") {
    message = "Linux is great nice job! You should try Firefox, it's a cool browser";
}
else if (browser === "an unknown browser" && os === "an unknown OS") {
    message = "hmm, I can't tell what browser and OS you're using. Look at you all mysterious!";
}

else {
    message = `oh, you're using ${browser} and ${os}? You should try Firefox and Linux instead!`;
}
document.getElementById("user-message").textContent = message;