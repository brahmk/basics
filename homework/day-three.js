// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

// Extra for experts: 
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either 
//  "A," "B," "C," "D," or "F." Call that function for a few different scores and log the result to make sure it works.





let hash = ''
for (let i = 0; i < 5; i++){
hash = hash + '#'
console.log(hash)

}
console.




function assignGrade(score){
   
    if (score < 60)  'F'
    else if (70 > score )  'D'
    else if (80 > score )  'C'
    else if (90 > score )  'B'
    else if (score >=90)  'A'

}

console.log(assignGrade(95))
console.log(assignGrade(55))

