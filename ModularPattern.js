var ModularPattern = function () {

    FirstWP = function () {
        alert("Calling First Process.");
    }

    SecondWP = function () {
        alert("Calling Second Process.");
    }

    Process = {
        FirsrWorkerProess: FirstWP(),
        SecondWorkerPocess: SecondWP()
    }

    Process.FirsrWorkerProess;
    Process.SecondWorkerPocess;

};