
/********* log in js *********/
document.getElementById('login-button').addEventListener('click',function(){

	let mail = document.getElementById('user-email').value;
	let password = document.getElementById('user-password').value;
	const confirmPassword = document.getElementById('confirm-password').value;

	if (mail.length > 1 ){
		document.querySelector(".email-field").classList.remove("invalid");
		console.log('mail if');
	}
	else{
		document.querySelector(".email-field").classList.add("invalid");
		console.log('mail else');
	}

	if(password.length > 1 && password == 123456){
		document.querySelector(".create-password").classList.remove("invalid");
		console.log('pass if');
	}
	else if(password.length > 1){
		document.querySelector(".create-password").classList.remove("invalid");
		console.log('pass else if');
	}
	else{
		document.querySelector(".create-password").classList.add("invalid");
		console.log('pass else');	
	}

	if(confirmPassword.length < 1 ){
		document.querySelector(".confirm-password").classList.add("invalid");
		console.log('confirm pass if');
		console.log(password);
		console.log(confirmPassword);	
	}
	else if(password != confirmPassword){
		document.querySelector(".confirm-password").classList.add("invalid");
		console.log('confirm pass else if');
	}
	else if(password == confirmPassword ){
		document.querySelector(".confirm-password").classList.remove("invalid");
		console.log('confirm pass 2nd else if');
		console.log(password);
		console.log(confirmPassword);	
		if(mail == 'admin@gmail.com'){
			console.log('mail and pass checked');
	   		window.location.href = "product.html";
		}
		else{
			document.querySelector(".email-field").classList.add("invalid");
			console.log('mail last else');
		}
	}
});


const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach(function(eyeIcon){
	eyeIcon.addEventListener('click', function(){
		const eye = eyeIcon.parentElement.querySelector("input");
		if(eye.type === 'password'){
			eyeIcon.classList.replace('fa-eye-slash' , 'fa-eye');
			return (eye.type = "text");
		}
		else{
			eyeIcon.classList.replace('fa-eye' , 'fa-eye-slash');
			return (eye.type = "password");
		}
	});
});


