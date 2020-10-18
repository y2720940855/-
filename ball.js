 //创立数组存放得分
 var johnScore = [89,120,103]
 var markScore = [116,94,123]
 var maryScore = [115,95,123]
 //计算双方平均分平均分
 var score1 = 0
 var score2 = 0
 var score3 = 0
 for(var i=0; i<johnScore.length;i++){  
    score1=score1+johnScore[i]  
 } 
 for(var j=0; j<markScore.length;j++){  
    score2=score2+markScore[j]  
 } 
 for(var k=0; k<maryScore.length;k++){  
    score3=score3+maryScore[k]  
 } 
 var avg1=score1/johnScore.length
 var avg2=score2/markScore.length
 var avg3=score3/maryScore.length
 console.log("john的平均分："+avg1,"mark的平均分："+avg2,"mary的平均分："+avg3)
//判断哪只队伍获胜
if (avg1 >= avg2) {
    if (avg1 = avg2){
        if (avg1 > avg3){
            console.log("john和mark获胜，分数为："+avg1)
        }
        else if (avg1 < avg3){
            console.log("mary获胜，分数为："+avg3)
        }
        else if (avg2 = avg3){
            console.log("john,mark和mary平局，分数为："+avg1)
        }
    }
    else if (avg1 > avg2){
        if(avg1 > avg3){
            console.log("john获胜，分数为："+avg1)
        }
        else if(avg1<avg3){
            console.log("mary获胜，分数为："+avg3)
        }
    }
}
else if(avg1 < avg2){
    if (avg2 <= avg3) {
        if(avg2<avg3){
            console.log("mary获胜，分数为："+avg3)
        }
        else if (avg2=avg3){
            console.log("mark和mary获胜，分数为："+avg3)
        }
    }
}
    
