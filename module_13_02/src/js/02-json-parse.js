const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд вернул вот такое чудо }';

// console.log(JSON.parse(invalidJSON));

try{
    console.log(1);
    console.log(JSON.parse(invalidJSON));
    console.log(2);
} catch(error){
    console.log(error);
}


console.log('After try .... catch');