/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  if (!data.asteroids || data.asteroids.length === 0) {
    return undefined; 
  }
  let discoveryCounts = {}; 

  for (let i = 0; i < data.asteroids.length; i++) {
    const asteroid = data.asteroids[i];
    if (asteroid.discoveryYear) {
      discoveryCounts[asteroid.discoveryYear] = (discoveryCounts[asteroid.discoveryYear] || 0) + 1;
    }
  }; 
  console.log(discoveryCounts);

  let maxDiscoveryYear = Object.keys(discoveryCounts).reduce((maxYear, currentYear) => {
    return discoveryCounts[currentYear] > discoveryCounts[maxYear] ? currentYear : maxYear;
  }, Object.keys(discoveryCounts)[0]);

  return parseInt(maxDiscoveryYear); 
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// export function getGreatestDiscoveryYear(data) {
//   let rocks = data.asteroids
//   .filter(asteroid => {
//     if (asteroid.discoveryYear) {
//       let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === max) {
//           return discoveryYear;
//         }
//       } rocks.push(discoveryYear);
//     }
//   }); 
//    return rocks;
// }