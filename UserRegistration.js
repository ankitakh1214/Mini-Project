$(document).ready
(
    function(){
        var a=0,b=0,c=0;
        $("#register").click(
            function(event) {


                if(($("#name").val()==null || $("#name").val()=="")){
                    if(a==0){
                        a++;

                        $("#valid1").append("* cannt be empty")
                    }
                }
                else if(($("#em").val()==null  || $("#em").val()=="")){
                    if(b==0){
                        b++;
                        $("#valid2").append(("* Insert valid email"))
                    }
                }
                else if(($("#pwd").val()==null || $("#pwd").val()=="")){
                    if(c==0){
                        c++;
                        $("#valid3").append("* cannot be empty")
                    }
                }
                else{

                    var info ={
                        name :$("#name").val(),
                        email:$("#em").val(),
                        pass:$("#pwd").val(),
                        status:"user"
                    };
                    $.post
                    (
                       
                        "http://localhost:3000/Patients",
                       info,
                       function (info, status) {
                        alert("Data: " + info + "\nStatus: " + status);
                       }
                    );
                    event.preventDefault();
                }
            }
            
        );
    }
);