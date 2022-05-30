function VacuumCleaner(power, turnOn, cleaningMode) {
  this.power = power;
  this.turnOn = turnOn;
  this.cleaningMode = cleaningMode;

  this.setOn = function () { //eslint-disable-line
    this.turnOn = true;
    return this;
  };

  this.setOf = function () { //eslint-disable-line
    this.turnOn = false;
    return this;
  };

  this.changeCleaningMode = function (mode = 'dry') { //eslint-disable-line
    this.cleaningMode = mode;
    return this;
  };

  this.getInfo = function () { //eslint-disable-line
    console.log(`Мощность: ${this.power};\nРежим уборки: ${this.cleaningMode}`);
  };
}

function RobotCleaner(map, ...args) {
  VacuumCleaner.apply(this, [...args]);
  this.map = map;

  this.scan = function () { //eslint-disable-line
    this.map = true;
    return this;
  };

  const parentsGetInfo = this.getInfo;
  this.getInfo = function () { //eslint-disable-line
    parentsGetInfo.call(this);
    console.log(`Карта: ${this.map}`);
  };
}

function RobotSoldier(isFire, ...args) { //eslint-disable-line
  RobotCleaner.apply(this, [...args]);
  this.isFire = isFire;

  this.setFireOn = function () { //eslint-disable-line
    this.isFire = true;
    return this;
  };

  this.setFireOff = function () { //eslint-disable-line
    this.isFire = false;
    return this;
  };

  this.statusOfFire = function () { //eslint-disable-line
    return this.isFire;
  };

  const parentsGetInfo = this.getInfo;
  this.getInfo = function () { //eslint-disable-line
    parentsGetInfo.call(this);
    console.log(`Стреляет: ${this.isFire}`);
  };
}
