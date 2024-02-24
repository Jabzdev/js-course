//                                           Address Object

// street
// city
// zipcode
// showAddress(address)

let address = {
  street: 'south C',
  city: 'Nairobi',
  zipcode: 11567
};

function showAddress(address) {
  for(let key in address) {
    console.log(`${key}: ${address[key]}`);
  }
}

showAddress(address);