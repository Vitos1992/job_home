// 1. По дорозі зустрілася пошта.

let postOffice = {
  name: "Post office",
  address: {
    city: "Odessa",
    street: "Deribasovskaya",
    number: 12,
  },
  "working hours": {
    open: "08:00",
    close: "18:00",
    days: "evry day",
  },

  showInfo() {
    console.log(
      `${this.name} знаходиться за адресо м. ${this.address.city}, по вулиці ${this.address.street}, будинок ${this.address.number}`
    );
  },

  workingHoursInfo() {
    console.log(
      `${this.name} працює з ${this["working hours"].open} по ${this["working hours"].close} ${this["working hours"].days}`
    );
  },
};
postOffice.showInfo();
postOffice.workingHoursInfo();

// 2. Автостанція.

let busStation = {
  name: "Privoz",
  platforms: 7,
  direction: ["Odessa", "Lviv", "Kharkiv", "Dnipro"],
  address: {
    street: "Kanatnaya",
    number: 45,
    city: "Odessa",
  },
  reservation() {
    console.log(
      `Ваш автобус відправляється з платформи №${this.platforms} та рухаэться в напрямку ${this.direction[0]}, ${this.direction[2]}`
    );
  },
};
busStation.reservation();

// 3. Автомобіль.

let car = {
  brand: "BMW",
  model: "X5",
  color: "gray",
  speed: "50 km/h",
  drive(accelerate) {
    this.speed = accelerate;
    console.log(
      `Автомобіль ${this.brand} ${this.model} їде зі швидкістю понад ${this.speed}`
    );
  },
};
car.drive("120 km/h");
// 4. Поліція.
