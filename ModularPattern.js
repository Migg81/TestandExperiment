
var ModularPattern = (function () {

    var FirstWP = function () {
        alert("Calling First Process.");
    };

    var SecondWP = function () {
        alert("Calling Second Process.");
    };

    return {
        FirsrWorkerProess: FirstWP,
        SecondWorkerPocess: SecondWP
    };

})();

var stooge = {
"first-name": "Jerome",
"last-name": "Howard"
};
var Module = (function () {

  var privateMethod = function (message) {
    console.log(message);
  };

  var publicMethod = function (text) {
    privateMethod(text);
  };
  
  return {
    publicMethod: publicMethod
  };

})();