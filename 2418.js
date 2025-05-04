/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

var names = ["Mary","John","Emma"];
var heights = [180,165,170];

var sortPeople = function(names, heights) {
    let mapping = {};


    for(let i=0;i < names.length; i++){
        mapping[heights[i]] = names[i]  // mapping= { "180" : "Mary" }
    }

    heights.sort((a,b)=> b - a);

    console.log(heights);
    

    for(let i=0; i < names.length; i++){
        names[i] = mapping[heights[i]] 
    }



return names

};

console.log(sortPeople(names,heights));