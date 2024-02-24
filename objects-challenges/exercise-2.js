//                                   Factory and Construction Functions

let address = createAddress ('Kaloleni', 'Arusha', 228013);
console.log(address);


// Factory Function

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}


// Constructor Function 

function Address (street, city, zipcode){
  this.street = street;
  this.city = city;
  this.zipCode = zipcode;
}

let address2 = new Address('Ilala', 'Daressalaam', 122586);
console.log(address2);