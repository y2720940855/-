//创建对象
let myObject = new Object();
myObject.name = "yangzhizhuo";
myObject.age = 20;

console.log(myObject);

//通过对象自变量创建对象
const oStudent = {};
oStudent.name = 'yang';
oStudent.age = 20;

const oStudent1 = {
    name: 'zhi',
    age: 20,
};
console.log(oStudent1.name);

//array
const a1 = new Array();
const a2 =[];
console.log(a2[0]);

a2[0] = 'a';
a2[1] = 'b';
a2[5] = true;
console.log(a2);
console.log(a2[3]);

const a3 = [1,2,3,'abc',true,undefined,a2];

console.log(a2 instanceof Array);

const number1 = [1,2,3,4];
let a = number1 [0];
let b = number1 [1];
let c = number1 [2];
let d = number1 [3];
console.log(`a=${a},b=${b},c=${c}`);

const [a,b,c,d] = [1,2,3,4];
console.log(`a=${a},b=${b},c=${c}`);

const [a,b] = ['yang',true,1,2,3];
console.log(`a=${a},b=${b}`);


const av = ['a','b','c','d'];
av.pop();
console.log(av);
av.push('wo');
console.log(av);

const av = ['a','b','c','d'];
const ad = ['f','g','g','h'];
const vd = [...av,...ad];
console.log(vd);

const av = ['a','b','c','d'];
const av1 = av.join();
console.log(av1);


const av = ['a','b','c','d'];
const av3 = av.slice(1,3);
console.log(av3);

const av = ['a','b','c','d'];
const av4 = av.splice(1,3,'ni','shi');
console.log(av4);
console.log(av)

console.number2 = [1,2,3,4,5,6,7,8,9,10];
const a = number2.sort();
console.log(number2);
console.log(a);

const av = ['a','b','c','d'];
const a = av.indexOf('a');
console.log(a);

const av = ['a','b','c','d'];
const b = av.includes('a')
console.log(b)


//多维数组
const ma = [[1,2],[3,4]]
console.log(ma);
console.log(ma[0][0])
console.log(ma[0][1])

const summer = ['jun','jul','Aug']
const winter = ['de','ed','gg']
const jihe = [summer,winter]
console.log(jihe)
const jihe2 = [...summer,...winter]
console.log(jihe2)


//set
const oSet = new Set();
oSet.add(1)
oSet.add(2)
oSet.add(3)
oSet.add(4)
console.log(oSet)

const list1 = new Set(1,2,3,4)
console.log(list1)

const list2 = new Set('Hello')
console.log(list2)

const oArray1 = [1,2,3,4,5,6]
const oSet1 = new Set(oArray1)
console.log(oArray1)
const oArray2 = [...oArray1]
console.log(oArray2)

let student = {
    name:'yang',
    age:10
};

const weak = new WeakSet();
weak.add(student);
student = null;
console.log(weak.has(student));

const oMap = new Map();
oMap.set(1,'I')
oMap.set(2,'II').set(3,'III').set(4,'IV')
console.log(oMap)
console.log(oMap.size)
const a = oMap.get(4)
console.log(a)
oMap.set('name','ni')
console.log(oMap)
console.log(oMap.has('name'))
const c = oMap.delete('name')
console.log(c)


const oMap = new Map().set(1,'I').set(2,'II').set(3,'III').set(4,'IV');
const oArray = Array.from(oMap);
console.log(oArray);