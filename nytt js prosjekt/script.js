
const language = {
  en: "Good morning!",
  nb: "God morgen!",
  de: "Guten Morgen!",
  jp: "Ohayo gozaimasu!",
  pl: "Dzień dobry!",
  la: "Labrīt!",
  fr: "Bonjour!",
  fi: "Hyvää huomenta!",
  fil: "Magandang umaga po!"
}

const oversatt = document.getElementById("result");


function setLang(langCode) {
result.innerHTML = language[langCode];
setTimeout(function() {
  result.innerHTML = "";
}, 5000);
}






