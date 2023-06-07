const btnSubirVol = document.querySelector(
  ".col-sm-2:nth-child(2) .btn.btn-info"
);
const btnBajarVol = document.querySelector(
  ".col-sm-2:nth-child(3) .btn.btn-info"
);
const btnSubirCanal = document.querySelector(
  ".col-sm-2:nth-child(4) .btn.btn-info"
);
const btnBajarCanal = document.querySelector(
  ".col-sm-2:nth-child(5) .btn.btn-info"
);
const btnPrendeApaga = document.querySelector(
  ".col-sm-2:nth-child(1) .btn.btn-danger"
);
const btnSilenciar = document.querySelector(
  ".col-sm-2:nth-child(6) .btn.btn-success"
);

const badges = {
  subirVolumen: document.querySelectorAll(".col-sm-2:nth-child(2) .badge"),
  subirCanal: document.querySelectorAll(".col-sm-2:nth-child(4) .badge"),
};
const badges2 = {
    bajarVolumen: document.querySelectorAll(".col-sm-2:nth-child(3) .badge"),
    bajarCanal: document.querySelectorAll(".col-sm-2:nth-child(5) .badge"),
  };

let currentIndex = {
  subirVolumen: badges.subirVolumen.length - 1,
  subirCanal: badges.subirCanal.length - 1,
};
let currentIndex2 = {
    bajarVolumen: badges2.bajarVolumen.length - 1,
    bajarCanal: badges2.bajarCanal.length - 1,
  };

let isPowerOn = false;
let buttonsDisabled = false;

const powerBadge = document.querySelector(".badge.bg-secondary");
const startBadge = document.querySelector(".badge.bg-secondary:last-of-type");

btnPrendeApaga.addEventListener("click", () => {
  isPowerOn = !isPowerOn;

  if (isPowerOn) {
    btnSubirVol.disabled = false;
    btnBajarVol.disabled = false;
    btnSubirCanal.disabled = false;
    btnBajarCanal.disabled = false;
    btnSilenciar.disabled = false;

    powerBadge.classList.remove("bg-secondary");
    powerBadge.classList.add("bg-success");
  } else {
    btnSubirVol.disabled = true;
    btnBajarVol.disabled = true;
    btnSubirCanal.disabled = true;
    btnBajarCanal.disabled = true;
    btnSilenciar.disabled = true;

    Object.values(badges).forEach((badgeGroup) => {
      badgeGroup.forEach((badge) => {
        badge.classList.remove("bg-success");
        badge.classList.add("bg-secondary");
      });
    });
    powerBadge.classList.remove("bg-success");
    powerBadge.classList.add("bg-secondary");
    btnSilenciar.classList.remove("btn-warning");
    btnSilenciar.classList.add("btn-success");

    Object.values(badges2).forEach((badgeGroup) => {
        badgeGroup.forEach((badge) => {
          badge.classList.remove("bg-success");
          badge.classList.add("bg-secondary");
        });
      });
      powerBadge.classList.remove("bg-success");
      powerBadge.classList.add("bg-secondary");
      btnSilenciar.classList.remove("btn-warning");
      btnSilenciar.classList.add("btn-success");
  }
  
});

btnSilenciar.addEventListener("click", () => {
  btnSilenciar.classList.toggle("btn-warning");
  buttonsDisabled = !buttonsDisabled;

  btnSubirVol.disabled = buttonsDisabled;
  btnBajarVol.disabled = buttonsDisabled;
});

btnSubirVol.addEventListener("click", function () {
  changeBadgeColor("subirVolumen");
});

btnBajarVol.addEventListener("click", function () {
  changeBadgeColor("bajarVolumen");
});

btnSubirCanal.addEventListener("click", function () {
  changeBadgeColor("subirCanal");
});

btnBajarCanal.addEventListener("click", function () {
  changeBadgeColor("bajarCanal");
});

function changeBadgeColor(column) {
  badges[column].forEach(function (badge) {
    badge.classList.remove("bg-success");
    badge.classList.add("bg-secondary");
  });

  badges[column][currentIndex[column]].classList.remove("bg-secondary");
  badges[column][currentIndex[column]].classList.add("bg-success");  

  currentIndex[column] = (currentIndex[column] - 1 + badges[column].length) % badges[column].length;

  currentIndex2[column] = (currentIndex2[column] + 1 + badges[column].length) % badges[column].length;
}
