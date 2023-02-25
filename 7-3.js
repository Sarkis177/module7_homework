// Первый вариант
function func() {};
let emptyObject = new func();

console.log(emptyObject)

// Второй вариант
function emptyObject2() {
    let createObject = Object.create(null);
    return createObject
};

console.log(emptyObject2())

