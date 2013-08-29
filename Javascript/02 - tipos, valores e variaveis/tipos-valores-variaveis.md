------------------------------------
==== TIPOS, VALORES E VARIÁVEIS ====
------------------------------------

Os programas de computador funcionam manipulando valores. Os tipos de valores que podem ser representados e manipulados em uma linguagem de programação são conhecidos como tipos, e uma das características mais fundamentais numa linguagem é o conjunto de tipos que ela aceita. Quando se precisa manter um valor para uso futuro, ele é atribuido à uma variável. Uma variável é nada mais nada menos do que um identificador (nome) para o valor.

# Os tipos em javascript podem ser divididos em duas categorias: tipos primitivos (ou imutáveis, ou seja, não podem ser alterados) e tipos de objeto(ou mutáveis, ou seja, podem ser alterados). 

-> Tipos primitivos = incluem: números, strings, booleanos, null e undefined. 

-> Tipos de objeto = Os objetos normais (conjunto não ordenado de valores nomeados), juntamente com os objetos especiais como Arrays (conjunto ordenado de valores numerados) e as funções (é um objeto que tem código executável associado) formam os tipos de objeto.

# As funções que são escritas para serem usadas (com o operador new) para inicializar um objeto criado recentemente são conhecidas como construtoras. Cada construtora define uma classe de objetos (o conjunto de objetos inicializados por essa constutora). As classes podem ser consideradas como subtipos do tipo de objeto. Além das classes Array e Function, o javascript define outras três classes:

# Date (define objetos que representam as datas)

# RegExp (define objetos que representam expressões regulares, usada para comparação de padrões)

# Error (define objetos que representam erros de sintaxe e de execução)


VARIÁVEIS

# variáveis em javascript não são tipadas: ou seja, você pode atribuir  um valor de qualquer tipo a uma variável e, posteriormente, atribuir um valor de tipo diferente para a mesma variável. 

# As variável são declaradas com a palavra-chave var.

# O javascript utiliza escopo léxico ou estático. As variáveis declaradas fora de uma função são consideradas variáveis globais e são visíveis por toda parte do código. Já as declaradas dentro de uma função, têm escopo de função, ou seja, so seram visíveis apenas para o código que aparece dentro da função.

