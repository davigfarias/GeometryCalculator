// Variáveis que serão usadas globalmente:
let base
let height
let result

let choice = "0"

alert('Olá! Sou uma calculadora geométrica!');

while (choice !== "6")
{
    choice = prompt('Escolha que tipo de calculo você deseja realizar\n\n1)Área do Triângulo\n2)Área do retângulo\n3)Área do quadrado\n4)Área do trapézio\n5)Área do círculo\n6)Sair');

    if(choice === "1")
    {
        function triangle(base, height)
        {
            return base * height/2
        }

        base = Number(prompt('Me dê o valor da base: '))
        height = Number(prompt('Me dê o valor da altura: '))

        result = triangle (base, height)

        alert('O valor do triângulo é ' + result)
    }

    if (choice === "2")
    {
        function rectangle(base, height)
        {
            return base * height
        }

        base = Number(prompt('Me dê o valor da base: '))
        height = Number(prompt('Me dê o valor da altura: '))

        result = rectangle (base, height)

        alert('O valor do retângulo é ' + result)
    }

    if(choice === "3")
    {
        function square(side)
        {
            return side * side
        }

        let side = Number(prompt('Me dê o valor da base: '))

        result = square (side)

        alert('O valor do quadrado é ' + result)

    }

    if(choice === "4")
    {

        function trapeze(minorBase, higherBase, height)
        {
            return (minorBase + higherBase) * height/2
        }

        let minorBase = Number(prompt('Me dê o valor da base menor: '))
        let higherBase = Number(prompt('Me dê o valor da base maior: '))
        height = Number(prompt('Me dê o valor da altura: '))

        result = trapeze (minorBase, higherBase, height)

        alert('O valor do trapézio é ' + result)
    }

    if(choice === "5")
    {
        function area (radius)
        {
            return 3.14 * (radius * radius)
        }

        let radius = Number(prompt('Me dê o valor do raio: '))

        result = area (radius)

        alert('O valor do trapézio é ' + result)
    }
}

alert ('Encerrando a calculadora')