class Model {

  grid = [];

  constructor() {
    this.grid = [];
    this.InitializeGrid();
    this.InitializeWalls();
    this.RandomApple();

    this.grid[slang.x][slang.y] = GridObjects.SLANGEN_HOOFD;
  }

  InitializeWalls(){
    for (var row = 0; row < Vakjes; row++) {
      for (var column = 0; column < Vakjes; column++)
      {
        if (row == 0 || row == Vakjes - 1)
          this.grid[row][column] = GridObjects.MUUR;

        if (column == 0 || column == Vakjes - 1)
          this.grid[row][column] = GridObjects.MUUR;

      }
    }
  }

  InitializeGrid() {
    for (var row = 0; row < Vakjes; row++) {
      this.grid.push([]);
    }

    for (var row = 0; row < Vakjes; row++) {
      for (var column = 0; column < Vakjes; column++) {
        this.grid[row].push(GridObjects.NIETS);
      }
    }
  }

  RandomApple(){
    var i = Math.floor (Math.random() * (Vakjes -2) ) + 1;
    var j = Math.floor (Math.random() * (Vakjes -2) ) + 1;

    this.grid[i][j] = GridObjects.APPELTJE;
  }

  update() {

  }
}
