
alert("chat bot for health");



var msg;




function sendMessage(){
    var message = String(document.getElementById("input").value);
    msg = message;
    var message_bubble = document.createElement("p");
    message_bubble.setAttribute("id", "Message1");
    var node = document.createTextNode(message);
    message_bubble.appendChild(node);
    var parent = document.getElementById("parent");
    parent.append(message_bubble);
    clear();
    interprate(); 
}



function replyMessage(message){
    showStatus();
    
     setTimeout(function () {//wait for 5 seconds before replying. Pretend it's loading. LOL!!!!!
     var message_bubble = document.createElement("p");
     message_bubble.setAttribute("id", "Message2");
      var node = document.createTextNode(message);
      message_bubble.appendChild(node);
     var parent = document.getElementById("parent");
      parent.append(message_bubble);
      deleteElement();
    }, 3000);//pretend it's loading hehehe
     
    
}


function interprate(){
    if(msg.includes("hey") ||
    msg.includes("hello") ||
    msg.includes("Hi")||
    msg.includes("hi")){
      replyMessage("Hello there, How can I help you?");   
    }else if(msg.includes("headache") || msg.includes("head") ||
    msg.includes("migraine")|| msg.includes("i have headache")|| msg.includes(" i am suffering from headache")
    || msg.includes("Headache")){
       replyMessage("Try some asprin if symptom persists see a real doctor."); 
       
    }else if(msg.includes("stomachache") || msg.includes("upset")||
    msg.includes("diarrhoea")||msg.includes("diarrhea")){
       replyMessage("Stay hydrated. If symptoms persist see a real doctor"); 
    }else if(msg.includes("pain")){
        replyMessage("Try some pain killers");
    }else if(msg.includes("Sick")){
         replyMessage("This website should help",);
         
        setTimeout(function () {
        window.open("http://www.mayoclinic.org/",'_blank');
        }, 4500);
    }
    else{
        replyMessage("I'm sorry I couldn't get that. Try this site");
        
        setTimeout(function () {
        window.open("http://www.mayoclinic.org/",'_blank');
        }, 5500);
    }
    
   
}

function process(){
    
}

function showStatus(){
    var status = document.createElement("p");
    status.setAttribute("id", "Status");
    status.setAttribute("class","status");
    var node = document.createTextNode("typing...");
    status.appendChild(node);
    var parent = document.getElementById("parent");
    parent.append(status);
}

function deleteElement(){
    document.getElementById("Status").remove();
}

function clear(){
    document.getElementById("input").value = "";
}
