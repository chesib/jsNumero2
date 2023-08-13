// ---------------------------------desafio1------------------------------

const imgBord = document.querySelector("#imgBord");

imgBord.addEventListener("click", function () {
	if (imgBord.style.border === "") {
		imgBord.style.border = "5px solid red";
	} else {
		imgBord.style.border = "";
	}
});
// ----------------------------desafio2---------------------------------------

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const resultado = document.querySelector("#resultado");
const btnSticker = document.getElementById("btnSticker");

btnSticker.addEventListener("click", function () {
	const sumas =
		Number(input1.value) + Number(input2.value) + Number(input3.value);
	if (sumas <= 10) {
		resultado.innerHTML = sumas;
	} else {
		resultado.textContent = "sumaste mucho guaton ";
	}
});
// ------------------------desafio3--------------------------------
const btnPsw = document.getElementById("btnPsw");
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const answerPsw = document.getElementById("answerPsw");
const container = document.getElementById("container");

btnPsw.addEventListener("click", function () {
	const sumaSelect = select1.value + select2.value + select3.value;
	if (sumaSelect === "911") {
		answerPsw.innerHTML = "password correct";
		container.style.backgroundImage =
			"url(https://i.pinimg.com/736x/d0/4d/f8/d04df81245b7d584e6c27f4f53f052bf.jpg)";
	} else if (sumaSelect === "714") {
		answerPsw.innerHTML = "psw correct 2";
		container.style.backgroundImage =
			"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7vNVyzE5o1Urhj_rQwTd34MpqBQKauW5wsLyWzM8DznrZpmc2ZW2h-QdQw50xxjBX14&usqp=CAU)";
	} else {
		answerPsw.innerHTML = "incorrect";
		container.style.backgroundImage =
			"url(https://www.soy502.com/sites/default/files/styles/full_node/public/2022/Feb/05/meme_perrito_cuando_no_quieres_dar_explicaciones_soy502_guatemala.jpg)";
	}

	console.log(sumaSelect);
});
