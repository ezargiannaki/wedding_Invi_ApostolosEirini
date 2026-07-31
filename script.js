function updateCountdown(){
  const box = document.querySelector('.countdown');
  const target = new Date(box.dataset.date).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById('days').textContent = d;
  document.getElementById('hours').textContent = h;
  document.getElementById('minutes').textContent = m;
  document.getElementById('seconds').textContent = s;
}

// Αντιγραφή IBAN
function copyIban(){
  const iban = document.getElementById('iban').textContent;

  navigator.clipboard.writeText(iban)
    .then(() => {
      alert('Το IBAN αντιγράφηκε!');
    })
    .catch(() => {
      alert('Η αντιγραφή απέτυχε.');
    });
}
// Αντιγραφή Iris
function copyIris(){
  const iris = document.getElementById('iris').textContent;

  navigator.clipboard.writeText(iris)
    .then(() => {
      alert('Το IRIS της Ειρήνης αντιγράφηκε!');
    })
    .catch(() => {
      alert('Η αντιγραφή απέτυχε.');
    });
}
// Αντιγραφή Iris
function copyIris2(){
  const iris2 = document.getElementById('iris2').textContent;

  navigator.clipboard.writeText(iris2)
    .then(() => {
      alert('Το IRIS του Αποστόλη αντιγράφηκε!');
    })
    .catch(() => {
      alert('Η αντιγραφή απέτυχε.');
    });
}

updateCountdown();
setInterval(updateCountdown, 1000); 

const personPhotos = {
    groom: "images/groom.jpg",
    bride: "images/bride.jpg",
    koumpara: "images/koumpara.jpg",
    koumparos: "images/koumparos.jpg"
};

function openPersonPhoto(person) {
    document.getElementById("personPhoto").src = personPhotos[person];
    document.getElementById("photoModal").classList.add("show");
}

function closePersonPhoto(event) {
    if (event.target.id === "photoModal") {
        document.getElementById("photoModal").classList.remove("show");
    }
}

// ===========================
// Fade-in κατά το scroll
// ===========================

const revealElements = document.querySelectorAll(
  'main > section, .story-image-card, .people-grid > div'
);

revealElements.forEach((element) => {
  element.classList.add('reveal');
});

if ('IntersectionObserver' in window) {

  const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }

    });

  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add('visible');
  });

}
