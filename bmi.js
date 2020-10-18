//1.变量存储Mark和John的体重以及身高
markMass = 60,markHeight = 175;
johnMass = 58,johnHeight = 176;
//2. 计算二人的BMI
markBMI = markMass/(markHeight*markHeight);
johnBMI = johnMass/(johnHeight*johnHeight);
console.log("markBMI: " + markBMI, "johnBMI: " + johnBMI + ". ");
//3.布尔变量包含Mark的BMI是否比John更高
BMI = (johnBMI > markBMI) ? "john更高" : "mark更高";
//4.打印输出
console.log(BMI);