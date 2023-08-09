$(document).ready(function() {
    let currentInput = "";
    
    $(".num").click(function() {
        currentInput += $(this).text();
        $("#display").val(currentInput);
    });
    
    $(".operator").click(function() {
        currentInput += " " + $(this).text() + " ";
        $("#display").val(currentInput);
    });

    $("#clear").click(function() {
        currentInput = "";
        $("#display").val("");
    });

    $("#equals").click(function() {
        try {
            currentInput = eval(currentInput).toString();
            $("#display").val(currentInput);
        } catch (error) {
            $("#display").val("Error");
        }
    });

    $("#power").click(function() {
        currentInput += " ** ";
        $("#display").val(currentInput);
    });

    $("#sqrt").click(function() {
        currentInput += "Math.sqrt(";
        $("#display").val(currentInput);
    });

    $("#percentage").click(function() {
        currentInput += " / 100";
        $("#display").val(currentInput);
    });
});
