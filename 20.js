/**
 * @param {string} s
 * @return {boolean}
 */

let s = "()";

var isValid = function(s) {

    for( let i=0; i < s.length; i++ ){
        let stack = []; // creating staic for checking the closing tags
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            stack.push(s[i])
        }
        if(s[i] == ')' || s[i] == '}' || s[i] == ']'){
            stack.pop()
        }
    }

    
};

console.log(isValid(s));