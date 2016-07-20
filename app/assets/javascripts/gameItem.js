function GameItem(itemName, itemType,cureStatus,attack,defense,magicAttack, magicDefense, recoveryAmount, isEquipped, quantity, itemId){
  this.itemType = itemType;
  this.itemName = itemName;
  this.cureStatus = cureStatus;
  this.attack = attack;
  this.defense = defense;
  this.magicDefense = magicDefense;
  this.magicAttack = magicAttack;
  this.recoveryAmount = recoveryAmount;
  this.isEquipped = isEquipped;
  this.quantity = quantity;
  this.itemId = itemId;
}