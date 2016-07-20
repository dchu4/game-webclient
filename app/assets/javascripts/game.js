var game = new Phaser.Game(800,640,Phaser.AUTO, 'gameCanvas');

//game.state.add('main', main);
game.state.add('bootState', bootState);
game.state.add('inventoryState', inventoryState);
game.state.add('worldMap', worldMap);
game.state.add('loseState', loseState);
game.state.add('battleState', battleState);
game.state.add('dungeonOneState', dungeonOneState);
game.state.add('dungeonTwoState', dungeonTwoState);
game.state.add('dungeonThreeState', dungeonThreeState);

game.state.start('bootState');
//game.state.start('worldMap');