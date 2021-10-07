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
