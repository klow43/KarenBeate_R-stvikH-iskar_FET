

//Show toast on clicking the Like button in HTML
$(function(){
    $("#liveToastBtn").click(function(){
        $("#liveToast").toast("show");
    })
})

//function for boredBtn to display return of url in console
$(function(){
    $("#boredBtn").click(function(){
        $.ajax({
            url:"https://www.boredapi.com/api/activity/",
            success: function(response){
                console.log(response)
            },
            error:function(){
                console.log("Whoopsie doopsie :)")
            }
        })
    })
})