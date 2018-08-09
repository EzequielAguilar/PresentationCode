  // We can also assign where the enum is going to start
  enum ListOfColors {
    BLUE = 8,
    RED,
    YELLOW
  }

  console.log(ListOfColors);
  
  let whatnumberisyellow = ListOfColors.YELLOW;
  console.log(whatnumberisyellow);

  let red = ListOfColors[9];
  console.log(typeof red);
