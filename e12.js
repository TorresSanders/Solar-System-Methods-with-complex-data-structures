import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  let sum = data.planets
  .reduce((acc, planet) => {
    if (planet.moonsCount) {
      return acc + planet.moonsCount;
    }
    return acc;
  }, 0);

  return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

