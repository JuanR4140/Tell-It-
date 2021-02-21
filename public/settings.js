let cookie = document.cookie;
if(!cookie){
  window.location.href = "https://tell-it-new.juanr4140.repl.co";
}

let logout = document.querySelector("#logout");


logout.addEventListener("click", function(){
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  window.location.href = "https://tell-it-new.juanr4140.repl.co";
});