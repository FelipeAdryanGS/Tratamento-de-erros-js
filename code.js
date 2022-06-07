const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("EntradaBotaoNUmero123...");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton() {
    arquivo = document.getElementById("EntradaDeArquivos");

    var fr = new FileReader();

    try {

        fr.readAsText(arquivo.files[0]);

        fr.onload = function () {
            info = fr.result;
            document.getElementById('SaidaDeArquivos').textContent = fr.result;
        }

        var info = document.getElementById('SaidaDeArquivos').textContent
        if (info == "") {
            throw "O arquivo selecionado esta vazio!"
        }

    }

    catch (error) {
        document.getElementById('SaidaDeArquivos').textContent = "O Arquivo nao foi localizado. Verifique se ele existente e tente novamente."
        alert(error)
    }

    finally {
        alert("Obrigado pela visita , volte sempre!! :D ");
    }



}

function clickNumberButton() {
    numero = document.getElementById("EntradaNumero123...").value 

    try{    
        if(numero == ''){                 
         throw 'Por favor , informe um valor'
        }
        else if (number <= 5 || number >= 10 ){                         
         throw 'Por favor , informe um valor maior que 5 e menor que 10' 
        }
    }

    catch(error){
    
      if(error != 'Por favor , informe um valor' && error != 'Por favor , informe um valor maior que 5 e menor que 10'){ 
        error = 'erro + erro javascript' // Pedi ajuda para o Fabio , nao fazia a minima ideia de como fazer o passo 4).
      }
      
      alert(error)
    }

    finally{
        alert("O numero escolhido foi " + numero)
    }
}



// 1) Inserir um campo de input com a mensagem "informe um valor entre 5 a 10" feito
    // 2) Verifica se é nulo, se for, lança exception "Informe um valor"  feito
    // 3) Verifica se é maior que 5 e menor que 10, se não for, lança exception  feito
    // "Informe um valor maior que 5 e menor que 10"  feito 
    // 4) Se o try falhar, lançar exception "Erro + erro javascript" não entendi oque é pra fazer 
    // 5) No finnaly informar "O número escolhido foi + " numero
