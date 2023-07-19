const primeiroNome = prompt("Informe o primeiro nome")
const sobrenome = prompt("informe o seu sobrenome")
const areaDeEstudo = prompt("Informe sua area de estudo")
const anoDeNascimento = prompt("informe seu ano de nascimento")

alert(
    "Recruta cadastrado com sucesso!  " + 
    "Nome completo: " + primeiroNome + " " + "Sobenome: " + sobrenome + 
    "Campo de estudo: " + areaDeEstudo + 
    "idade: " + (2023 - anoDeNascimento)
)