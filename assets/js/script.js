document.addEventListener("DOMContentLoaded", function () {
  let pressureUnits2 = ["Torr", "pa", "bar"];
  let conversionA = document.getElementById("conversion");
  let conversionB = document.getElementById("conversion-1");
  let flexTiles = document.getElementsByClassName("tile-flex-child");

  for (let flexTile of flexTiles) {
    flexTile.addEventListener("click", loadUnits);
  }

  /*if (measrueTypeVal === "pressure") {
    for (let unit of pressureUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }

  measuretype1.addEventListener("change", function (event) {
    let conversionA = document.getElementById("conversion");
    let conversionB = document.getElementById("conversion-1");
    conversionA.innerHTML = "";
    conversionB.innerHTML = "";

    /* loading mass unit
    let massUnits2 = ["kg", "g", "mg", "lbs", "Oz"];
    if (event.target.value === "mass") {
      for (let unit of massUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading temperature unit
    let tempUnits2 = ["Degree celcius", "fahrenheit", "kelvin"];
    if (event.target.value === "temprature") {
      for (let unit of tempUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading speed unit
    let speedUnits2 = ["km/h", "mp/h", "m/s"];
    if (event.target.value === "speed") {
      for (let unit of speedUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading pressure unit

    if (event.target.value === "pressure") {
      for (let unit of pressureUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
  });*/
  /* convert button functions **/
  let convertA = document.getElementsByClassName("convert-number")[0];
  convertA.addEventListener("click", function (event) {
    console.log(convertA);
    /* convert kg to other units**/
    if (conversionA.value === "kg") {
      if (conversionB.value === "g") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 1000;
      }
      if (conversionB.value === "mg") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 1000000;
      }

      if (conversionB.value === "lbs") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 2.205;
      }
      if (conversionB.value === "Oz") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 35.274;
      }
    }
    /* convert grams to other units**/
    if (conversionA.value === "g") {
      if (conversionB.value === "kg") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 1000;
      }
      if (conversionB.value === "mg") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 1000;
      }

      if (conversionB.value === "lbs") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 453.6;
      }

      if (conversionB.value === "Oz") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 28.3;
      }
    }
    /* converting mg's to other units**/
    if (conversionA.value === "mg") {
      if (conversionB.value === "kg") {
        let inputValue = document.getElementById("number-box").value;

        let input2 = document.getElementById("number-box1");
        input2.value = parseFloat(inputValue) / 1000000;
      }
      if (conversionB.value === "g") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 1000;
      }
      if (conversionB.value === "lbs") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 453600;
      }

      if (conversionB.value === "Oz") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 28350;
      }
    }
    /* lbs to other units**/
    if (conversionA.value === "lbs") {
      if (conversionB.value === "kg") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 2.205;
      }
      if (conversionB.value === "g") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 2.205;
      }
      if (conversionB.value === "mg") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 453600;
      }
      if (conversionB.value === "Oz") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 16;
      }
    }

    /* converting Oz to other units**/
    if (conversionA.value === "Oz") {
      if (conversionB.value === "kg") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 35.274;
      }

      if (conversionB.value === "g") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 28.35;
      }

      if (conversionB.value === "mg") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 28350;
      }

      if (conversionB.value === "lbs") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 16;
      }
    }
    /* converting km/h values to other units **/
    if (conversionA.value === "km/h") {
      if (conversionB.value === "mp/h") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 1.609;
      }
      if (conversionB.value === "m/s") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 3.6;
      }
    }
    /* converting mp/h values to other units**/
    if (conversionA.value === "mp/h") {
      if (conversionB.value === "km/h") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 1.609;
      }
      if (conversionB.value === "m/s") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 2.237;
      }
    }
    /* converting m/s values to other units **/
    if (conversionA.value === "m/s") {
      if (conversionB.value === "km/h") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 3.6;
      }
      if (conversionB.value === "mp/h") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 2.237;
      }
    }
    /* converting torr to other units **/
    if (conversionA.value === "Torr") {
      if (conversionB.value === "pa") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 133.3;
      }

      if (conversionB.value === "bar") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 750.1;
      }
    }
    /* converting pa to other units**/
    if (conversionA.value === "Pa") {
      if (conversionB.value === "Torr") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 133.3;
      }

      if (conversionB.value === "bar") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 100000;
      }
    }
    /* converting bar to other units**/
    if (conversionA.value === "bar") {
      if (conversionB.value === "Torr") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 750.1;
      }

      if (conversionB.value === "pa") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 100000;
      }
    }
  });
});

function runConverter() {}

function calculateConversion() {}

/* this funtion loading the units*/
function loadUnits(event) {
  let tileValue = this.getAttribute("value");

  let conversionA = document.getElementById("conversion");
  let conversionB = document.getElementById("conversion-1");
  conversionA.innerHTML = "";
  conversionB.innerHTML = "";

  /*loading mass unit*/
  let massUnits2 = ["kg", "g", "mg", "lbs", "Oz"];
  if (tileValue === "mass") {
    for (let unit of massUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }
  /*loading temperature unit*/
  let tempUnits2 = ["Degree celcius", "fahrenheit", "kelvin"];
  if (tileValue === "temperature") {
    for (let unit of tempUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }
  /*loading speed unit*/
  let speedUnits2 = ["km/h", "mp/h", "m/s"];
  if (tileValue === "speed") {
    for (let unit of speedUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }
  /*loading pressure unit*/
  let pressureUnits2 = ["Torr", "pa", "bar"];
  if (tileValue === "pressure") {
    for (let unit of pressureUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }
}

/* declare a function to reuse create , appendChild and populate measuring unit to option elements  **/
function createUnitOption(unit, selectElement) {
  let option = document.createElement("option");
  selectElement.appendChild(option);
  option.innerHTML = unit;
}
