// 1. Write a function to find the perimeter of a rectangle.

const calculatePerimeter = (width, height) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(2, 10));

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console

const calculateArea = (radius) => {
  const area = Math.PI * Math.pow(radius, 2);
  return area;
};

console.log(calculateArea(1.5));

// 3. Now do the same to find the circumference of a circle

const calculateCircumference = (radius) => {
  const circumference = 2 * (Math.PI * radius);
  return circumference;
};

console.log(calculateCircumference(1.5));

const getDescription = (
  amountOfChildren,
  partnersName,
  geoLocation,
  jobTitle
) => {
  return `I am currently a ${jobTitle} living in ${geoLocation}, and married to ${partnersName} with ${amountOfChildren} kids.`;
};

console.log(getDescription(0, "Charlie", "Cheltenham", "developer"));

// Lifetime supply of snickers

const getSnickersSupply = (currentAge, amountPerDay) => {
  const maxAge = 90;
  let daysLeft = 365 * (maxAge - currentAge);
  const amountOfSnickersPerLifetime = Math.round(amountPerDay * daysLeft);
  const message = `You will need ${amountOfSnickersPerLifetime} to last you until the ripe old age of ${maxAge}`;

  return message;
};

console.log(getSnickersSupply(32, 1.5));

// Temperature Converter

const fahrenheitCalculator = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

console.log(fahrenheitCalculator(30));

// Puppy Age Calculator

const dogAgeCalculator = (age) => {
  return age * 7;
};

console.log(dogAgeCalculator(3));
