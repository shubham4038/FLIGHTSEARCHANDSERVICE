function compareTime(dateTime1, dataTime2){
    let depTime = new Date(dateTime1);
    let arrTime  = new Date(dataTime2);
    console.log(depTime.getTime(),arrTime.getTime());
 return depTime.getTime() < arrTime.getTime();
}

module.exports = {
    compareTime
}