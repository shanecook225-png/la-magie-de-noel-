/* 🎄 La Magie de Noël by Yohan 🎅🏾 */

/* ----- Musique ----- */
const music = document.getElementById("music");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;
musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicToggle.textContent = "🔊 Activer la musique";
  } else {
    music.play();
    musicToggle.textContent = "🔇 Couper la musique";
  }
  isPlaying = !isPlaying;
});

/* ----- Boîte cadeau 🎁 ----- */
const giftBox = document.getElementById("giftBox");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");

const messages = [
  "🎄 Joyeux Noël ! Que la magie remplisse ton cœur 🎅🏾✨",
  "❄️ Un sourire, un câlin, et beaucoup d’amour pour toi 💖",
  "🎁 Que chaque jour soit un cadeau à ouvrir 🌟",
  "✨ La magie de Noël, c’est de partager la joie 🎶",
  "🦌 Que ton chemin soit illuminé comme un sapin 🎄💡"
];

giftBox.addEventListener("click", () => {
  giftBox.classList.toggle("open");

  setTimeout(() => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    messageText.textContent = randomMsg;
    messageBox.style.display = "block";
  }, 600); // temps de l'animation du couvercle
});

/* ----- Bouton Partage ----- */
const shareButton = document.getElementById("shareButton");
shareButton.addEventListener("click", () => {
  const message = "🎄 Viens découvrir la magie de Noël by Yohan 🎅🏾✨ " + window.location.href;
  if (navigator.share) {
    navigator.share({
      title: "La Magie de Noël 🎄",
      text: message,
      url: window.location.href
    });
  } else {
    alert("Partagez ce lien : " + window.location.href);
  }
});

/* ----- Neige animée ❄️ ----- */
const snowContainer = document.querySelector(".snowflakes");

function createSnowflake() {
  const snowflake = document.createElement("span");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // vitesse
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000); // durée de vie du flocon
}

setInterval(createSnowflake, 200); // génère un flocon toutes les 200ms
