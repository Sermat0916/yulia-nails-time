let body = document.querySelector("body"),
  button3 = document.querySelectorAll(".button3"),
  submitBUTON = document.querySelectorAll(".submitBUTON"),
  forTata = document.querySelector(".forTata"),
  block2 = document.querySelector(".block2"),
  button2 = document.querySelector(".button2"),
  button22 = document.querySelector(".button22"),
  nonFlex = document.querySelector(".nonFlex"),
  content = document.querySelector(".content");

button3.forEach((but) => {
  but.addEventListener("click", () => {
    content.style.display = "none";
    nonFlex.style.display = "flex";
  });
});



let arGaaleri = [
  "img/galeri1.jpg",
  "img/galeri2.jpg",
  "img/galeri3.jpg",
  "img/galeri1.jpg",
  "img/galeri2.jpg",
  "img/galeri3.jpg",
  "img/galeri1.jpg",
  "img/galeri2.jpg",
  "img/galeri3.jpg",
  "img/galeri1.jpg",
  "img/galeri2.jpg",
  "img/galeri3.jpg",
  "img/galeri1.jpg",
  "img/galeri2.jpg",
  "img/galeri3.jpg",
  "img/galeri1.jpg",
  "img/galeri2.jpg",
  "img/galeri3.jpg",
  "img/galeri1.jpg",
  "img/galeri2.jpg",
  "img/galeri3.jpg",
];

let fotoAr;

function showGaleriAr(ar) {
  fotoAr = document.createElement("div");
  block2.append(fotoAr);

  ar.slice(0, 6).forEach((foto) => {
    let img = document.createElement("img");
    img.classList.add("imgGaleri");
    img.src = foto;
    fotoAr.append(img);
    fullScrin(img);
  });
}

showGaleriAr(arGaaleri);

function fullScrin(foto) {
  foto.addEventListener("click", () => {
    foto.classList.toggle("fullscreen");
  });
}

function showGaleriFullAr(ar) {
  fotoAr.innerHTML = "";
  fotoAr = document.createElement("div");
  block2.append(fotoAr);

  ar.forEach((foto) => {
    let img = document.createElement("img");
    img.classList.add("imgGaleri");
    img.src = foto;
    fotoAr.append(img);
    fullScrin(img);
  });
  button2.style.display = "none";
  button22.style.display = "block";
}

function showGaleriDefoltAr(ar) {
  fotoAr.innerHTML = "";
  fotoAr = document.createElement("div");
  block2.append(fotoAr);

  ar.slice(0, 6).forEach((foto) => {
    let img = document.createElement("img");
    img.classList.add("imgGaleri");
    img.src = foto;
    fotoAr.append(img);
    fullScrin(img);
  });
  button2.style.display = "block";
  button22.style.display = "none";
}

button2.addEventListener("click", () => {
  showGaleriFullAr(arGaaleri);
});

button22.addEventListener("click", () => {
  showGaleriDefoltAr(arGaaleri);
});
