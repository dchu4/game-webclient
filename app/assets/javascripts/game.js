var game = new Phaser.Game(800,608,Phaser.AUTO, 'canvasDiv');

//game.state.add('main', main);
game.state.add('worldMap', worldMap);
game.state.add('battleState', battleState);

game.state.start('worldMap');