# 1. The Role of Algorithms in Computing

## 1.1 - Algorithms

"Informally, an algorithm is any well-defined computational procedure that takes
some value, or set of values, as input and produces some value, or set of values, as
output."

NP-complete: Problemas onde **ainda** não foram encontrados algoritmos eficientes para solucionar.

Convex Hull: Algoritmos de ligação entre dois pontos.

### Exercises

**1.1-1: Give a real-world example that requires sorting or a real-world example that re-
quires computing a convex hull.**

Uma empresa que faz serviços baseada em comandas, por exemplo, as vezes necessita ordenar essas comandas em ordem diferente, seja ordem crescente do número do pedido, decrescente, ou por ordem alfabética, e nem sempre esses dados são armazenados ordenados no banco de dados.

**1.1-2: Other than speed, what other measures of efficiency might one use in a real-world
setting?**

Desperdício de recursos ou energia.

**1.1-3: Select a data structure that you have seen previously, and discuss its strengths and
limitations.**

Arrays. Tem a vantagem de armazenar uma quantidade muito grande de dados. Como desvantagem, a cada operação que você precisa fazer dentro dela, como acrescentar um novo elemento em uma ordem correta, requer que você manipule uma quantidade muito maior de dados dentro da array do que o elemento em si.

**1.1-4: How are the shortest-path and traveling-salesman problems given above similar?
How are they different?**

Na shortest-path, você encontra o menor caminho possível, enquanto na traveling-salesman, você acrescenta a condição das paradas no meio do caminho, além de todo percurso ser um ciclo. O segundo problema impõe condições durante o percurso.

**1.1-5: Come up with a real-world problem in which only the best solution will do. Then
come up with one in which a solution that is “approximately” the best is good
enough.**

Quando você precisa ordenar os pedidos de uma empresa em ordem decrescente, uma solução aproximada causará muita confusão, portanto é necessário uma solução ideal.

Para gerar um plano de corte seguindo a "Cutting Stock Problem', pode ser difícil obter a solução ideal, portanto a solução mais próxima do desperdício mínimo possível já seria útil.

## 1.2 - Algorithms as a technology

### Eficiencia

Algoritmos podem demonstrar diferentes eficiencias de acordo com o problema apresentado. No livro, é mencionado sobre como o **insertion sort** é mais rápido do que o **merge sort** quando se trata de ordenar arrays pequenas, mas em um certo momento, o **merge sort** se torna extremamente mais eficiente.

Em um dos exemplos apresentados, é feito um cálculo com um computador A 1000 vezes mais rápido do que um computador B, porém ao ordenar uma array de 10 milhões de itens, com o computador A utilizando o **insertion sort** e o computador B utilizando o **merge sort**, o computador B foi 17 vezes mais rápido do que o computador A.

### Exercícios

**1.2-1: Give an example of an application that requires algorithmic content at the applica-
tion level, and discuss the function of the algorithms involved.**

Uma aplicação para a criação de um plano de corte, por exemplo, requer um algoritmo que ajude a resolver o problema do "Cutting Stock Problem" de maneira eficiente. Como não existe uma responsta correta, os algoritmos buscam aproximar o máximo possível na solução do problema, tentando calcular a melhor possibilidade que tenha o mínimo desperdício. E como existem milhões de formas diferentes de se montar um plano de cortes, o algoritmo também influencia na velocidade na qual será calculado.

**1.2-2: Suppose we are comparing implementations of insertion sort and merge sort on the
same machine. For inputs of size n, insertion sort runs in 8n 2 steps, while merge
sort runs in 64n lg n steps. For which values of n does insertion sort beat merge
sort?**

Calcular 8n^2 < 64n lgn
n = 44

**1.2-3: What is the smallest value of n such that an algorithm whose running time is 100n 2
runs faster than an algorithm whose running time is 2 n on the same machine**

Calcular 100^n < 2^n
n = 15
