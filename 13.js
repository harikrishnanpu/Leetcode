/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = s.split('');
    let roman = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    
    let value = 0;
        

    for(let i=0; i < arr.length; i++) {
        let curr = roman[arr[i]];
        let next = roman[arr[i + 1]];
        
                if(curr < next){
                    value -= curr;
                }else{
                    value += curr;
                }
    }
    
    return value
};



console.log(romanToInt("MCMXCIV"));
