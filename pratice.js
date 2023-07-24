
// Because 'this' value in arrow function is the same 'this' value of its parent scope.
// 'this' value in regular function in class is defined in run time and it's gonna be
// the instance which called the Class. 

class restaurantManager{

    
    restaurantList = [  //property
         
    {  id : 1,
       restaurantName : "KFC",
       adress : "anand vihar",
       city : "mumbai"
    
    },
    {   id : 2,
        restaurantName : "burger king",
        adress : "36 town",
        city : "delhi"
    },

    {   id : 1,
        restaurantName : "domino's",
        adress : "4d road",
        city : "ahmedabad"
    },

    {   id : 1,
        restaurantName : "pizza hunt",
        adress : "mira road",
        city : "delhi"
    }

  ]  
  
  
  // printAllRestaurantNames = () => 
  // this.restaurantList.map(restaurant => restaurant.restaurantName);  // 2nd task
   
printAllRestaurantNames = () => this.restaurantList.map((value) => value.restaurantName)

  
filterRestaurantByCity = (cityName) => this.restaurantList.filter((value) => value.city == cityName)


  
  }



let restaurantObject = new restaurantManager();

let printAllResNames = restaurantObject.printAllRestaurantNames();
console.log(printAllResNames);

let filterCity = restaurantObject.filterRestaurantByCity("delhi");

console.log(filterCity);

let orderData = { 
              'Below 500': 20, 
              '500-1000': 29, 
              '1000-1500': 30, 
              '1500-2000': 44, 
              'Above 2000': 76 
            };    
              
//a. Calculate the total number of orders placed for the restaurant?.  

// when we use object Method => it will autometically convert into array
// then we can use array method on it.

let allValues = Object.values(orderData);

let totalOrders = allValues.reduce((pre , next) => pre + next);
console.log("total order placed number is",totalOrders);

// b. Calculate the number of order proportion options.

let numOfOrderProportion = Object.keys(orderData);
console.log("total number of order numOfOrderProportion is",numOfOrderProportion.length)

//c. Calculate the percentage of each proportion in below format:

let arr = [];

let arrayOfObject = numOfOrderProportion.map((value , index) => {
      
  
 return  {

      "id":  index + 1,
     "order": value,
     "order percentage": ((orderData[value] / totalOrders) * 100).toFixed(2),
   "restaurant": "Punjabi Tadka"


  }


});

 arr.push(arrayOfObject);

console.log(arr);


// tofixed use for => 2 decimal number