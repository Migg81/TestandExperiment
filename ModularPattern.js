
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

