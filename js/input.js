
class Input {

  constructor(){
    document.addEventListener("keydown", this.handle);
  }

  /**
   * directie van slang veranderen
   * speler drukt knop in om het hoofd directie aan te geven
   * input: keyboardEvent
   * output: directie van de slang veranderd
   */
  handle(event) {
    if (event.key === "ArrowLeft") {
      slang.directie = Directie.Links;
    }

    if (event.key === "ArrowRight") {
      slang.directie = Directie.Rechts;
    }

    if (event.key === "ArrowUp"){
      slang.directie = Directie.Boven;
    }

    if (event.key === "ArrowDown") {
      slang.directie = Directie.Onder;
    }
  }
}
