// GERADOR DAS FRASES

let resultado = document.getElementById("resultados");

function gerar(){

   let frases = ["A dor é passageira, a glória é eterna.", 'A sorte acompanha os corajosos', 
                'Nada como um dia após o outro dia.', 'Acredite que você pode, assim você já está no meio do caminho.', 'Segredo de um bom treino: acreditar em você e ter paciência.', 'A disciplina é a mãe do êxito.', 'A persistência realiza o impossível.', 
                'Uma hora antes da academia: cansaço e vontade de ficar em casa. Uma hora depois da academia: aquele sentimento maravilhoso de dever cumprido.', 'O seu "eu" do futuro vai ser tão grato pelo esforço que você faz nos treinos do presente.', 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.', 'Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.', 'Desconfie do destino e acredite em você. Gaste mais horas realizando que sonhando, fazendo que planejando, vivendo que esperando porque, embora quem quase morre esteja vivo, quem quase vive já morreu.',
                'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!',
                'Estar decidido, acima de qualquer coisa, é o segredo do êxito.', 'Respire fundo, agradeça por esse dia e sinta o quão importante é, para você, assumir o controle da sua vida e conquistar seus objetivos.', 'A persistência é o caminho do êxito.', 'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.', 'No meio da dificuldade encontra-se a oportunidade.', 'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.', 'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.'
            ];

   let frase = Math.floor(Math.random() * frases.length);
    
   console.log(frases[frase]); // resultado aleatório

    resultado.innerHTML = frases[frase];
   


    console.log ("Calculando...");

}
