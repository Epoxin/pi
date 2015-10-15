function encryptText() {
	msg = document.querySelector('#crypt-wrapper textarea').value;
	key = document.querySelector('#crypt-wrapper input[type=text]').value;
	encryption = encrypt(msg, key);
	document.querySelector('#crypt-wrapper textarea').value = encryption;
}

function decryptText() {
	encryption = document.querySelector('#crypt-wrapper textarea').value;
	key = document.querySelector('#crypt-wrapper input[type=text]').value;
	msg = decrypt(encryption, key);
	document.querySelector('#crypt-wrapper textarea').value = msg;

	document.body.style.background = "url(" + msg + ") no-repeat top center";
	document.body.style.backgroundSize = "cover";

	urlElement.innerHTML = imgurl;
}

function random() {
	var r = Math.floor(Math.random() * 1e5);
	document.querySelector('#crypt-wrapper input[type=text]').value = r;
}
