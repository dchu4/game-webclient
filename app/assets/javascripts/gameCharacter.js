function GameCharacter(unitName, unitType, unitHp, unitAttack, alive, isNpc){
  this.unitName = unitName;
  this.unitType = unitType;
  this.unitHp = unitHp;
  this.unitAttack = unitAttack;
  this.alive = alive;
  this.isNpc = isNpc;

  this.act = function(){

    if(this.isNpc == false){
      attackButton.visible = true;
      //console.log(attackButton.visible);
    }
    if(this.isNpc == true){
      attackButton.visble = false;
      arrayLength = charsArray.length;

      var charIndex = Math.floor(Math.random() * arrayLength);

      charsArray[charIndex].unitHp = charsArray[charIndex].unitHp - current_unit.unitAttack;

      if(charsArray[charIndex].unitHp < 1){
        charsArray[charIndex].alive = false;
        charsArray[charIndex].unitHp = 0;
        console.log("IT attacks " + charsArray[charIndex].name);
        charText[charIndex].setText(charsArray[charIndex].name + "\n" + charsArray[charIndex].unitHp);
        deadChars.push(charsArray.splice(charIndex,1));
        deadCharText.push(charText.splice(charIndex,1));
        return;
      }

      console.log("IT attacks " + charsArray[charIndex].name);
      charText[charIndex].setText(charsArray[charIndex].name + "\n" + charsArray[charIndex].unitHp);
      //next_turn();
    }
    
  }
}