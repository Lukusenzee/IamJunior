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
    (people[i].validResidence=true)?canVote1.push(i):cantVote1.push(i);
    
    
}
people.map(item=>{
    item.validResidence==true?canVote.push(item):cantVote.push(item);
})
console.log(canVote1);
console.log(cantVote1);