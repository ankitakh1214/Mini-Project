$(document).ready
 (
    function()
    {
       
                    
                    const tbl=document.querySelector("#showtbl");
                    $.get("http://localhost:3000/Test", function (data, status) {
    
                         var len=0;
                            for (var i = 0; i < data.length; i++) 
                            {
                                var obj=data[i];
                                tbl.innerHTML +=
                     `<tr>
                    <td>${obj.id}</td>
                    <td>${obj.name}</td>
                    <td>${obj.testcode}</td>
                    <td>${obj.type}</td>
                    <td>${obj.cost}</td>
                    </tr><br> `;
                   
                    
                     }
              
                           

                        })

                    }
                )

function myFunction() {
    // this function is used fo serarching the Test
    console.log("function called");
    
    input = document.getElementById("search").value;
    console.log(input);

    $.get("http://localhost:3000/Test", function (data, status) {
                   console.log("in get method");
                   var v1=document.getElementById("onedata");
                    for (var i = 0; i < data.length; i++) 
                    {
                        var obj=data[i];
                        console.log(obj.name);
                        if(input==obj.name)
                        {
                          console.log("entered if");
                        
                        v1.innerHTML+=obj.id+" "+obj.name+" "+obj.testcode+" "+obj.type+" "+obj.cost
                          break;
                        }
                    
                    }
                    
             }
        )

 }


function bookAppointment()
{
    location.href="./userDashbord.html";
}


