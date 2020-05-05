export function joinListeners(input, intercept, props) {
    for(let k in intercept) {
        if(typeof intercept[k] !== 'function') {
            throw new Error("Event listener should be a function (passed)");
        }
        if(input[k]) {
            if(typeof input[k] !== 'function') {
                throw new Error("Event listener should be a function (exists)");
            }
            const initialFunction = input[k];
            input[k] = (e) => {
                initialFunction(e);
                intercept[k](e, props);
            }
        } else {
            input[k] = e => intercept[k](e, props);
        }
    }
    return input;
}