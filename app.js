let names = [];
const nameEl = document.querySelector("#amigo");
const listEl = document.querySelector("#listaAmigos");

function insertName() {
	let name = nameEl.value;
	if (nameIsValid(name)) {
		names.push(name);
		nameEl.value = "";
	} else window.alert("Por favor, insira um nome válido!");
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

function sortName() {}
