let month=prompt('Hãy nhập 1 tháng=: ')
if(month>=1&&month<=3){
    console.log('Tháng bạn đã nhập là mùa Xuân...')
}

else if(month>=4&&month<=6){
    console.log('Tháng bạn đã nhập là mùa Hạ...')
}

else if(month>=7&&month<=9){
    console.log('Tháng bạn đã nhập là mùa Thu...')
}

else if(month>=10&&month<=12){
    console.log('Tháng bạn đã nhập là mùa Đong...')
}
else{
    console.log('Tháng bạn nhập không đúng !!! Vui lòng nhập lại !!!')
}