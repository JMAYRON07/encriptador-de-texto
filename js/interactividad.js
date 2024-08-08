const inputText = document.querySelector(".input-text");
const ouputText = document.querySelector(".ouput-text");

function buttonEncriptar(){
    const textoEncriptado = encriptar(inputText.value)
    ouputText.value = textoEncriptado
    inputText.value = "";
    ouputText.style.backgroundImage = "none"

}



function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i ++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}

function buttondesencriptar(){
    const textoEncriptado = desencriptar(inputText.value)
    ouputText.value = textoEncriptado
    inputText.value = "";
}

    function desencriptar(stringdesencriptada){
        let matrizCodigo  = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringdesencriptada = stringdesencriptada.toLowerCase()

        for (let i = 0; i< matrizCodigo.length; i++){
            if(stringdesencriptada.includes(matrizCodigo[i][1])){
                stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }

        }

        return stringdesencriptada
    }

    async function copiarTexto(){
        const ouputText = document.getElementById("ouputText");

        ouputText.select();
        ouputText.setSelectionRange(0,99999)
        try{
            await navigator.clipboard.writeText(ouputText.value);
        }catch (err){
            console.error("error al copiar el texto: ", err);
        }
            
       
    }
