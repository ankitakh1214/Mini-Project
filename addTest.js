
$(document).ready
(
    function()
    {
        
        $("#bt2").click
        (
            function()
            {
                console.log("in function...!!!");
                $.post
                (
                    console.log("in post method of test"),
                    "http://localhost:3000/Test",
                   {
                    name:$("#name1").val(),
                    type:$("#tp").val(),
                    cost:$("#cost").val(),
                    testcode:$("#code").val()
                   }
                )
            }
        );
    }
);