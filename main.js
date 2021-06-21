const obj = {
    formatted_address : "Washington Square, New York, NY 10012, Сполучені Штати Америки",
    geometry: {
        location: {
            lat: 40.7308838,
            lng: -73.997332
         },
         viewport: {
            northeast: {
               lat: 40.7333674,
               lng: -73.99379435000002
            },
            southwest: {
               lat: 40.72847220000001,
               lng: -74.00132615
            }
         }
      },
      name: "Washington Square Park"
};

let objCopy = {};
function fullCopyingObject(originalObject) {
    let clone = Array.isArray(originalObject) ? [] : {};
    for (let key in originalObject) {
        if (typeof originalObject[key] === 'object') {
            clone[key] = fullCopyingObject(originalObject[key]);
        } else {
            clone[key] = originalObject[key];
        }
    }
    return clone;
};

objCopy = fullCopyingObject(obj);

console.log(obj);
console.log(objCopy);
