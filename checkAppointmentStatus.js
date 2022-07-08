$(document).ready
(
    function()
    {
        $("#showsts").click(
           
                    function () {
    
                        const tbl = document.querySelector("#reqtable");
                        $.get("http://localhost:3000/Appoinment", function (data, status) {
    
                            var len = 0;
                            for (var i = 0; i < data.length; i++)
                             {
                                 var obj = data[i];
                            // let umail= localStorage.getItem("em"); 
                             if(localStorage.getItem("em") == data[i].email)
                            {
                                tbl.innerHTML +=
                                `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].date}</td>
            <td>${data[i].time}</td>
            <td>${data[i].contact}</td>
            <td>${data[i].test}</td>
            <td><button class="accept" onclick=statusAppointment(${obj.id})>Appointment Status</button></td>
             <td id="sess"></td>
           
          
           </tr> `;

                            }
                               
                            
                               
    
                    }
                        } )   
               
               
    }
)
    }
)

function  statusAppointment(id)
{
    var eid=id;
    console.log(eid);
    $.get("http://localhost:3000/acceptappointment", function (data, status) 
    {

       var sp;
       console.log("get called");
           for (var i = 0; i < data.length; i++) 
           {
               var obj=data[i];
               console.log(obj.eid);
               if(obj.id==eid && obj.acceptance==1 )
                {
                    console.log("if called");
                     sp=" Appointment Rejected"
                 document.getElementById("sess").innerHTML+=" Appointment Accepted"
                 break;
               }
               else if(obj.id==eid && obj.acceptance==0)
               {
                 sp=" Appointment Rejected"
                 document.getElementById("sess").innerHTML+=" Appointment Rejected"
                 break;
               }
            }

}
)
}
