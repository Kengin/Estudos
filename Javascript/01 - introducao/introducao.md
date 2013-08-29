----------------------------------
==== INTRODUÇÃO AO JAVASCRIPT ====
----------------------------------

É uma linguagem de programação de alto nível, dinâmica, interpretada e não tipada, coveniente para estilos de programação orientados a objetos e funcionais.

Javascript não é a mesma coisa que java.

=========== ESTRUTURA LÉXICA

A estrutura léxica é a sintaxe de nível mais baixo na linguagem, onde são especificados os detalhes de como são os nome de variáveis, os caracteres delimitadores para comentário e como uma instrução do programa é separada da seguinte.


1.1 - CONJUNTO DE CARACTERES

* Os programas javascript são escritos com o conjunto de caracteres unicode. Unicode é um superconjunto de ASCII Latin-1 e suporta praticamente todos os idiomas escritos usados hoje em dia.


1.2 - DIFERENCIAÇÃO ENTRE LETRAS MAIÚSCULAS E MINÚSCULAS

* O javascript é uma liguagem case sensitive, ou seja diferencia letras maiúsculas de minúsculas.


1.3 - ESPAÇOS EM BRANCO

* Ignora os espaços em branco que aparecem entre sinais em programas.


1.4 - COMENTÁRIOS

* comentário podem ser feitos de duas formas:

// comentário de uma linha

/*
comentário
de várias
linhas
*/


1.5 - LITERAIS

* literal é um valor de dados que aparece diretamente em um programa. por exemplo:

12  				// o número doze
1.2 				// o número um ponto dois
"hello"				//uma string de texto
true  				//um valor booleano
/javascript/gi      //uma expressão regular
null 				//ausência de objeto


1.6 - IDENTIFICADORES

* identificador é simplismente um nome, no qual são usados para dar nome as variáveis, funções e para fornecer rótulos para certos laços no código javascript.

OBS: um identificador sempre deve começar com uma letra, um sublinhado (_) ou um cifrã ($). números não dever ser colocados inicialmente para distinguir identificadores de números facilmente.


1.7 - PALAVRAS RESERVADAS

* No javascript existem palavras que são reservadas e não podem ser utilizadas como identificadores. Elas são:

break
delete
if
this
while
case
do
in
throw
with
catch
else
instanceof
try
continue
finally
new
typeof
debugger
for
return
var
default
function
switch
void

Outras que são reservadas para um futuro:

class
const
enum
export
extends
import
super


1.8 - PONTO E VÍRGULAS OPCIONAIS

* O javascript utiliza o ponto e vírgula para separar instruções. Isso é importante para tornar um código limpo, melhor de ser visualizado.
	
	Ocasiões que pode ser omitido o ponto e vírgula:

	- Entre duas instruções, caso as mesmas estejam em linhas separadas.
	- Quando for o final do programa
	- Se o proximo sinal é uma chave de fechamento.



