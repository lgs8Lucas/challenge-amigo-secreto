let names = [];
const nameEl = document.querySelector("#amigo");
const listEl = document.querySelector("#listaAmigos");
const resultEl = document.querySelector("#resultado");

function insertName() {
	let name = nameEl.value;
	if (nameIsValid(name)) {
		names.push(name);
		nameEl.value = "";
	} else window.alert("Por favor, insira um nome.");
	printName(name);
}

function nameIsValid(name) {
	return name != "" && name;
}

function printName(name) {
	const li = document.createElement("li");
	li.innerHTML = name;
	listEl.appendChild(li);
}

function sortName() {
	if (names.length == 0) {
		window.alert("Não há nenhum nome na lista!");
		return;
	}
	const sortedIndex = parseInt(Math.random() * names.length);
	resultEl.innerHTML =`O(a) escolhido(a) é ${names[sortedIndex]}`;
}
