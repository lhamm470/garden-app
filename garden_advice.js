// Variable to hold gardening advice
let advice = "";

// Determine advice based on the season
function DetermineSeasonalAdvice() {
  // Prompt for the season
  let season = prompt("Enter a season: ");

  if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
  } else {
    advice += "No advice for this season.\n";
  }
}

// Determine advice based on the plant type
function DeterminePlantAdvice() {
  // Prompt for the plant type
  let plantType = prompt("Enter a plant type: ");

  if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
  } else {
    advice += "No advice for this type of plant.";
  }
}

// Run the functions and log generated advice to the console
DetermineSeasonalAdvice();
DeterminePlantAdvice();
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
