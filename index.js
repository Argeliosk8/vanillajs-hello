//document.getElementById("excuse").innerHTML = "I have changed";

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

const excuseGenerator = (array) => array[Math.floor(Math.random() * array.length)];
const onLoad = () => `${excuseGenerator(who)} ${excuseGenerator(action)} ${excuseGenerator(what)} ${excuseGenerator(when)}`;

document.getElementById("excuse").innerHTML = onLoad()

