document.addEventListener('DOMContentLoaded', function() {

    
    for (num = 0; num != 0;) {
        let string = 'hey';
        num = prompt("How many times would you like to repeat 'hey'?", 0)
        let elem = document.getElementById("repeatedWord");

        let finalString = repeatString(string, num);

        function repeatString(string, num) { 
            let repeated = '';

            for (let i = 0; i < num; i++) {
                repeated += string; 
                console.log(repeated);
            }
            return repeated;
        }

        console.log(finalString);

        // Set the text content inside the event listener
        elem.textContent = finalString;
    }
});