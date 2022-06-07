const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton() {
    arquivo = document.getElementById("inputfile");

    var fr = new FileReader();

    try {

        fr.readAsText(arquivo.files[0]);

        fr.onload = function () {
            info = fr.result;
            document.getElementById('outputfile').textContent = fr.result;
        }
        var info = document.getElementById('outputfile').textContent
        if (info == "") {
            throw "O arquivo selecionado esta vazio"
        }
    }

    catch (error) {
        document.getElementById('outputfile').textContent = "O arquivo nao foi encontrado , tente novamente"
        alert(error)
    }

    finally {
        alert("Obrigado pela visita , volte sempre");
    }



}

function clickNumberButton() {
    numero = document.getElementById("inputnumber").value

    try{    
        if(numero == null ){ throw 'Por favor , informe um valor'
        }
        if(numero < 5 || numero > 10 ) { throw 'Por favor , informe um valor maior que 5 e menor que 10' 
        }
    }

    catch(error){
    
        document.getElementById('outputnumber').textContent = "error + erro javascript"
      alert(error)
    }

    finally{
        alert("O numero escolhido foi " + numero )
    }
}

// 1) Inserir um campo de input com a mensagem "informe um valor entre 5 a 10"            feito
    // 2) Verifica se é nulo, se for, lança exception "Informe um valor"                   feito
    // 3) Verifica se é maior que 5 e menor que 10, se não for, lança exception             feito
    // "Informe um valor maior que 5 e menor que 10"                                         feito
    // 4) Se o try falhar, lançar exception "Erro + erro javascript"                        não entendi oque foi proposto
    // 5) No finnaly informar "O número escolhido foi + " numero                                 feito