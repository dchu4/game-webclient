function GameCharacter(unitName, unitType, unitHp, unitAttack, alive, isNpc){
  this.unitName = unitName;
  this.unitType = unitType;
  this.unitHp = unitHp;
  this.unitAttack = unitAttack;
  this.alive = alive;
  this.isNpc = isNpc;

  this.act = function(){

    if(this.isNpc == false){
      button.visible = true;
      //console.log(button.visible);
    }

    if(this.isNpc == true){
      button.visble = false;
    }
    
  }
}