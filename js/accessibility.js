
//Toggles between increased size on text in ALL p tags by 20%
//Can scale in px, em and %
$(function(){
    $("#accessToggle").change(function(){
        if($(this).prop("checked") == true){
            ($("*p").css("font-size", "120%"))
        }
        else{($("*p").css("font-size", "100%"))}
    })
})


