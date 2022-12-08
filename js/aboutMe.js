
//function changes text inside "Something about me" on document load, on click changes background to powder blue and text to white
$("document").ready(function(){
    const p1 = $("p:contains('Something about me'):first").text("I have two bunnies, and we all three hate that here are no id tags on this stuff!");
    const p2 = $("p:contains('Something about me'):last").text("But other than that I do love coding <3");
    const p3 = $("p:contains('Here are some non-dentifiable personal things of me')").text("I train 4 times a week, work full time, and study my ass off");
    const h3 = $("h3:contains('Hello!')").children().text("I am | Karen Beate | - the code master")

    p1.click(function(){
        $(this).css("background-color", "#b0e0e6");
        $(this).css("color", "white");
    })
    p2.click(function(){
        $(this).css("background-color", "#b0e0e6");
        $(this).css("color", "white");
    })
    p3.click(function(){
        $(this).css("background-color", "#b0e0e6");
        $(this).css("color", "white");
    })
    h3.click(function(){
        $(this).css("background-color", "#b0e0e6");
        $(this).css("color", "white");
    })
})

