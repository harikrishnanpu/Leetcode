func1(1)(1)(1)(0)



function outer1() {
  let arrFn = [];
  let i;
  for (i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      console.log(i);
    });
  }
  return arrFn;
}
let arrFn1 = outer1();
arrFn1[0]();
arrFn1[1](); 
arrFn1[2]();



const thanos = {
  name: 'THANOS',
  snap: function () {
    return `${this.name} snapped the finger and half of the universe ${
      this.name === 'THANOS' ? 'disappeared' : 'came back'
    }`;
  },
};


// POLYFILL
// CALLBACK HELL
// PROMISE


Promise.resolve(1)
  .finally((data) => {
    console.log(data);
    return Promise.reject('error');
  })
  .catch((error) => {
    console.log(error);
    throw 'error2';
  })
  .finally((data) => {
    console.log(data);
    return Promise.resolve(2).then(console.log);
  })
  .then(console.log)
  .catch(console.log);
  
  
  
  
  const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.reject(4);

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2]);
  const group2 = await Promise.all([promise3, promise4]);
  return [group1, group2];
};

promiseAll().then(console.log).catch(console.log);



