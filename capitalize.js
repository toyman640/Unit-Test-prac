
const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
}

const one = capitalize('hello');
console.log(one)

module.exports = capitalize;