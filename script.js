        alert("javascript runs this code when the page loads");
        
        function clearDisplay(){
        document.getElementById("display-bar").innerHTML = "";
        };
        
        function display(userInput){
            document.getElementById("display-bar").innerHTML = userInput
        }