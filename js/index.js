class Services {
  country = "Ukraine";
  city = "Odessa";

  constructor(name, address, hours) {
    this.name = name;
    this.address = address;
    this.hours = hours;
  }

  showInfo() {
    console.log(
      `${this.name} знаходиться за адресо м. ${this.address.city}, по вулиці ${this.address.street}, будинок ${this.address.number}`
    );
  }

  workingHoursInfo() {
    console.log(
      `${this.name} працює з ${this.hours.open} по ${this.hours.close} ${this.hours.days}`
    );
  }

  timeMinytes(time) {
    let [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  }

  isOpen(typeHours = null) {
    let now = typeHours
      ? this.timeMinytes(typeHours)
      : this.timeMinytes(new Date().toTimeString().slice(0, 5));

    let openTime = this.timeMinytes(this.hours.open);
    let closeTime = this.timeMinytes(this.hours.close);

    return now >= openTime && now <= closeTime;
  }
}

// --------------------- CarServices ---------------------

class CarServices extends Services {
  constructor(name, address, hours, service, price, invalid, towTruck) {
    super(name, address, hours);
    this.service = service;
    this.price = price;
    this.invalid = invalid;
    this.towTruck = towTruck;
  }

  iPrice() {
    for (let i = 0; i < this.service.length; i++) {
      console.log(
        `Вартість послуги ${this.service[i]} - ${this.price[i]} гривень.`
      );
    }
  }

  invalidPrice() {
    for (let i = 0; i < this.service.length; i++) {
      console.log(
        `${this.service[i]} - ${this.price[i] * this.invalid} гривень.`
      );
    }
  }

  serviceInfo(typeHours = null) {
    if (this.isOpen(typeHours)) {
      console.log(
        `${this.name} обслуговує ваші автомобілі з ${this.hours.open} по ${this.hours.close}`
      );
      this.iPrice();
    } else {
      console.log(
        `${this.name} зараз зачинено, поза робочий час подвійний тариф.`
      );
      this.invalidPrice();

      if (this.towTruck.available) {
        console.log(
          `У критичних випадках надаємо послуги евакуатора за ${this.towTruck.price} гривень.`
        );
      }
    }
  }
}

const carServiceServices = new CarServices(
  "Dolinskiy mechanic",
  { city: "Odessa", street: "Odeska", number: 51 },
  { open: "09:00", close: "20:00", days: "every day" },
  ["oil change", "diagnostics", "brake inspection"],
  [550, 450, 350],
  2,
  { available: true, price: 250 }
);

carServiceServices.serviceInfo("04:00");

// --------------------- PostOffice ---------------------

class PostOffice extends Services {
  sendMessage() {
    console.log(`${this.name} відправляє ваші листи по всьому світу.`);
  }
}

const postOfficeServices = new PostOffice(
  "Post office",
  { city: "Odessa", street: "Deribasovskaya", number: 12 },
  { open: "08:00", close: "18:00", days: "every day" }
);

postOfficeServices.showInfo();
postOfficeServices.workingHoursInfo();
postOfficeServices.sendMessage();

// // 1.  Пошта.

// let postOffice = {
//   name: "Post office",
//   address: {
//     city: "Odessa",
//     street: "Deribasovskaya",
//     number: 12,
//   },
//   "working hours": {
//     open: "08:00",
//     close: "18:00",
//     days: "evry day",
//   },

//   showInfo() {
//     console.log(
//       `${this.name} знаходиться за адресо м. ${this.address.city}, по вулиці ${this.address.street}, будинок ${this.address.number}`
//     );
//   },

//   workingHoursInfo() {
//     console.log(
//       `${this.name} працює з ${this["working hours"].open} по ${this["working hours"].close} ${this["working hours"].days}`
//     );
//   },
// };
// postOffice.showInfo();
// postOffice.workingHoursInfo();

// // 2. Автостанція.

// let busStation = {
//   name: "Privoz",
//   platforms: 7,
//   direction: ["Odessa", "Lviv", "Kharkiv", "Dnipro"],
//   address: {
//     street: "Kanatnaya",
//     number: 45,
//     city: "Odessa",
//   },
//   reservation() {
//     console.log(
//       `Ваш автобус відправляється з платформи №${this.platforms} та рухаэться в напрямку ${this.direction[0]}, ${this.direction[2]}`
//     );
//   },
// };
// busStation.reservation();

// // 3. Автозаправка.
// let gasStation = {
//   name: ["Укрнафта", "OKKO", "WOG"],
//   fuelTypes: ["А-95", "ДП", "А-92"],
//   price: [58, 52, 52],
//   refuel(fuelType) {
//     let index = this.fuelTypes.indexOf(fuelType);
//     if (index !== -1) {
//       console.log(
//         `Вартість за літр пального ${fuelType} на заправці ${this.name[0]} становить ${this.price[index]} гривень за літир.`
//       );
//     } else {
//       console.log(`Вибачте, такого типу пального немає на заправці.`);
//     }
//   },
// };
// gasStation.refuel("ДП");

// // 4. Автомобіль.

// let car = {
//   brand: "BMW",
//   model: "X5",
//   color: "gray",
//   speed: "50 km/h",
//   drive(accelerate) {
//     this.speed = accelerate;
//     console.log(
//       `Автомобіль ${this.brand} ${this.model} їде зі швидкістю понад ${this.speed}`
//     );
//   },
// };
// car.drive("120 km/h");

// // 5. Поліція.

// let policeStation = {
//   name: "post police",
//   patrolCars: 2,
//   speed: "50 km/h",
//   "max speed": "70 km/h",
//   fine(fineAmount) {
//     let speedValue = parseInt(this.speed);

//     if (speedValue >= parseInt(this["max speed"])) {
//       console.log(`Штраф за перевищення швидкості: ${fineAmount} гривень.`);
//     } else {
//       console.log(`Штраф не виписано, тому що Ви розумніший за поліцейського!`);
//     }
//   },
// };
// policeStation.fine(340);

// // 6. Автосервіс. ПИТАННЯ!!!

// let carService = {
//   name: "Dolinskiy mechanic",
//   service: ["oil change", "diagnostics", "brake inspection"],
//   price: [550, 450, 350],
//   "tow truck": {
//     available: true,
//     price: 250,
//   },
//   hours: {
//     open: "09:00",
//     close: "20:00",
//   },
//   serviceInfo(typeHours) {
//     let iPrice = () => {
//       for (let i = 0; i < this.price.length; i++) {
//         console.log(
//           `Вартість послуги ${this.service[i]}: ${this.price[i]} гривень.`
//         );
//       }
//     };
//     if (typeHours === this.hours.open || typeHours === this.hours.close) {
//       console.log(
//         `${this.name} обслуговує ваші автмоблі з ${this.hours.open} по ${this.hours.close}`
//       );
//     } else if (
//       typeHours !== this.hours.open ||
//       typeHours !== this.hours.close
//     ) {
//       console.log(
//         `${
//           this.name
//         } зараз зачинено, але за необхідність поза робочий час ${iPrice()} подвійний тариф.`
//       );
//     } else {
//       console.log(
//         `У критичних випадках налаємо послуги евакуатора за ${this["tow truck"].price} гривень.`
//       );
//     }
//   },
// };
// carService.serviceInfo("08:00");

// // 7. Світлофор.

// let trafficLight = {
//   colors: ["red", "yelloy", "green"],
//   signal(color) {
//     if (color === this.colors[0]) {
//       console.log(`Колір ${this.colors[0]} зупинись!!!`);
//     } else if (color === this.colors[1]) {
//       console.log(`Колір ${this.colors[1]} готуйся!!`);
//     } else if (color === this.colors[2]) {
//       console.log(`Колір ${this.colors[2]} СТАРТУЙ`);
//     } else {
//       console.log(`Роби що хочешь`);
//     }
//   },
// };
// trafficLight.signal();

// // 8. Дурень на дорозі

// let foolOnTheRoad = {
//   name: "Дурень",
//   action: "перебігає",
//   location: "по пішоходному переході",
//   foolRun() {
//     let runAction = "будь де";
//     if (this.action == runAction) {
//       console.log(`не заважай дурню`);
//     } else if (this.location == runAction) {
//       console.log(`пропусти дурня`);
//     }
//   },
// };

// foolOnTheRoad.foolRun();

// // 9. Велосипедист.

// let cyclist = {
//   name: "Vasya",
//   activity: "катається",
//   speed: "20 km/h",
//   location: "по пішоходному переході",
//   ride() {
//     if (this.location === "по пішоходному переході") {
//       console.log(
//         `То вирогідність того що ${this.name} зі швидкістю ${this.speed} може збити пішохода велика.`
//       );
//     } else {
//       console.log(`${this.name} рухається безпечно.`);
//     }
//   },
// };

// cyclist.ride();

// // 10. Маршрутка.

// let minibus = {
//   routeNumber: 12,
//   route: [],
// };
