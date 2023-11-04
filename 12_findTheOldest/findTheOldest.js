const findTheOldest = function(people) {
    const result = people.sort((person1, person2) => {
        let age1 = (person1.yearOfDeath || new Date().getFullYear()) - person1.yearOfBirth;
        let age2 = (person2.yearOfDeath || new Date().getFullYear()) - person2.yearOfBirth;
        if (age1 > age2){
            return -1;
        } else if(age1 < age2){
            return 1;
        }
        return 0;
    });
    return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
