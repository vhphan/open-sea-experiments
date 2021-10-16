export const loadScript = function (url, scriptClass, callback = null) {
  let isLoaded = document.querySelectorAll('.' + scriptClass)
  if (isLoaded.length > 0) {
  } else {
    let myScript = document.createElement('script')
    myScript.src = url
    myScript.className = scriptClass
    document.body.appendChild(myScript)
    myScript.onload = function () {
      if (callback) callback();
    };
  }
}

export const rowsUnpack = function (jsonRows, key) {
  try {
    return jsonRows.map(function (jsonRow) {
      return jsonRow[key];
    });
  } catch (err) {
    console.log(err);
  }
}

export const sortDataArray = function (dataArray) {
  return dataArray.sort(function (a, b) {
    let aDate = new Date(a[0]);
    let bDate = new Date(b[0]);
    return aDate - bDate;
  });
}

export const zipArrays = function (a, b) {
  return a.map(function (e, i) {
    return [e, b[i]];
  });
}


export const titleCase = function (sentence) {
  sentence = sentence.toLowerCase().split('_');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
}

export function isObject(obj) {
  return obj != null && obj.constructor.name === "Object"
}
