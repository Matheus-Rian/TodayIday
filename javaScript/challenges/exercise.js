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

const suspect = prompt('Qual seu nome?');

console.log(Interrogate(suspect))

function getResults(suspectAnswers) {

  const Results = {
    Innocent: 'Innocent',
    verySuspicious: 'Very Suspicious',
    lessSuspicious: 'Less Suspicious',
    guilty: 'Guilty',
  }

  const {
    knewVictim,
    wasAround,
    hasAlibi,
    foughtVictim,
    hasComittedCrime,
  } = suspectAnswers

  const conditions = {
    guilty: knewVictim && wasAround && !hasAlibi && (foughtVictim || hasComittedCrime),
    verySuspicious: (knewVictim && wasAround && !hasAlibi && !foughtVictim && !hasComittedCrime) ||
      (!knewVictim && !wasAround && !hasAlibi && hasComittedCrime) ||
      (knewVictim && (wasAround || foughtVictim)),
  }


  if (hasAlibi) return Results.Innocent

  if (conditions.guilty) {
    return Results.guilty
  } else if (conditions.verySuspicious) {
    return Results.verySuspicious
  } else {
    return Results.lessSuspicious
  }
}

function Interrogate(suspect) {
  const questions = {
    knewVictim: confirm('Você conhecia a vítima?'),
    wasAround: confirm('Você estava nos arredores do local do crime?'),
    hasAlibi: confirm('Você tem algum álibi?'),
    foughtVictim: confirm('Você já brigou por qualquer motivo com a vítima?'),
    hasComittedCrime: confirm('Você já havia cometido algum crime semelhante antes?')
  };

  const result = getResults(questions)

  return result
}

