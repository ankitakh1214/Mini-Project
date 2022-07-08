$(document).ready
(
 function()
 {
    $("#showData").click
    (
        function()
        {
            console.log("In function show data...")
            const tbl=document.querySelector("#showtbl");
            $.get
            ("http://localhost:3000/Appoinment",

            function(data,status)
            {
                var len=0;
                for (var i=0;i<data.length;i++)
                {
                    var obj=data[i];
                    tbl.innerHTML +=
                    `<tr>
                    <td>${obj.name}</td>
                    <td>${obj.date}</td>
                    <td>${obj.time}</td>
                    <td>${obj.contact}</td>
                    <td>${obj.test}</td>
                    <td>${obj.id}</td>
                    <td>
                    <td><button class="accept" onclick=acceptAppointment(${obj.id})>Accept Appointment</button></td>
            <td><button class="reject" onclick=rejectAppointment(${obj.id})>Reject Appointment</button></td>
                    </tr><br> `;
                }
            }
            );
        }
    );
 }
);

function acceptAppointment(id) 
{
  //  alert(id);
    var uid = id;
    console.log(uid);
    console.log("entered function");
    $.get("http://localhost:3000/Appoinment", function (data, status) 
    {
        console.log("entered get");
        var len = 0;
        for (var i = 0; i < data.length; i++)
         {
            var obj = data[i];
            if (obj.id == uid) 
            {
                console.log("entered post");
                $.post("http://localhost:3000/acceptappointment",
                    {
                        acceptance: 1,
                        id:uid
                    }
                    ,
                     function (data, status)
                     {
                        alert("Data: " + data + "\nStatus: " + status + "\n Request Accepted");
                    }
                   )
            }

        }
    }
                     
                
)
}
function rejectAppointment(id) 
{
    alert(id);
    var uid = id;
    console.log(uid);
    console.log("entered function");
    $.get("http://localhost:3000/Appoinment", function (data, status) 
    {
        console.log("entered get");
        var len = 0;
        for (var i = 0; i < data.length; i++)
         {
            var obj = data[i];
            if (obj.id == uid) 
            {
                console.log("entered post");
                $.post("http://localhost:3000/acceptappointment",
                    {
                        acceptance: 0
                    }
                    , function (data, status)
                     {
                       // alert("Data: " + data + "\nStatus: " + status + "\n Request rejected");
                    }
                   )
            }

        }
    }
                     
                
)
}
