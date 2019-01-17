export function Test(isEnabled?:boolean){
    isEnabled = isEnabled || false;
    return function (target,property){
        
        console.log('Test Decorator: ' + isEnabled);
        console.log(target, property ,target[property])
    }
    // console.log('isEnabled:' + isEnabled)
    // return Reflect.set();
    // return 'hello'
}