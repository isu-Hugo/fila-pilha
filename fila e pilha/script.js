const entrada = document.getElementById('entrada');
const add = document.getElementById('add');
const lista = document.getElementById('lista');
const rem = document.getElementById('rem');
const head = document.getElementById('head');

var vetor = [];

function adicionarVetor(text){
    vetor.push(text);
    
}

function atualizarLista(){
    lista.innerHTML = "";
    entrada.value = "";

    for (item in vetor){
        let li = document.createElement("li");
        li.textContent = vetor[vetor.length-1 - item];
        lista.appendChild(li);    
    }

    head.innerHTML = `Adicionar item [ ${vetor.length} ]`;

}


add.addEventListener('click', () =>{
    let input = entrada.value;
    if(input == "") return;
    adicionarVetor(input);
    atualizarLista();
});

rem.addEventListener('click', () =>{
    vetor.pop();
    atualizarLista();
});

document.addEventListener('keydown', (evento) =>{
    if (evento.key == "Enter"){
        let input = entrada.value;
        if(input == "") return;
        adicionarVetor(input);
        atualizarLista();
    }

    if (evento.key == "Delete"){
        vetor.pop();
        atualizarLista();   
    }
    //console.log(evento.key);

});