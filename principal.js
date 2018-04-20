// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

function run(e){
	let dado4 = document.getElementById('quantidadeD4').value;
	let dado6 = document.getElementById('quantidadeD6').value;
	let dado8 = document.getElementById('quantidadeD8').value;
	let dado10 = document.getElementById('quantidadeD10').value;
	let dado12 = document.getElementById('quantidadeD12').value;
	let dado20 = document.getElementById('quantidadeD20').value;
	let resultadosString = '';
	let soma = 0;
	let resultadoEl = document.getElementById('resultado');
	let recipienteResultados = document.getElementById('recipienteResultados');

	for (var i = dado4 - 1; i >= 0; i--) {
		let resultado = Math.ceil(Math.random() * 4);
		resultadosString = resultadosString + ' + ' + resultado;
		soma = soma + resultado;
	}

	for (var i = dado6 - 1; i >= 0; i--) {
		let resultado = Math.ceil(Math.random() * 6);
		resultadosString = resultadosString + ' + ' + resultado;
		soma = soma + resultado;
	}

	for (var i = dado8 - 1; i >= 0; i--) {
		let resultado = Math.ceil(Math.random() * 8);
		resultadosString = resultadosString + ' + ' + resultado;
		soma = soma + resultado;
	}

	for (var i = dado10 - 1; i >= 0; i--) {
		let resultado = Math.ceil(Math.random() * 10);
		resultadosString = resultadosString + ' + ' + resultado;
		soma = soma + resultado;
	}

	for (var i = dado12 - 1; i >= 0; i--) {
		let resultado = Math.ceil(Math.random() * 12);
		resultadosString = resultadosString + ' + ' + resultado;
		soma = soma + resultado;
	}

	for (var i = dado20 - 1; i >= 0; i--) {
		let resultado = Math.ceil(Math.random() * 20);
		resultadosString = resultadosString + ' + ' + resultado;
		soma = soma + resultado;
	}

	if (resultadosString.length > 0) {
		resultadosString = resultadosString.substr(2) + ' = ' + soma;
		resultadoEl.innerHTML = resultadosString;
		recipienteResultados.classList.remove('oculto');
	} else {
		recipienteResultados.classList.add('oculto');
	}
};

let button = document.getElementById('rolar');
button.addEventListener('click', run);