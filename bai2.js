let list=[5,10,15,20,25]
let number=prompt('Enter o number:  ')
let a=0
for(let i=0;i<list.length;i++)
{
    if(number==list[i])
    {
        console.log('Found, position ',i)
        a++
    }
}
if(a==0){
    console.log('Not found in our list')
}