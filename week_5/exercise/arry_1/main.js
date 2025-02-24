/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

const teamMembers=['John', 'Emily', 'Mike', 'Sarah']

teamMembers.forEach(teamMember=>console.log(teamMember))
console.log(teamMembers.shift())
 
console.log(teamMembers)
teamMembers.shift()
console.log(teamMembers)
teamMembers.pop()
console.log(teamMembers)
teamMembers.push('John', 'Emily')
console.log(teamMembers)
teamMembers.unshift("Alex")
console.log(teamMembers)
teamMembers.push("Linda")
console.log(teamMembers)
const subteam=teamMembers.slice(0,3)
console.log(teamMembers)
console.log(subteam)
const newsubTeam=teamMembers.slice(2,5)
console.log("team:",teamMembers)
console.log("subteam:",subteam)
console.log("New subteam:",newsubTeam)
console.log(teamMembers.indexOf("Mike"))
console.log(teamMembers.indexOf("Jake"))

teamMembers.splice(1,1,"Carol","Bruce")
console.log(teamMembers)
const newTeammember = [...teamMembers,"Bob"]
console.log(newTeammember)
const newTeammember2=teamMembers.slice(0,9)
console.log(newTeammember2)
console.log(teamMembers)
console.log(newTeammember)
const pearteam=[...teamMembers,...newTeammember,...newTeammember2]
console.log(pearteam)
const newMembers=["Tina","Dean"]
const margeTeam=[...teamMembers,...newMembers]
console.log(margeTeam)
const margeteam2=teamMembers.concat(margeTeam)
console.log(margeteam2)
console.log(teamMembers.indexOf("John"))
teamMembers.push("John","John","John")
console.log(teamMembers)
// 13 using foreach
const johnIndex=[]

teamMembers.forEach((member,index)=>{

    if (member==="John"){johnIndex.push(index)

    }
})
console.log(johnIndex)

// 14

const upperCaseName= teamMembers.map(upName=>upName.toUpperCase())
console.log(upperCaseName)
const teamAssort = teamMembers.sort()
console.log(teamAssort)
console.log(teamMembers)
console.log(teamMembers.reverse())
const johnPresence= teamMembers.some(mamber=> mamber==="John")
console.log(johnPresence)


const threeCharacter= teamMembers.every(threecar=> threecar.length >= 3)
console.log(threeCharacter)