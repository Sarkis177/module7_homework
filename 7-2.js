function stringInObject(objectName, string) {
    return string in objectName;
  }
  
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
  
  console.log(stringInObject(obj1, 'age'))
  