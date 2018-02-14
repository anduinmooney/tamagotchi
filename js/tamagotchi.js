export let tamagotchi = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didTamagotchiDie() == true) {
        clearInterval(hungerInterval);
        return "Your Tamagotchi has died!"
      }
    }, 1000);
  },



  // constructor(name) {
  //   this.name = name;
  //   this.foodLevel = 10;
  // }
  //
  // setHunger() {
  //   setInterval(() => {
  //     this.foodLevel--;
  //   }, 1000);
  // }

  didTamagotchiDie: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },

  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return 'Your Tamagotchi ate the ${food}! Food level goes up by ${amount}!'
    }
  }
};

tamagotchi.eatSmall = tamagotchi.feed(5);
