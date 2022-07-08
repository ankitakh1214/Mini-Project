
$(document).ready
(
    function()
    {
        $("#bookAppt").click
        (
            function()
            {
                $.post
                (
                    "http://localhost:3000/Appoinment",
                   {
                    name :$("#name").val(),
                    date:$("#date").val(),
                    time:$("#tm").val(),
                    contact:$("#cnt").val(),
                    test:$("#test").val(),
                    email:localStorage.getItem("em")
                   }
                );
            }
        );
    }
);