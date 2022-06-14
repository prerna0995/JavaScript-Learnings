import setText, { appendText } from "./results.mjs";

export function timeout() {
    const wait = new Promise( (resolve) => {
        setTimeout(() => {
            resolve("Timeout");
        },1500)
    });
    wait.then(
        (text) => setText(text)
    );
}

export function interval() {
    let count = 0;
    const wait = new Promise( (resolve) => {
        setInterval(() => {
           console.log("Timeout"); 
            resolve(`Timeout: ${++count}`);
        },1500)
    });
    wait.then(
        (text) => setText(text)
    )
    .finally (
        () => appendText(`\nFinally: ${++count}`)
    );
}

export function clearIntervalChain() {
    let count = 0;
    let interval;
    const wait = new Promise( (resolve) => {
        interval = setInterval(() => {
           console.log("Timeout"); 
            resolve(`Timeout: ${++count}`);
        },1500)
    });
    wait.then(
        (text) => setText(text)
    )
    .finally (
        () => clearInterval(interval)
    );
}

export function xhr() {
    let request = new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/users/2");
        console.log(xhr.responseText);
        if(xhr.status === 200) {
            console.log("Passed");
            xhr.onLoad = () => resolve(xhr.responseText);
        } else {
            console.log("Failed");
            xhr.onerror = () => reject("Request Failed");
        }
        xhr.send();
    });
    request.then(
        (result) => setText(result)
    )
    .catch(
        (reason) => setText(reason)
    );
}

export function allPromises() {
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios.get("http://localhost:3000/userTypes");
    Promise.all([categories, statuses, userTypes])
    .then(
        ([category, status, userType]) => {setText("");
        appendText(JSON.stringify(category.data));
        appendText(JSON.stringify(status.data));
        appendText(JSON.stringify(userType.data));
    })
    .catch(
        (err) => setText(err)
    );
}

export function allSettled() {
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios.get("http://localhost:3000/userTypes");
    Promise.allSettled([categories, statuses, userTypes])
    .then((values) => {
            let result = values.map(v => {
                if(v.status === 'fulfilled') {
                    return `Fulfilled: ${JSON.stringify(v.value.data[0])} `;
                }
                return `Rejected: ${v.reason.message} `;
            });
            setText(result);
        })
    .catch(
        (err) => setText(err)
    );
}

export function race() {
    let users = axios.get("http://localhost:3000/users");
    let backUp = axios.get("http://localhost:3001/users");
    Promise.race([users,backUp])
    .then((user) => {
            setText(JSON.stringify(user));
        })
    .catch(
        (err) => setText(err)
    );
}
