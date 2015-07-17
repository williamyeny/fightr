$(document).ready(function(){
    $("#accept").click(function(){
        $("#accepts").append("<li>" + $("h3").html + "</li>" );
    });
});