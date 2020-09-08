class Slang {
  x = 0;
  y = 0;
  hoofd = GridObjects.SLANGEN_HOOFD;
  lichaam;
  directie = Directie.Links;

  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  beweeg() {

    switch (this.directie) {
      case Directie.Links:
        --this.x;
        break;
      case Directie.Rechts:
        ++this.x;
        break;
      case Directie.Boven:
        ++this.y;
        break;
      case Directie.Onder:
        --this.y;
        break;
      default:
        break;
    }
  }

}
