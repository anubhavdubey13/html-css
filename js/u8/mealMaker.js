const menu = {
  _courses: {
    _appetizers: [],
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(a) {
      this._appetizers.push(a);
    },
    _mains: [],
    get mains() {
      return this._mains;
    },
    set mains(m) {
      this._mains.push(m);
    },
    _desserts: [],
    get desserts() {
      return this._desserts;
    },
    set desserts(d) {
      this._desserts.push(d)
    }
  },
  get courses() {
    return {
      appetizers: this._courses._appetizers,
      mains: this._courses._mains,
      desserts: this._courses._desserts
    }
  },
  addDishToCourse: function (courseName, dishName, price){
    const dish = {
      name: dishName,
      price: price
    };
    //console.log(dish);
    if (courseName === 'appetizers'){
      this._courses.appetizers = dish;
    } else if (courseName === 'mains'){
      this._courses.mains = dish;
    } else if (courseName === 'desserts'){
      this._courses.desserts = dish;
    }
    //this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    var dishes = this._courses[courseName];
    var ranInd = Math.floor(Math.random()*dishes.length);
    return dishes[ranInd];
  },
  generateRandomMeal: function (){
    var ap = this.getRandomDishFromCourse('appetizers');
    var ma = this.getRandomDishFromCourse('mains');
    var de = this.getRandomDishFromCourse('desserts');
    var totPrice = ap['price'] + ma['price'] + de['price'];
    var gRM = [ap['name'], ma['name'], de['name']];
    return `Meal: ${gRM}. Bill: ${totPrice}`;
  }  
};

//appetizers
menu.addDishToCourse('appetizers','Hoga Kuch', 140);
menu.addDishToCourse('appetizers','Pta Nahi', 100);
menu.addDishToCourse('appetizers','Satvik Ladka', 170);
//mains
menu.addDishToCourse('mains','Veg', 500);
menu.addDishToCourse('mains','Non-Veg', 750);
menu.addDishToCourse('mains','Vegan', 970);
// desserts
menu.addDishToCourse('desserts','ice cream', 100);
menu.addDishToCourse('desserts','choco cream', 150);
menu.addDishToCourse('desserts','ice', 70);

var meal = menu.generateRandomMeal();
console.log(meal);
//console.log(menu._courses._desserts);
//console.log(menu.getRandomDishFromCourse('desserts')['name']);
//console.log(menu._courses._appetizers)
/*,
    mains: [],
    get mains() {
      return this.mains;
    },
    set mains(m) {
      this.mains = m;
    },
    desserts: [],
    get desserts() {
      return this.desserts;
    },
    set desserts(d) {
      this.desserts.push(d);
    },
    ,
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
      var dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName](dish);
    }
  }*/