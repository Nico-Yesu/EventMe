const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const url = 'https://c44xxyndjb.execute-api.us-west-2.amazonaws.com/SoftwareEngg/softwareengg';

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});




document.getElementById('signupform').onsubmit = async function() { 
	console.log("cam hereer")
	console.log(document.getElementById('name').value,document.getElementById('name').value,document.getElementById('name').value);
// post body data 
	const user = {
		firstName: document.getElementById('name').value,
		lastName: document.getElementById('name').value,
		email: document.getElementById('email').value,
		password:document.getElementById('password').value,
		phone:976638383,
		type:'signup'
	};
	// request options
	const options = {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json'
		}
	}

	try {
		const response= await fetch(url, options)
		console.log("respomseee isss", response.json())
	} catch (error) {
		console.log("respomseee isss",error)
	}
	

	
	// .then(function(response) {
	// 	// Your code for handling the data you get from the API
	// 	console.log("rsponse is",response,response.json())
	// })
	// .catch(function(err) {
	// 	// This is where you run code if the server returns any errors
	// 	console.log("rsponse is",err)
	// });
//   return false;
};