const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {

    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Yoshi', 'carnivore', 25);
    dinosaur3 = new Dinosaur('T-Rex', 'omnivore', 15);
  
    park = new Park ('Loch Lomond', 30);

  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Loch Lomond');
  });

  it('should have a ticket price' , function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 30);
  });


  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to remove a dinosaur from its collection' , function() {
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.remove_dinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors' , function () {
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);
    const actual = park.find_popular_dinosaur();
    assert.deepStrictEqual(actual, dinosaur1);

  });

  it('should be able to find all dinosaurs of a particular species' , function () {
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);
    const actual = park.find_dinosaurs_particular_species('T-Rex');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
  });

  it('should be able to calculate the total number of visitors per day' , function () {
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);
    const actual = park.find_daily_visitors();
    assert.strictEqual(actual, 90);
  });

  it('should be able to calculate the total number of visitors per year' , function () {
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);

    const actual = park.calculate_yearly_visitors();
    assert.strictEqual(actual, 32850);
  });

  it('should be able to calculate total revenue for one year' , function () {
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);

    const actual = park.calculate_yearly_revenue();
    assert.strictEqual(actual, 985500);
  });

  it ('should remove all dinosaurs of a particular species' , function () {
    park.add_dinosaur(dinosaur1);
    park.add_dinosaur(dinosaur2);
    park.add_dinosaur(dinosaur3);
    park.remove_all_particular_species('T-Rex');

    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should provide an object containing diet types and the number of dinosaurs in the park of that diet type');

});
