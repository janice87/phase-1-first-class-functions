function receivesAFunction(cb) {
return cb() 
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Hello named function');
  }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(anonymousFunc);
    }
}