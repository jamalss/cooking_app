var convertLitresToGallons = function(amountInLitres) {
  return (0.264172) * amountInLitres;
};

var amountInLitres = parseInt(prompt("Enter amount in Litres: "));
var result = convertLitresToGallons(amountInLitres);
alert(result + " Gallons");

var convertKilometreToMetre = function(amountInKilometre) {
  return amountInKilometre * 1000;
};

var amountInKilometre = parseInt(prompt("Enter your amount in Kilometres: "));
var result = convertKilometreToMetre(amountInKilometre);
alert(result + " Metres");

var convertMetreToKilometre = function(amountInMetre) {
  return amountInMetre * 0.001;
};

var amountInMetre = parseInt(prompt("Enter your Metre value: "));
var result = convertMetreToKilometre(amountInMetre);
alert(result + " Kilometres");
