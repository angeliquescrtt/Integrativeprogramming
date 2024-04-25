const animals1 = new Set();

animals1.add("cat");
animals1.add("dog");
animals1.add("rabbit");

console.log(animals1.has("cat")); 
console.log(animals1.has('elephant')); 

animals1.forEach(animal => console.log(animal));

animals1.delete("rabbit");

console.log('Size:', animals1.size); 

animals1.clear();
console.log('Size after clear:', animals1.size); 

const animals2 = new Set(["bear", "zebra", "elephant"]);

const unionAnimals = new Set([...animals1, ...animals2]);
console.log('Union Set:', unionAnimals); 
