const strongElements = document.getElementsByTagName('strong');
// To access the first strong element:
function highlight() {
	for(let i=0; i<strongElements.length; i++){
  strongElements[i].style.color="rgb(0,128,0)";
		
	}
}


function return_normal() {
for(let i=0; i<strongElements.length; i++){
  strongElements[i].style.color="rgb(0,0,0)";
		
	}

    
}
