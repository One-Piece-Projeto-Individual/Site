var dadoAtual;
var dadoMatriz;
var dadoMatrizUpper;

function MatrizJogo(){
    var celula = [      [0   ,0   ,0   ,0   ,"c"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,0   ,"h"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,"z"   ,"o"   ,"r"   ,"o"   ,0   ,"l"   ,0   ,"r"   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,0   ,"p"   ,0   ,0   ,0   ,"u"   ,"s"   ,"o"   ,"p"   ,"p"   ,0  ,0],
                        [0   ,0   ,0   ,0   ,"p"   ,0   ,0   ,0   ,"f"   ,0   ,"b"  ,"r"   ,"o"   ,"o"   ,"k"],
                        ["j"   ,"i"   ,"n"   ,"b"   ,"e"   ,0   ,0   ,0   ,"f"  ,0   ,"i"   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,"f"   ,"r"   ,"a"   ,"n"   ,"k"   ,"y"   ,0   ,"n"   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,0   ,0   ,0   ,"a"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,0   ,0   ,0   ,"m"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0],
                        [0   ,0   ,"s"   ,"a"   ,"n"   ,"j"   ,"i"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0]   
]; 
return celula;
}

function MatrizJogoUpper() {
    var celulaUpper =   [
                        [0   ,0   ,0   ,0   ,"C"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,0   ,"H"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,"Z"   ,"O"   ,"R"   ,"O"   ,0   ,"L"   ,0   ,"R"   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,0   ,"P"   ,0   ,0   ,0   ,"U"   ,"S"   ,"O"   ,"P"   ,"P"   ,0  ,0],
                        [0   ,0   ,0   ,0   ,"P"   ,0   ,0   ,0   ,"F"   ,0   ,"B"  ,"R"   ,"O"   ,"O"   ,"K"],
                        ["J"   ,"I"   ,"N"   ,"B"   ,"E"   ,0   ,0   ,0   ,"F"  ,0   ,"I"   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,"F"   ,"R"   ,"A"   ,"N"   ,"K"   ,"Y"   ,0   ,"N"   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,0   ,0   ,0   ,"A"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0],
                        [0   ,0   ,0   ,0   ,0   ,0   ,"M"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0],
                        [0   ,0   ,"S"   ,"A"   ,"N"   ,"J"   ,"I"   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,0]
                        ];
    return celulaUpper;
}


function inicializar(){
    var tabela = document.getElementById("palavras_cruzadas");
    dadoMatriz = MatrizJogo();
    dadoMatrizUpper = MatrizJogoUpper();

        for (var i=0 ; i < dadoMatriz.length ; i++){
            var linha = tabela.insertRow(-1);
            var dadoLinha = dadoMatriz[i];

            for(var j=0 ; j < dadoLinha.length ; j++){
                var cel = linha.insertCell(-1);

                if(dadoLinha[j] != 0){
                    var textoID = String('texto' + '_' + i + '_' + j);
                    cel.innerHTML ='<input type="text" class="formulario" style="text-transform: uppercase" maxlength="1" ' + 'id="' + textoID + '">';
                } else {
                    cel.style.backgroundColor = "black";
                }
            }
        }
        numeros_Dica();
    }


        function numeros_Dica(){
            document.getElementById("texto_2_8").placeholder = "7";
            document.getElementById("texto_2_3").placeholder = "3";
            document.getElementById("texto_6_6").placeholder = "1";
            document.getElementById("texto_3_8").placeholder = "10";
            document.getElementById("texto_9_2").placeholder = "6";
            document.getElementById("texto_0_4").placeholder = "2";
            document.getElementById("texto_2_10").placeholder = "5";
            document.getElementById("texto_6_3").placeholder = "9";
            document.getElementById("texto_4_10").placeholder = "4";
            document.getElementById("texto_5_0").placeholder = "8";
        }


function checar() {
    for (var i = 0; i < dadoMatriz.length; i++) {
        var dadoLinha = dadoMatriz[i];
        for (var j = 0; j < dadoLinha.length; j++) {
            if (dadoLinha[j] != 0) {
                var elemento = document.getElementById('texto' + '_' + i + "_" + j);
                if ((elemento.value != dadoMatriz[i][j]) && (elemento.value != dadoMatrizUpper[i][j])) {
                    elemento.style.backgroundColor = 'red';
                } else {
                    elemento.style.backgroundColor = 'green';
                }
            }    
        }
    }
}

function reiniciar() {
    currentTextInput = '';
    var tabela = document.getElementById("palavras_cruzadas");
    tabela.innerHTML = '';
    inicializar();
}