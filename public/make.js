let cookie = document.cookie;
let socket = io.connect("https://tell-it-new.juanr4140.repl.co");
let writeBtn = document.querySelector("#writeBtn");

let titleField = document.querySelector("#titleField");
let contentField = document.querySelector("#contentField");

if(!cookie){
  window.location.href = "https://tell-it-new.juanr4140.repl.co";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let username = getCookie("username");

document.querySelector("#author").innerText = "By: " + username;

writeBtn.addEventListener("click", function(){
  if(titleField.value == "" || contentField.value == ""){
    alert("fields can not be empty!")
  }else{
    let titlee = JSON.stringify(titleField.value);
    let title = JSON.parse(titlee);
    let contentt = JSON.stringify(contentField.value);
    let content = JSON.parse(contentt);
    let usernameee = getCookie("username");
    let usernamee = JSON.stringify(usernameee);
    let username = JSON.parse(usernamee);
    socket.emit("post", {
      title: title,
      content: content,
      username: username
    });
    window.location.href = "https://tell-it-new.juanr4140.repl.co/home.html";
  }
});

socket.on("postyes", function(yes){
  alert(yes.yes);
  window.location.href = "https://tell-it-new.juanr4140.repl.co/home.html";
});