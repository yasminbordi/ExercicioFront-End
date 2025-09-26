function adicionarTarefa() {
 
    //recebe valor do input do usuário
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
   
    // se o valor do input for vazio então mostre uma mensagem de erro para o usuário
    if (tarefa == "") {
        //mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        //mensagem de tarefa adicionada com sucesso
        let mensagem = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagem
 
        //cria novo item (li) e insere na (lista ul)
        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }
 
    //limpa o input do usuário
    inputTarefa.value = ""
}