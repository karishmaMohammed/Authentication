const USERS_DB = []

const encryptionRule = {
	'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
	'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
	'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
	'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
	'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
	'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
	'Y': 'L', 'Z': 'M',
	'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
	'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
	'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
	'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
	'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
	'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
	'y': 'l', 'z': 'm',
	'0': '5', '1': '6', '2': '7', '3': '8',
	'4': '9', '5': '0', '6': '1', '7': '2',
	'8': '3', '9': '4',
	'!': '#', '$': '%', '&': '+', '-': '@',
	'_': '~', '#': '!', '%': '$', '+': '&',
	'@': '-', '~': '_'
}

const encypt = (inputString) => {
	let encryptedString = ''
	for (let char of inputString) {
		encryptedString = encryptedString + encryptionRule[char]
	}
	return encryptedString
}

const decrypt = (encryptedString) => {
	let originalString = ''

	let keys = Object.keys(encryptionRule)
	let values = Object.values(encryptionRule)
	for (let char of encryptedString){
		let requiredIndex = values.indexOf(char)
		originalString = originalString + keys[requiredIndex]
	}
	console.log(originalString)
	return originalString
}
let globalIsSubmitted = false


const signUp = (isSubmitted = false) => {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let mobileNumber = document.getElementById('phone-number').value
	let password = document.getElementById('password').value
	let confirmpassword = document.getElementById('confirm-password').value
	let tnC = document.getElementById('t-and-c').checked
	let error = false

	let encryptedPassword = encypt(password)

	if(isSubmitted){
		globalIsSubmitted = true
	}

	//document.getElementById('sign-up-form').reset()

	/*let userDetails = {
    firstName,
    lastName,
    email,
    mobileNumber,
    password: encryptedPassword,
	confirmpassword: encryptedPassword,
  };

	USERS_DB.push(userDetails)

	console.log(USERS_DB)
	alert('Sign up successful!')

	changeNavLinks(userDetails)*/
  	if(globalIsSubmitted) {
    if(firstName.length >= 3 && firstName.match(/^[a-zA-Z]*$/)) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if(lastName.length >= 3 && lastName.match(/^[a-zA-Z]*$/)) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    if (
        email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") != 0 &&
        email.length - email.lastIndexOf(".") == 4
    ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error = true
    }
    if(mobileNumber.length === 10 && !isNaN(mobileNumber) && mobileNumber.match(/^\(?([6-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/)) {
        document.getElementById('mobile-number-valid').style.display = 'block'
        document.getElementById('mobile-number-invalid').style.display = 'none'
    } else {
        document.getElementById('mobile-number-invalid').style.display = 'block'
        document.getElementById('mobile-number-valid').style.display = 'none'
        error = true
    }
	if(password.length === 8 && isNaN(password)){
		//only characters of length 8
		document.getElementById('password-valid').style.display = 'block'
		document.getElementById('password-invalid').style.display = 'none'
	}else{
		document.getElementById('password-invalid').style.display = 'block'
		document.getElementById('password-valid').style.display = 'none'
		error = true
	}
	if(password === confirmpassword){
		document.getElementById('confirm-password-valid').style.display = 'block'
		document.getElementById('confirm-password-invalid').style.display = 'none'
	}else{
		document.getElementById('confirm-password-invalid').style.display = 'block'
		document.getElementById('confirm-password-valid').style.display = 'none'
		error = true
	}

	if(tnC) {
		document.getElementById('t-and-c-invalid').style.display = 'none'
	} else {
		document.getElementById('t-and-c-invalid').style.display = 'block'
		error = true
	}

	//document.getElementById('sign-up-form').reset()

	let userDetails = {
    firstName,
    lastName,
    email,
    mobileNumber,
    password: encryptedPassword,
	confirmpassword: encryptedPassword,
  };

	USERS_DB.push(userDetails)

	console.log(USERS_DB)
	//alert('Sign up successful!')

	//changeNavLinks(userDetails)
	if(!error && isSubmitted) {
		alert('Your details have been saved successfully!')

		document.getElementById('sign-up-form').reset()

		let validFeedbacks = document.getElementsByClassName('valid-feedback')
		for(let i = 0; i < validFeedbacks.length; i++) {
			validFeedbacks[i].style.display = 'none'
		}
		let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
		for(let i = 0; i < invalidFeedbacks.length; i++) {
			invalidFeedbacks[i].style.display = 'none'
		}
	}
	changeNavLinks(userDetails)

}
}

const signIn = () => {
	let enteredEmail = document.getElementById('login-email').value
	let enteredPassword = document.getElementById('login-password').value

	let requiredUser = USERS_DB.find(
    (user) =>
      user.email === enteredEmail && decrypt(user.password) === enteredPassword
  );

	if(requiredUser) {
		alert('Access granted!')
		changeNavLinks(requiredUser)
	} else {
		alert('Access denied!')
	}

	document.getElementById('sign-in-form').reset()
}

const goToHome = () => {
	document.getElementById('home').style.display = 'block'
	document.getElementById('sign-up').style.display = 'none'
	document.getElementById('sign-in').style.display = 'none'
}

const goToSignUp = () => {
	document.getElementById('sign-up').style.display = 'block'
	document.getElementById('home').style.display = 'none'
	document.getElementById('sign-in').style.display = 'none'
}

const goToSignIn = () => {
	document.getElementById('sign-in').style.display = 'block'
	document.getElementById('home').style.display = 'none'
	document.getElementById('sign-up').style.display = 'none'
}

const changeNavLinks = (currentUser) => {
	let { firstName, lastName } = currentUser

	document.getElementById('sign-up-nav-link').style.display = 'none'
	document.getElementById('sign-in-nav-link').style.display = 'none'
	document.getElementById('profile-nav-link').style.display = 'block'
	document.getElementById('sign-out-nav-link').style.display = 'block'
	
	document.getElementById('profile-nav-link').innerText = `Hi, ${firstName} ${lastName}`
}

const signOut = () => {
	document.getElementById('profile-nav-link').innerText = ''

	document.getElementById('sign-up-nav-link').style.display = 'block'
	document.getElementById('sign-in-nav-link').style.display = 'block'
	document.getElementById('profile-nav-link').style.display = 'none'
	document.getElementById('sign-out-nav-link').style.display = 'none'
}
