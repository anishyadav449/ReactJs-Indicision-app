const add = (a,b) =>  {
   // console.log(arguements);
    return a + b ;

};

console.log(add(55,1,1001));

const user = {
    name: 'anish',
    cities:['chandigarh','amritsar','panchkula'],
    printPlacesLived() {
        
     
    return this.cities.map( (city) => this.name + ' has lived in ' + city);
         //console.log(this.name + ' has lived in ' + city);
     
    }
    
};
console.log(user.printPlacesLived());


const multiplier = {
    number:[10,20,30],
    multiplyBy:[3],
    multiply()
{
    return this.number.map( (number) => this.multiplyBy * number  );
}


};

console.log(multiplier.multiply());