const util = require("util");
const data = require('./data').data;
const nodeArgs = process.argv.slice(2);

const convert = nodeArgs.toString();

if (convert === "--count") {
    var argsInput = "count"
} else {
    var argsInput =  convert.substring(convert.lastIndexOf("-") + 1, convert.lastIndexOf("="));
    var argsValue = convert.substring(convert.indexOf("=") + 1);
}

const findAnimals = (data, argsValue) => {
    return data.filter(data => {
        data.people = data.people.filter(
            people => {
                people.animals = people.animals.filter(animal => {
                    return animal.name.match(argsValue) &&
                        console.log(util.inspect(data, {showHidden: false, depth: null}));
                })
            });
    });
}

const count = (data) => {
    data.forEach(data => {
        data.name = data.name + " " + `[${data.people.length}]`;
        data.people.forEach(name => name.name = name.name + " " + `[${name.animals.length}]`)
    });
    return console.log(util.inspect(data, { showHidden: false, depth: null }));
}

switch (argsInput) {
    case 'filter':
        console.log("Oh! You're looking to filter about: ", argsValue);
        return findAnimals(data, argsValue);
    case 'count':
        console.log("Oh, you just want to count");
        return count(data);
    default: console.log("Sorry we just can filter & count! Try again ;)")
}

module.exports = { findAnimals, count, argsValue }
