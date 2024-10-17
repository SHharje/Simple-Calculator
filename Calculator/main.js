var display = document.getElementById("display")



function appendInDisplay(input){
    display.value += input
    display.scrollLeft = display.scrollWidth
}

function clear(){
    display.value = ""
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
    
}

var button = document.querySelectorAll("button")

for(var i=0; i<button.length;i++){
    button[i].addEventListener("click",function(){
        var x = this.textContent
        if(x === "="){
            calculate()
        }else if(x==="C"){
            clear()
        }else{
            appendInDisplay(x)
        }
    })
}