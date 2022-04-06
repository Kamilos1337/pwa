const container = document.querySelector(".container");
const coffees = [
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: "Perspiciatis",
    image: "images/coffee1.jpg"
  },
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: "Voluptatem",
    image: "images/coffee2.jpg"
  },
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: "Explicabo",
    image: "images/coffee3.jpg"
  },
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: "Rchitecto",
    image: "images/coffee4.jpg"
  },
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: " Beatae",
    image: "images/coffee5.jpg"
  },
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: " Vitae",
    image: "images/coffee6.jpg"
  },
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: "Inventore",
    image: "images/coffee7.jpg"
  },
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: "Veritatis",
    image: "images/coffee8.jpg"
  },
  {
    desc: "Kawa która da Ci: "+Math.floor(Math.random() * 1000)+" minut energi!",
    name: "Accusantium",
    image: "images/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, desc }) =>
      (output += `
        <div class="card" style="width: 18rem;">
      <img class="card--avatar" src=${image} />
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text"><b>${desc}</b></p>
      <a href="#" class="btn btn-primary">Wczytujemy kawy... :)</a>
    </div>
  </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/pwa/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
