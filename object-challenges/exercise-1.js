let address = {
  street: 'kariakoo',
  city: 'darEsSalaam',
  zipCode: 11106
};

function showAddress(address) {
  for (let key in address) {
    console.log(`${key}: ${address[key]}`);
  }
}

showAddress(address);