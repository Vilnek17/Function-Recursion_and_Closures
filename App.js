let arr=[1,2,3,4,5,6,7,8,9,10];
function sum(arr) {
if (arr.length === 1){
 return arr[0];
} else {
 return arr[0] + sum(arr.slice(1));
}
}
console.log(sum(arr));

function sum(arr) {
    return arr.length === 1? arr[0] : arr[0] + sum(arr.slice(1));
}

function deepCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count++;
      if (Array.isArray(arr[i])) {
        count += deepCount(arr[i]);
      }
    }
    return count;
  }
  console.log(deepCount([]));
  console.log(deepCount([1,2,3]));
  console.log(deepCount(["x","y",["z"]]));
  console.log(deepCount([1, 2, [3, 4, [5]]]));
  console.log(deepCount([[[[]]]]));


  const employees = {
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },
    sales: {
        marketing: {
            internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Kate', salary: 1800}]
}


function sumSallary(obj){
let sum = 0;
    for(let key in obj){
        if (Array.isArray(obj[key])){
            obj[key].forEach(employee => sum += employee.salary);
        } else {
           sum+= sumSallary(obj[key]);
        }   
        }
    return sum;
  }
  function getTotalSalary(employees) {
    let sum = sumSallary(employees);
    console.log(sum);
}

getTotalSalary(employees);

let arr1=[2,15,7,3];
let arr2=[9,3,17,12,4,8];
let arr3=[6,11,16,15,11];
let totalArr=[...arr1,...arr2,...arr3];
let max = Math.max.apply(null, totalArr);
console.log(max)