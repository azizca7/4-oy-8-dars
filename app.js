// =================
// 1-misol:
// Yangi obyekt yarating. Unga "name", "age" va "location" kabi xususiyatlarni qo'shing. Keyin, obyektning qiymatlarini konsolda ko'rsating.

const user = {};

user.name = "Olim";
user.age = 32;
user.location = "Toshkent";

console.log(user.name, user.age, user.location);

// =================
// 2-misol:
//  Obyekt ichida boshqa obyekt yarating. Masalan, "address" obyektini asosiy obyektda joylashtiring, unda "city" va "zipCode" kabi xususiyatlar bo'lsin.

const user2 = {
  name: "Abumannon",
  age: 16,
  adress: {
    city: "Kokand",
    zipCode: "1234",
  },
};

console.log(user2.name, user2.age, user2.adress.city, user2.adress.zipCode);

// =================
// 3-misol:
// Biror obyektda mavjud bo'lgan xususiyatni o'zgartirish, yangi xususiyat qo'shish va xususiyatni o'chirish vazifasini bajaring.
const user3 = {
  name: "Abumannon",
  age: 16,
  adress: {
    city: "Kokand",
    zipCode: "1234",
  },
};
console.log(user3.name, user3.age, user3.adress.city, user3.adress.zipCode);

user3.age = 18;
console.log(user3.name, user3.age, user3.adress.city, user3.adress.zipCode);

user3.phone = "xs";
console.log(
  user3.name,
  user3.age,
  user3.adress.city,
  user3.adress.zipCode,
  user3.phone
);

delete user3.adress.zipCode;
console.log(
  user3.name,
  user3.age,
  user3.adress.city,
  user3.adress.zipCode,
  user3.phone
);

// =================
// 4-misol:
//  Ushbu obyetkdan home va work qiymatlarini destructuring orqali oling.

const user4 = {
  name: "Toshpo'lat",
  age: 30,
  address: {
    city: "Tashkent",
    street: "Amir Temur Street",
    zipCode: 100000,
  },
  contact: {
    email: "ulugbek@example.com",
    phone: {
      home: "123-4567",
      work: "765-4321",
    },
  },
};

const {
  contact: {
    phone: { home, work },
  },
} = user4;

console.log(home);
console.log(work);


// =================
// 5-misol:
// .?  optional chainning nima uchun kerakligi haqida 3 ta sabab yozing. 

// 1-Xatoliklarni oldini olish undefined 
// ichma - ich ishlashni osonlashtiradi
// code ni ixcham va toza usulda qilishga yordam beradi.