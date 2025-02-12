nota1 = 4;
console.log("A primeira nota é: "+nota1);

nota2 = 2;
console.log("A segunda nota é: "+nota2);

nota3 = 3;
console.log("A terceira nota é: "+nota3);

media = (nota1+nota2+nota3)/3;
console.log("A média é: "+media);

if (media >= 7){
    console.log("Aluno foi aprovado!!");
} else {
    console.log("Aluno foi reprovado!!");
}


while (nota1 > nota2 && nota1 > nota3){
    console.log("Esta é a maior nota: " + nota1);
    break;
} 
while (nota2 > nota1 && nota2 > nota3){
    console.log("Esta é a maior nota: " + nota2);
    break;
}

while (nota3 > nota1 && nota3 > nota2){
    console.log("Esta é a maior nota: " + nota3);
    break;
}
