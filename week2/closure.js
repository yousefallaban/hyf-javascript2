// Step 5: Scope and Closures
function createBase(baseNumber) {
   return   function (number) {
        return baseNumber + number
    };
     
}

const addSix = createBase(6);
addSix(10);
addSix(21);