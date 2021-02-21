socket = io.connect("https://tell-it-new.juanr4140.repl.co");
socket.off = null;
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

let iddd = getCookie("sessionId");
let idd = JSON.stringify(iddd);
let id = JSON.parse(idd);

let uusernameee = getCookie("username");
let uusernamee = JSON.stringify(uusernameee);
let uusername = JSON.parse(uusernamee);

socket.emit("checkId", {
  username: uusername,
  id: id
});

socket.on("badAttempt", () => {
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  window.location.href = "https://tell-it-new.juanr4140.repl.co/";
});