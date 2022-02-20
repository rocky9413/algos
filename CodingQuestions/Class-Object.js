/**
 * Create objects to model jungle
 */
class Animals {
  constructor(type, energy) {
    this.type = type;
    this.energy = energy;
  }

  sound() {
    this.energy -= 3;
    return 'making a sound';
  }

  food() {
    this.energy += 5;
    return 'eating food';
  }

  sleep() {
    this.energy += 10;
    return 'sleeping';
  }
}

class Tiger extends Animals {
  constructor(type, energy) {
    super(type, energy);
  }

  food(jungleFood) {
    if (jungleFood === 'grain') {
      return `Tigers can\'t eat grain`;
    }
    this.energy += 5;
    return 'eating food';
  }

  sleep() {
    this.energy += 5;
    return 'sleeping';
  }
}

class Monkey extends Animals {
  constructor(type, energy) {
    super(type, energy);
  }

  sound() {
    this.energy -= 4;
    return 'making a sound';
  }

  food() {
    this.energy += 2;
    return 'eating food';
  }

  play() {
    if (this.energy < 8) {
      return 'Monkey is too tired';
    } else {
      this.energy -= 8;
      return 'Oooo Oooo Oooo';
    }
  }
}

const tiger1 = new Tiger('tiger', 50);
const monkey1 = new Monkey('monkey', 50);
const snake1 = new Animals('snake', 50);

// console.log('tiger: ', tiger1.sound());
// console.log('tiger: ', tiger1.energy);
// console.log('tiger: ', tiger1.food('grain'));
// console.log('tiger: ', tiger1.energy);

// Bonus have each animal perform random activity
// jungle can perform a sound off.
// This involves all making their sound, along with reporting energy level

module.exports = {
  Animals,
  Tiger,
  Monkey,
};
