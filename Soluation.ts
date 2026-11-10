//       Answer To  the Question no  = 1

function multiplyValue   (a:number, b ?:number){
    if (b === undefined ){

        return a * 2;
    }

    else{
        return a * b ;
    }


};


//       Answer To  the Question no  = 2 

function processInput (value: string | number |boolean) {

    if ( typeof value  === 'string'){
        return value.trim().toLowerCase();
    }

    else if (typeof value === 'number'){
        return value * 10 ;
    }

    else{
        return value ? 'Active' : 'Inactive' 
    }

};


//       Answer To  the Question no  = 3 


function formatCoordinate (coordinate : readonly [number,number,string]){

    const [latitude, longitude, locationName] = coordinate ;

    return `Location: ${locationName} ${latitude} ${longitude}`

};


//       Answer To  the Question no  =  4 


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];

    for (const array of arrays) {
        for (const item of array) {
            result.push(item);
        }
    }

    return result;
};


   