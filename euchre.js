function Card() {
  this.id;
  this.src;
}

function generateDeck() {
  var deck = [];
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
      var id = i + "_" + j;
      deck.push(generateCard(id));
    }
  }
  return deck;
}

function generateCard(id) {
  var card = new Card();
  card.id = id;
  card.src = "images/" + id + ".png";
  return card;
}

function initGame() {
  var div_elt = document.getElementById("div-board");
  //var img = document.createElement("img");
  //div_elt.appendChild(img);

  this.deck = generateDeck();
  for each (var card in this.deck) {
    alert("CARD: " + card.id);
  }
}

initGame();


 /**
  * Lessons Learnt:
  *
  *   * an object literal cannot be considered a class. No new!!
  **/
