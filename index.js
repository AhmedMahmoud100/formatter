const array1 = ["name1", "name2", "name3"]
const array2 = [1, 2, 3]

const deFormatData = function (keys, values) {
    const object = {}
    keys.forEach((key, i) => object[key] = values[i])
    return object
};

ff = deFormatData(array1, array2)
console.log({ ...deFormatData(array1, array2) })