$(function () {
    $("#button").click(function () {
        var redioValue = $("input[name='gender']:checked").val();
        var ch = [];
        $.each($("input[name='chek']:checked"), function () {
            ch.push($(this).val());

        });
        checkValues = ch.join(",");


        var name = document.getElementById("name").value;
        var disc = document.getElementById("discr").value;
        var SD = document.getElementById("sd").value;
        var DD= document.getElementById("dd").value;
        var ST = document.getElementById("st").value;
        var city = $('#city option:selected').text();
        var loc = document.getElementById("loc").value;

        //send data to the other page
        localStorage.setItem("eventName", name);
        localStorage.setItem("eventDiscrip", disc);
        localStorage.setItem("eventSD", SD);
       localStorage.setItem("eventDD", DD);
       localStorage.setItem("eventST", ST);
        localStorage.setItem("eventCity", city);
       localStorage.setItem("eventLocation", loc);
        localStorage.setItem("eventGender", redioValue);
        localStorage.setItem("eventAge", checkValues);

        window.location.href= 'eventInfo.html';



    });


    
});

