class Slang {
  x = 0;
  y = 0;
  lichaam = [];
  directie = Directie.Links;

  constructor(x, y){
    this.x = x;
    this.y = y;

    model.grid[this.x][this.y] = GridObjects.SLANGEN_HOOFD;

    //aanmaken body
    for(let bodyX = 1; bodyX < AANTAL_SEGMENTEN_START + 1; bodyX ++ ){
      this.lichaam.push( new Segment (this.x + bodyX, this.y) );
    }

  }

  beweeg() {

    let oldPosition = [this.x, this.y];

    switch (this.directie) {
      case Directie.Links:
        --this.x;
        break;
      case Directie.Rechts:
        ++this.x;
        break;
      case Directie.Boven:
        --this.y;
        break;
      case Directie.Onder:
        ++this.y;
        break;
      default:
        break;
    }

    model.grid[oldPosition[1]][oldPosition[0]] = GridObjects.SLANGEN_LICHAAM;
    let objectWaarHoofdNaartoeBeweegt = model.grid[this.y][this.x];
    model.grid[this.y][this.x] = GridObjects.SLANGEN_HOOFD;


    let segment = null;

    switch (objectWaarHoofdNaartoeBeweegt) {
      case(GridObjects.APPELTJE):
        this.appeltjeKrijgtAnderePlek();
        segment = new Segment(oldPosition[0], oldPosition[1]);
        break;
      case(GridObjects.SLANGEN_LICHAAM):
        gameOver();
        break;
      case(GridObjects.MUUR):
        gameOver();
        break;
      default:
        segment = this.lichaam.pop();
        model.grid[segment.y][segment.x] = GridObjects.NIETS;
        segment.x = oldPosition[0];
        segment.y = oldPosition[1];
        break;
    }

    this.lichaam.unshift(segment);

  }

  appeltjeKrijgtAnderePlek() {
    model.RandomApple();
  }

  groeiLichaam() {

  }

}
