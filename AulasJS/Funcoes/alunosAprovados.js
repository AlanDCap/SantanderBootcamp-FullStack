const alunos = [
	{
		nome: 'José',
		nota: 9,
		turma: '7MA',
	},
	{
		nome: 'Maria',
		nota: 10,
		turma: '8TB',
	},
	{
		nome: 'Josefina',
		nota: 4,
		turma: '9MB',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));