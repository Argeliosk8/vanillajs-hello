//document.getElementById("excuse").innerHTML = "I have changed";

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function onLoad(){
    let selectedWho = who[Math.floor(Math.random() * who.length)];
    let selectedAction = action[Math.floor(Math.random() * action.length)];
    let selectedWhat = what[Math.floor(Math.random() * what.length)];
    let selectedWhen = when[Math.floor(Math.random() * when.length)];
    return `${selectedWho} ${selectedAction} ${selectedWhat} ${selectedWhen}`
}

document.getElementById("excuse").innerHTML = onLoad()

