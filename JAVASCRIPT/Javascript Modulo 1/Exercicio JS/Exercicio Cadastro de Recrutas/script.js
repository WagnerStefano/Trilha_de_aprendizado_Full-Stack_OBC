const primeiroNome = prompt("Informe o primeiro nome")
const sobrenome = prompt("informe o seu sobrenome")
const areaDeEstudo = prompt("Informe sua area de estudo")
const anoDeNascimento = prompt("informe seu ano de nascimento")

alert(
    "Recruta cadastrado com sucesso!\n  " + 
    "\nNome completo: " + primeiroNome + " " + "\nSobenome: " + sobrenome + 
    "\nCampo de estudo: " + areaDeEstudo + 
    "\nidade: " + (2023 - anoDeNascimento)
)