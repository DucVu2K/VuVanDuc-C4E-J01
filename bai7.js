let a,b,c,delta 
a=prompt("Nhập a: ")
b=prompt("Nhập b: ")
c=prompt("Nhập c: ")


delta=(b*b)-(4*a*c)

if(delta>0){
    console.log('Phuong trinh co 2 nghiem: ')
    console.log('X1 =',(-b+Math.sqrt(delta))/2*a)
    console.log('X2 =',(-b-Math.sqrt(delta))/2*a)
}
else if(delta==0){
    console.log('Phuong trinh co 2 nghiem kep: ')
    console.log('X1=X2=',-b/(2*a))
}
else if(delta<0){
    console.log('Phuong trinh vo nghiem!!')
}