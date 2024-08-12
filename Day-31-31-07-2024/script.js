/* ---------- Print * in this pattern:-
                                         *
                                         **
                                         ***
                                         ****
                                         ***** ---------- */



// let symbol = "*" ;
// let count = 1 ;

// while (count <= 5){
//     console.log(symbol);
//     symbol += "*";
//     count++;

// }



/* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* ---------- Print * in this pattern:-
                                          *
                                         ***
                                        *****
                                       *******
                                      ********* ---------- */


// let rows = 5;
// let count = 1;

// while (count <= rows) {
//     let spaces = ' ' . repeat(rows - count);
//     let stars = '*'.repeat(2 * count - 1);
//     console.log(spaces + stars);
//     count++;
// }


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/*
// ARRAY EXAMPLE:-
    
    let array1 = ["Nano", "Mustang", "Bugati", "Alto", "Porsche"];  //Collection of cars
    let array2 = [7, 6, 8, 4, 1];  //Astro Number 
    
    // Algorithm
    // 1:- Traverse / Traversing / Traversal Algorithm
    
    // increment factor = index
    // starting position 0
    
    for (let index = 0; index < array2.length; index++) {
    
    console.log(array2[index]);
    }
    
    
    console.log(array2[2])  */


 
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------- */


// MAPS

let cars = ["Nano", "Mustang", "Bugati", "Alto", "Porsche"];  //Collection of cars
    
    // special function for array
    
    cars.map((value) => () => {
        console.log(value);


    // if you want the output in upparcase then,
    
    cars.map((value) => console.log(value.toUpperCase()));
        });