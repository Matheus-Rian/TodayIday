 /* Exercício 1 - O interrogatório.
O agente Dale Cooper (foto) foi enviado pelo FBI para a pequena cidade de Twin Peaks para investigar sobre um terrível assassinato. Chegando lá ele encontrou 
uma polícia local totalmente ineficaz e resolveu solucionar o crime sozinho. 
No entanto, como ele não conhecia ninguém, teve que fazer um interrogatório com TODA A CIDADE. Exausto e perdido na investigação,  
resolveu como último recurso pedir para VOCÊ, um prodígio na programação, que criasse um código para automatizar o interrogatório.

Para ajudar a resolver o crime e salvar a pele do Agente Cooper, você deve criar um programa que:
Faça 5 perguntas para uma pessoa sobre o crime. As perguntas são:
1  - "Você conhecia a vítima?"
2  - "Você estava nos arredores do local do crime?"
3  - "Você tem algum álibi?"
4  - "Você já brigou por qualquer motivo com a vítima?"
5 - " Você já havia cometido algum crime semelhante antes?"

O programa deve no final emitir um parecer sobre a classificação da inocência da pessoa interrogada. 

A pessoa é declarada "culpada" se: 
   - Ela conhecia a vítima, estava nos arredores do crime, não tem álibi e se já brigou por qualquer motivo.
   - Não tem álibi, estava arredores e se já havia cometido algum crime semelhante antes.

A pessoa é considerada "muito suspeita" se:
     - Conhecia a vítima, estava nos arredores do crime, não tem álibi, mas não brigou com a vítima e nem havia cometido crime antes
     - Não conhecia a vítima, não estava nos arredores, mas não tem álibi e já havia cometido crime semelhante antes
     - Conhecia a vítima e Estava nos arredores do crime OU já havia brigado antes

Por fim, Cooper comentou que uma pessoa só é inocente se ela tiver álibi e que os casos que sobrarem podem ser contabilizados como "pouco suspeitos". */

let pessoaInterrogada = prompt('Qual seu nome?');
console.log(interrogatorio(pessoaInterrogada));

function interrogatorio(pessoa) {
	const perguntas = {
		pergunta1: confirm('Você conhecia a vítima?'),
		pergunta2: confirm('Você estava nos arredores do local do crime?'),
		pergunta3: confirm('Você tem algum álibi?'),
		pergunta4: confirm('Você já brigou por qualquer motivo com a vítima?'),
		pergunta5: confirm('Você já havia cometido algum crime semelhante antes?')
	};
	

	const culpada = perguntas.pergunta1 && perguntas.pergunta2 && !perguntas.pergunta3 && (perguntas.pergunta4 || perguntas.pergunta5);

	const muitoSuspeita = (perguntas.pergunta1 && perguntas.pergunta2 && !perguntas.pergunta3 && !perguntas.pergunta4 && !perguntas.pergunta5) || 
  (!perguntas.pergunta1 && !perguntas.pergunta2 && !perguntas.pergunta3 && perguntas.pergunta5) 
  || (perguntas.pergunta1 && (perguntas.pergunta2 || perguntas.pergunta4));

	if (perguntas.pergunta3) {
		pessoa = 'Inocente';
	} else if (culpada) {
		pessoa = 'Culpada';
	} else if (muitoSuspeita) {
		pessoa = 'Muito suspeita'
	} else {
		pessoa = 'Pouco Suspeita'
	}

	return pessoa
}
