const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

const numbers = [1, 3, 7, 8, 2, 10, 4, 5, 6, 9];
let sum=0;
for(let i =0; i<numbers.length; i++){
    if(numbers[i]>5)
    {
        sum+=numbers[i];
    }

}
console.log(`Visų skaičių didesnių už penkis suma lygi ${sum}`);