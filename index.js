//1
function areBothSame(x, y) {
    // if two arguements are the same return true
    // return x == y
    if (x == y) {
        return true
    }
    else {
        return false
    }
}

//2
function areBothEqual(x, y) {
    // return x == y
    if (x === y) {
        return true
    }
    else {
        return false
    }
}

//3
function areAllFourEqual(x, y, z, k) {
    if (x === y && x === z && x === k) {
        return true
    }
    else if (y === z && y === k) {
        return true
    }
    else if (z === k) {
        return true
    }
    else {
        return false
    }
}


//4
function areAllFourSame(x, y, z, k) {
    if (x == y && x == z && x == k) {
        return true
    }
    else if (y == z && y == k) {
        return true
    }
    else if (z == k) {
        return true
    }
    else {
        return false
    }
}

//5
function areAllFourSameOrEqual(x, y, z, k) {
 if (x===y && y===z && z===k){
     return "equal";
 }else if ( x==y && y==z && z==k){
     return "same"
 }else{
     return "null"
 }
}

console.log(areAllFourSameOrEqual(true, false, 1, "1"))
