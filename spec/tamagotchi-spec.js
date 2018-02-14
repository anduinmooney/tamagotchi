import { tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let fuzzy = tamagotchi;

  beforeEach(function(){
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.name = "Fuzzy";
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function(){
    fuzzy.foodLevel = 0;
    expect(fuzzy.didTamagotchiDie()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function(){
    jasmine.clock().tick(10001);
    expect(fuzzy.didTamagotchiDie()).toEqual(true);
  });
  // 
  // it('should return that the tamagotchi ate Tama-Berries and the food level should go up by 5', function() {
  //   expect(fuzzy.eatSmall("Tama-Berries")).toEqual("Your Tamagotchi ate the Tama-Berries! Food level goes up 5!");
  //   expect(fuzzy.foodLevel).toEqual(15);
  // });



  // it('should have a food level of ten if it is fed', function(){
  //   jasmine.clock().tick(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });
});
