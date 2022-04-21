
let monthNum 

try { let month = 'june'
monthNum = getMonthNum(month)
} catch(error){

    console.error(error)
    monthNum = null
}


try {
    monthName = getMonthName(myMonth)
} catch (error){
    monthName = "bad input no such month"
    console.log('unknown month!' + error)
}