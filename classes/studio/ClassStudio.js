//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
     };

     addScore(newScores){
        this.scores.push(newScores);
     };

     averageScore(){
        let sum= 0;
        for (let i = 0; i < this.scores.length; i ++);
        sum += this.scores[i];
    };

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

    candidateStatus() {
        let avg = this.averageScore();
        if (avg >= 90){
            return "Accepted"
        }
        else if (avg >= 80){
            return "Reserve"
        }
        else if (avg >= 70){
            return "Probationary"
        }
        else{
            return "Rejected"
        }
    };

}

    //Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
    let reserveCount = 0
    while (gladGator.candidateStatus() !== "Reserve"){
        gladGator.addScore(100);
    }





let bubbaBear= new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese= new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator= new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

bubbaBear.addScore(83);
console.log(bubbaBear)

console.log('${this.crewCandidate} earned an average test score of ${}% and has a status of ${}.')



