const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  }],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    const player = {
      firstName,
      lastName,
      age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  }
}

// for Players
console.log(team.players);
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);

// for Games
console.log(team.games);
team.addGame('Brazil', 5, 4);
team.addGame('Germany', 7, 7);
team.addGame('France',4,5);
console.log(team.games);