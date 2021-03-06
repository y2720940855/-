//求任意个数字的平均值
const mean1 = (...numbers) => {
    let Mean = numbers.length;
    let sum = 0;
    for(const num of numbers) {
        sum += num;
    }
    let Avg = sum / Mean;
    console.log(Avg);
}
mean1(1,2,3,4,5,6,7);

//使用reduce()
const mean2 = (numbers) => {
    let Mean = numbers.length;
    let Avg = numbers.reduce((numbers, sum) => numbers + sum) / Mean;
    return Avg;
}
console.log(mean2([1,2,3,4,5,6,7]));

//偶数平均数
const asd = [];//存储偶值
const mean2 = () => {
    let Mean = asd.length;
    let Avg = asd.reduce((asd, sum) => asd + sum) / Mean;
    console.log(Avg);
}

const mean3 = (arr1, callback) => {
    const arr2 = arr1.map((sum) => {
        if(sum % 2 == 0){
            return sum;
        }
    })

    //const asd = [];
    arr2.forEach(
        item => {
            if(item){
                asd.push(item)
            }
        }
    )
    if(typeof (callback) === "function"){
        callback()
    }
}
mean3([1,2,3,4,5,6,7], mean2)