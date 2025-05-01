/**
 * @param {string} s
 * @return {boolean}
 */

let s = "({})";

var isValid = function(s) {
    let stack = []; // creating staic for checking the closing tags

    for( let i=0; i < s.length; i++ ){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            stack.push(s[i])
        }
        if(s[i] == ')' || s[i] == '}' || s[i] == ']'){
            if(stack.includes(s[stack[i]])){
                stack.pop()
            }
        }
    }

    if(stack.length == 0){
        return true
    }else{
        return false
    }
    
};

console.log(isValid(s));



// /**
//  * @param {string} s
// * @return {boolean}
// */
// /**
// * @param {string} s
// * @return {boolean}
// */
// let s = "({})";

// var isValid = function(s) {
//    let stack = [];
//    let map = {
//        ')': '(',
//        ']': '[',
//        '}': '{'
//    };

//    for (let i = 0; i < s.length; i++) {
//        let char = s[i];

      
//        if (char === '(' || char === '[' || char === '{') {
//            stack.push(char);
//        } else {
          
//            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
//                return false;
//            }
//            stack.pop();
//        }
//    }

//    return stack.length === 0;
// };

