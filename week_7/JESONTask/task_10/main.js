/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/


const gameProgress = {
    level: 5,
    score: 1500,
    livesRemaining: 3
  };

  const gameProgressjson=JSON.stringify(gameProgress)
  console.log(gameProgressjson)
  const gameProgressObject=JSON.parse(gameProgressjson)
  console.log(gameProgressObject)
  gameProgressObject.score=1500+100
  console.log(gameProgressObject)