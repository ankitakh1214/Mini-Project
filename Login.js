$(document).ready
(
 function()
 {
    $("#bt1").click
    (
        function()
        {
            $.get
            ("http://localhost:3000/Patients",

            function(data,status)
            {
                console.log("in js")
                var flag=0;
                for(var i=0;i<data.length;i++)
                {
                    if(data[i].email==$("#em").val() && data[i].pass==$("#pwd").val())
                    {
                       if(data[i].status=="admin"){
                        location.replace("adminDashbord.html");
                      // }else{location.replace("userDashbord.html");}
                         }else{location.replace("userFunctionality.html");}

                       //var userEmail=document.getElementById(data[i].email).value
                       var userEmail=(data[i].email)
                       localStorage.setItem("em",userEmail)
                        
                        flag=1;
                        break;
                    
                    }
                }
                if(flag==0){
                    console.log("Failed")
                }
            }
            );
        }
    );
 }
);