/* Question 1 */    
function checkAnswer(question, answer) {

    if (question === 1) {

        if (answer === "A") {

            document.getElementById("answer1").innerHTML =
                "<p class='correct'>Correct!</p>" +
                "<p><strong>Correct answer: A. It can affect sleep quality</strong></p>" +
                "<p>Long phone usage, especially before bedtime, can make it harder for teenagers to get enough quality sleep. Good sleep is important for physical health, concentration and mental wellbeing.</p>";

        } else {

            document.getElementById("answer1").innerHTML =
                "<p class='wrong'>Incorrect.</p>" +
                "<p><strong>Correct answer: A. It can affect sleep quality</strong></p>" +
                "<p>Long phone usage, especially before bedtime, can make it harder for teenagers to get enough quality sleep. Good sleep is important for physical health, concentration and mental wellbeing.</p>";
        }
    }
}