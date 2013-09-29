/*

*
* JavaScript
*
* Gustavo Melo
*
* 2013-08-01 14:11:21
*

---------------------------------------------------
====================== TIPOS ======================
---------------------------------------------------

Os programas de computador funcionam manipulando valores. Os tipos de valores que podem ser representados e manipulados em uma linguagem de programação são conhecidos como tipos, e uma das características mais fundamentais numa linguagem é o conjunto de tipos que ela aceita. Quando se precisa manter um valor para uso futuro, ele é atribuido à uma variável. Uma variável é nada mais nada menos do que um identificador (nome) para o valor.


Os tipos em javascript podem ser divididos em duas categorias: tipos primitivos (ou imutáveis, ou seja, não podem ser alterados) e tipos complexos(ou mutáveis, ou seja, podem ser alterados). 

- Tipos primitivos (números, strings, booleanos, null e undefined) = Quando voce acessa um tipo primitivo voce lida diretamente com seu valor.

	var foo = 1,
	    bar = foo;

	bar = 9;

	console.log(foo, bar); // => 1, 9


- Tipos complexos (objetos, arrays e funções) = Quando voce acessa um tipo complexo voce lida com a referência para seu valor.

	var foo = [1, 2],
	    bar = foo;

	bar[0] = 9;

	console.log(foo[0], bar[0]); // => 9, 9

# As funções que são escritas para serem usadas (com o operador new) para inicializar um objeto criado recentemente são conhecidas como construtoras. Cada construtora define uma classe de objetos (o conjunto de objetos inicializados por essa constutora). As classes podem ser consideradas como subtipos do tipo de objeto. Além das classes Array e Function, o javascript define outras três classes:

# Date (define objetos que representam as datas)

# RegExp (define objetos que representam expressões regulares, usada para comparação de padrões)

# Error (define objetos que representam erros de sintaxe e de execução)


2.1 - NÚMEROS

Todos os números em javascript  são representados como valores em ponto flutuante. Quando um número aparece diretamente em um programa javascript, ele é chamado de literal numérico.


2.2 - STRINGS

String é uma sequência de caracteres ordenada imutável de valores de 16 bits, imutáveis. Para utilizar uma string  é so colocar aspas simples ou aspas duplas em seu valor.

SEQUÊNCIAS DE ESCAPE:

\o  ->  O caractere NUL (\u0000)
\b  -> retrocesso (\u0008)
\t  -> tabulação horizontal (\u0009)
\n  -> nova linha (\u000A)
\v  -> tabulação vertical (\u000B)
\f  -> avanço de página (\u000C)
\r  -> retorno de carro (\u000D)
\"  -> aspas duplas (\u0022)
\'  -> aspas simples ou apóstrofo (\u0027)
\\  -> barra invertida (\u005C)
\x XX  -> O caractere Latin-1 especificado pelos dois dígitos hexadecimais XX 
\u XXXX  -> O caractere Unicode especificado pelos quatro dígitos hexadecimais XXXX

----
OBS: Se o caractere \ precede qualquer outro caractere que não sejam nenhum desses acima, a barra invertida é simplesmente ignorada.
----

TRABALHANDO COM STRINGS

var msg = 'hello' + 'world'  -> concatenar uma string
msg.length  -> determina o comprimento de uma string
msg.charAt(O) ou msg[0] -> "h": o primeiro caractere
msg.charAt(m.length-1) ou msg[msg.length-1] -> "d": o último caractere
msg.substring(1,4)  -> "ell": o 2º, 3º e 4º caracteres
msg.slice(1,4)  -> "ell": o 2º, 3º e 4º caracteres
msg.slice(-3)  -> "rld": os últimos 3 caracteres
msg.indexOf("l")  -> 2: posição da primeira letra "l"
msg.lastIndexOf("l")  -> 10: posição da ultima letra "l"
msg.indexOf("l", 3)  -> 3: posição do primeiro "l" em ou após 3
msg.split(",")  ->["hello", "world"] divide em substrings
msg.replace("h", "H")  -> "Hello, world": substitui todas as instrâncias
msg.toUpperCase()  -> "HELLO, WORLD": caixa alta

----
OBS: string são imutáveism, ou seja, os métodos replace() e toUpperCase() retornam novas string, eles não a modificam a string que são chamados.
----

2.3 - BOOLEANOS

Correspondem à dois valores, verdadeiro ou falso. Possuindo as palavras reservadas true e false.

Os valores a seguir são convertivos em false:

null
undefined
0
-0
NaN
""  //string vazia

----
OBS: os outros valores, incluindo todos os objetos funcionam como true.
----
OBS2:Os valores booleanos têm um método toString(), que pode ser usado para convertê-los nas strings "true" e "false".
----

OPERADORES BOOLEANOS:

&& (E)  -> avaliado como true se, e somente se, seus dois operandos são verdadeiros, caso contrário false.
|| (OU) -> avaliado como true se, um ou outro valor é verdadeiro, caso contrário false.
! (NÃO) -> avaliado como true se o seu operador for false.


2.4 - NULL E UNDEFINED

o null é uma palavra-chave que indica ausência de valor. Se usar o operador typeof em null ele retorna a string "object", indicando de que null pode ser considerado um valor de objeto que significa "nenhum objeto".

undefined é uma variável global indefinida que é inicializada com o valor indefinido. Se usar o operador typeof em undefined ele retorna a string "undefined", indicando que esse valor é o único membro de tipo especial.

----
OBS: Os dois indicam ausência de valor, os dois não possuem propriedades ou métodos. Se você tentar acessar uma propriedade com . ou [] acontecerar um TypeError.
----

3.5 - O OBJETO GLOBAL

O objeto global é um normal que tem um objetivo importante: as propriedades desse objeto são os símbolos definidos globalmente que estão disponíveis para um programa javascript.

Quando um interpretador javascript comeã, ou quando um navegador carra uma nova página, ele cria um objeto gloval e dáa ele um conjunto inicial de propriedades que define:

	- propriedades globais, como undefined, Infinity e NaN
	- funções globais, como isNaN(), parseInt() e eval()
	- funções construtoras, como Date(),RegExp(),String(),Object() e Array()
	- objetos globais, como Math e JSON

----
OBS: No código de nível superior, ou seja, aquele que não está dentro de uma função, pode-se usar a palavra-chave this para referir-se ao objeto global.
	var global = this;  // define uma variável global para se referir ao objeto global
----

No lado cliente, o objeto Window serve como objeto global para todo o código javascript contido na janela do browser. Esse objeto global Window tem uma propriedade de autoreferência window que pode ser usada no lugar de this para se referir ao objeto global.



*/
