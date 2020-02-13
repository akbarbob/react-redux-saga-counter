function* hello(){
    yield 1;
    yield 2;
    yield 3;
}

const a=hello();

console.log(a.next())
console.log(a.next())
console.log(a.next())