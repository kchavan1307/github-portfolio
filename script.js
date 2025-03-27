// Typing Effect
const text = "Cybersecurity professional | IT & OT Security | Threat Analysis";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();
