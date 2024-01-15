import { test } from "./myModule.js";
import add from "./module_cjs.js";

//const { add } = _;

console.log("test : ", test);
console.log(add(test, 2));
