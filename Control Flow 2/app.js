let height = 150;

if (typeof height !== "number") {
  console.log("Please enter a number");
} else if (height >= 150) {
  console.log("You can go on the ride");
} else {
  console.log("Sorry, you are not tall enough for this ride");
}
