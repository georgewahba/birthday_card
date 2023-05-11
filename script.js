
  function randomDirection(){
   confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
  }); 
  }
  
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }


  const card = document.querySelector('.card');

card.addEventListener('click', () => {
  card.classList.toggle('card-clicked');
});

function handleClick() {
    var card = document.querySelector(".card");
    if (!card.classList.contains("clicked")) {
      card.classList.add("clicked");
    }
}