const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, ${this.name} the ${this.breed}`);
    }
};

const cat2 = {
    name : 'Tombalacı',
    breed : 'British shorthair',
    color : 'grey',
    greeting: function() {
      console.log(`Hello, ${this.name} the ${this.breed}`);
    }
};