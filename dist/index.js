"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const great = (who) => {
    console.log("Hello", who);
};
great("Vishnu");
const states = [
    {
        name: "Alabama",
        capital: "Montgomery",
    },
    {
        name: "Alaska",
        capital: "Juneau",
    },
    {
        name: "Arizona",
        capital: "Phoenix",
    },
];
for (const state of states) {
    console.log(state.capital);
}
