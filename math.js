function calculate(dzialanie) {

	let a = document.getElementById("a").value;
	let b = document.getElementById("b").value;

	if(a=="" || b=="") {
		document.querySelector(".wynik").innerHTML = "Uzupełnij obydwa pola";
	}
	else {
		a=parseFloat(a);
		b=parseFloat(b);	
		document.querySelector('.wynik_box').style.display = "block";
		document.querySelector('.wynik').style.color = "white";		
		
		switch(dzialanie) {
			case 1: 
				document.querySelector(".wynik").innerHTML = a+b;					
			break;
			
			case 2: 
				document.querySelector(".wynik").innerHTML = a-b;					
			break;
			
			case 3: 
				document.querySelector(".wynik").innerHTML = a*b;					
			break;
			
			case 4: 
				if(b==0) {
				document.querySelector('.wynik').innerHTML = "Nie dziel przez zero!";		
				document.querySelector('.wynik').style.color = "red";
				}
				else {
				document.querySelector(".wynik").innerHTML = a/b;
				}
			break;			
		}
	}
}