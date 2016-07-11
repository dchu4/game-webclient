var charObj;

var bootState = {
  preload: function(){

    fetch('http://localhost:3000/characters.json')
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        charObj = {
          name: data[0].character_name,
          charClass: data[0].character_class,
          charHp: 300,
          charAttack: data[0].attack,
          alive: true
        };

        game.cache.characterData = charObj;

        game.state.start('worldMap');
    });
  }
}