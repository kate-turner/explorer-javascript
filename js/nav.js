
function dropDown() {
    document.getElementById("nav").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {

    let dropdown = document.getElementsByClassName("dropdown");
    for (let i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

 
