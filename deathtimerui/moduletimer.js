import {getUserDate} from "./moduleinput.js";
import {toDate} from "date-fns";

function timer(){
    let futureDate = getUserDate();
    futureDate = toDate(futureDate);

    return console.log(1);
}