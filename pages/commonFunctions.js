function disappearElement()
{
    document.getElementById("messageBox").style.display = "none";
    
}

function goBack()
{
    window.history.back();
}

window.addEventListener('load', function(event)
{
    document.getElementById("credit").innerHTML = sessionStorage.getItem("credit");
}); 

function returnToBeginning()
{
    window.location.href = "../index.html";

}

