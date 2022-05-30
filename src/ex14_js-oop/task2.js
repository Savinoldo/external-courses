class Device {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  get fullInfo() {
    return `${this.name}, ${this.energy} kw/h`;
  }
}

class СonnectedDevice extends Device {
  constructor(name, energy, connected) {
    super(name, energy);
    this.connected = connected;
  }
}

const refrigerator = new СonnectedDevice('toster', 100, 'on');
const hoover = new СonnectedDevice('hoover', 200, 'off');
const kettle = new СonnectedDevice('heater', 300, 'on');

class Room {
  items = [];

  constructor(items) {
    this.items = items;
  }

  getEnergy() {
    const total = this.items.reduce((acc, val) => acc + val.energy, 0);

    return `${Math.floor(total)} kw/h`;
  }

  searchName(name) {
    return this.items.filter(
      (dev) => dev.name.toLowerCase().search(name.toLowerCase()) !== -1,
    );
  }
}

const room = new Room([refrigerator, hoover, kettle]);
console.log(room);
