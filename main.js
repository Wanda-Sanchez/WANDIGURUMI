function muestra_oculta (button) {
    let div = document.getElementById (button);
    if(div.style.display=="none"){
        div.style.display="flex";
    }
   else{
    div.style.display="none";
   }
}

