class restaurantManage {
  // 1st task

  restaurantList = [
    { id: 1, restaurantName: "KFC", adress: "Anand Vihar", city: "delhi" },

    { id: 2, restaurantName: "Domino", adress: "Savita Vihar", city: "delhi" },

    {
      id: 3,
      restaurantName: "Burger King",
      adress: "Civil lines",
      city: "pune",
    },

    { id: 4, restaurantName: "Subway", adress: "Cantonment", city: "mumbai" },
  ];

  printAllRestaurantNames = () =>
    this.restaurantList.map((restaurant) => restaurant.restaurantName); // 2nd task

  filterRestaurantByCity = (city) =>
    this.restaurantList.filter((cityByName) => cityByName.city == city); // 3rs task
}

const restaurantObject = new restaurantManage();

console.log(restaurantObject.printAllRestaurantNames());

console.log(restaurantObject.filterRestaurantByCity("delhi"));

/* --------------------------------------------------------------------------------------------------------------- */

orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

const value = Object.values(orderData);

const totalOrders = value.reduce((prev, next) => prev + next);

console.log("Total number of ordered placed =", totalOrders);

const key = Object.keys(orderData);

console.log("Total number of order proportion =", key.length);

let arr = [];

const arrayOfObject = key.map((item, index) => {
  const obj = {
    id: index + 1,
    order: item,
    "order percentage": ((orderData[item] / totalOrders) * 100).toFixed(2),
    restaurant: "punjabi tadka",
  };

  arr.push(obj);
});

console.log(arr);
