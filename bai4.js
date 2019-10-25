let number=prompt('Enter a number ')
let list=number.split(" ")
let sum=0
console.log('Enter a list of numbers:' ,list)
for(let i=0;i<list.length;i++)
{
    sum=Number(sum)+Number(list[i])
}
console.log('Sum of all entered numbers: ',sum)

