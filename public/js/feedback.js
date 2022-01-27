function sendFeedback() {
    var feedbackUser = new XMLHttpRequest();

    feedbackUser.open("POST", "http://127.0.0.1:8080/feedback", true)
    feedbackUser.setRequestHeader("Content-Type", "application/json")
    feedbackUser.onload = function () {
        var token = JSON.parse(feedbackUser.responseText);
        console.log(token.result);
        if (token.result != "success") {
            alert("Your feedback has been sent successfully! We will be sure to make full use of it.")  
            return
        }
        else { 
            alert("Your feedback has been sent successfully! We will be sure to make full use of it.")
        }
    }
    var subject = document.getElementById("feedbackSubject").value;
    var feedback = document.getElementById("feedbackContent").value;
    var payload = {subject: subject, feedback: feedback }
    feedbackUser.send(JSON.stringify(payload));
}

