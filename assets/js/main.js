darklight = () =>{
    document.getElementById('whe').innerHTML ='<button onclick= "darklight()"><i class="fa-solid fa-moon"></button>';
    document.getElementById('thor').href = 'assets/css/dark.css';
}
 
 sun  = () => {
   document.getElementById('light').style.display = "none";
   document.getElementById('dark').style.display = "inline";
   document.getElementById('thor').href = "assets/css/light.css";
 }

 moon = () => {
    document.getElementById('dark').style.display ='none';
    document.getElementById('light').style.display ='inline';
    document.getElementById('thor').href = 'assets/css/dark.css';
}



