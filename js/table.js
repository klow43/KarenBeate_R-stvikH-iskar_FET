
//calls function when page loads Vanilla style!
window.onload = table();

//insert row, then cells in, add icon to 2nd, image to 5th
function table(){
    const pTable = document.querySelector("tbody");
    const row0 = pTable.insertRow(0);
    const thing1 = row0.insertCell(0);
    const thing2 = row0.insertCell(1);
    const thing3 = row0.insertCell(2);
    const thing4 = row0.insertCell(3);
    const thing5 = row0.insertCell(4);
    const x = "<img onclick='openImage()' width='50' height'50' src='https://premium.vgc.no/v2/images/7cbdfb6c-82a9-447f-acb8-e572fe5bfa9c?fit=crop&format=auto&h=1200&w=1600&s=292efd5bf2701dcd1019fe0cc36925018e57e305' alt='Mr.Bond'></img>"
    const y ="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-sign-stop' viewBox='0 0 16 16'><path d='M3.16 10.08c-.931 0-1.447-.493-1.494-1.132h.653c.065.346.396.583.891.583.524 0 .83-.246.83-.62 0-.303-.203-.467-.637-.572l-.656-.164c-.61-.147-.978-.51-.978-1.078 0-.706.597-1.184 1.444-1.184.853 0 1.386.475 1.436 1.087h-.645c-.064-.32-.352-.542-.797-.542-.472 0-.77.246-.77.6 0 .261.196.437.553.522l.654.161c.673.164 1.06.487 1.06 1.11 0 .736-.574 1.228-1.544 1.228Zm3.427-3.51V10h-.665V6.57H4.753V6h3.006v.568H6.587Z'/><path fill-rule='evenodd' d='M11.045 7.73v.544c0 1.131-.636 1.805-1.661 1.805-1.026 0-1.664-.674-1.664-1.805V7.73c0-1.136.638-1.807 1.664-1.807 1.025 0 1.66.674 1.66 1.807Zm-.674.547v-.553c0-.827-.422-1.234-.987-1.234-.572 0-.99.407-.99 1.234v.553c0 .83.418 1.237.99 1.237.565 0 .987-.408.987-1.237Zm1.15-2.276h1.535c.82 0 1.316.55 1.316 1.292 0 .747-.501 1.289-1.321 1.289h-.865V10h-.665V6.001Zm1.436 2.036c.463 0 .735-.272.735-.744s-.272-.741-.735-.741h-.774v1.485h.774Z'/><path fill-rule='evenodd' d='M4.893 0a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146A.5.5 0 0 0 11.107 0H4.893ZM1 5.1 5.1 1h5.8L15 5.1v5.8L10.9 15H5.1L1 10.9V5.1Z'/></svg>"
    thing1.innerHTML = "007";
    thing2.innerHTML = y;
    thing3.innerHTML = "Secret Agent";
    thing4.innerHTML = "Its secret!";
    thing5.innerHTML = x; 
    }

//open image onclick in new window
function openImage(){
    window.open("https://premium.vgc.no/v2/images/7cbdfb6c-82a9-447f-acb8-e572fe5bfa9c?fit=crop&format=auto&h=1200&w=1600&s=292efd5bf2701dcd1019fe0cc36925018e57e305", "_blank")
}
//jquery on hovering mouse over odds change color, back when mouseout (I also changed background, because pretty)
$("document").ready(function(){
    $("tbody td:odd").mouseover(function(){
        $(this).css("background-color", "#b0e0e6");
        $(this).css("color", "#FF66CC");
    })
    .mouseout(function(){
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    })
})