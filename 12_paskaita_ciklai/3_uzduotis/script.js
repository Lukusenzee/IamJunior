let people = [ 
	{ name: 'Alice', age: 25, validResidence: true },
	{ name: 'Bob', age: 17, validResidence: true },
	{ name: 'Charlie', age: 30, validResidence: false },
	{ name: 'John', age: 13, validResidence: true },
	{ name: 'Amy', age: 24, validResidence: true }
];

const canVote = [];
const cantVote = [];
const canVote1 = [];
const cantVote1 = [];

for (let i = 0; i < people.length; i++) {
    (people[i].validResidence=true && people[i].age>=18)?canVote1.push(i):cantVote1.push(i);
    
    
}
people.map(item=>{
    (item.validResidence==true&& item.age>=18)?canVote.push(item):cantVote.push(item);
})
console.log("Cant vote");
for(let i=0; i<cantVote1.length; i++){
    console.log(cantVote[i].name);
}
console.log("Can vote")
for(let i=0; i<canVote1.length; i++){
    console.log(canVote[i].name);
}