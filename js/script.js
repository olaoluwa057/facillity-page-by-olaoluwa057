const harmburger = document.querySelector('.harmburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

harmburger.addEventListener('click', ()=>{
  navbar.classList.toggle('open');
});


navLinks.forEach(navLink => {
  navLink.addEventListener('click', function() {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    this.classList.add('active');
  })
})

	// javascript code for the footer

function clearme(){
			var inputval = document.getElementById('inputbox');
			const emailcheck = /\S+@\S+\.\S+/;
			if(emailcheck.test(inputval.value) === true){
 				document.getElementById('warnindicator').innerHTML = "valid email";
 			}
 			else{
 				document.getElementById('warnindicator').innerHTML = "please enter a valid email";
 			}

 			inputval.value = "";
		}

		function clearload(){
			var inputval = document.getElementById('inputbox');
			inputval.value = "";
		}

		window.onload=function(){
			clearload();
		}

