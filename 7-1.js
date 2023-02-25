function keyAndMeaning(objectName) {
   for (let key in objectName) {
    if (objectName.hasOwnProperty(key)) {
        console.log(key + ' : ' +(objectName[key])); 
    }   
  }
};

const obj1 = {
  name : 'Radric',
  lastname : 'Davis',
  age: 43,
};


const obj2 = {
  color : 'green',
  width : 125.5,
  lenght: 48,
};


const obj3 = {
  definition : undefined,
  contribution : null,
  true: false,
};

keyAndMeaning(obj1);