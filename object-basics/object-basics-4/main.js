function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.greeting = function () {
      console.log(`Hello, ${this.name} the ${this.breed}`);
    }
  }
  
  const cat = new Cat('Bertie', 'Cymric');
  const cat2 = new Cat('Tombalacı', 'Shorthair');  