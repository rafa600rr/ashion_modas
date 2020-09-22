

window.onload = function(){
    // Vetor de produtos
    let produtos = []

    document.getElementById("produto1").addEventListener("click", () =>{
        let prod1 = "Camisa Feminina"
        let valor1 = 89.90

        produtos.push({"produto":prod1, "valor":valor1})
        document.getElementById("contarIten").innerHTML = produtos.length  

    })

    document.getElementById("produto2").addEventListener("click", () =>{
        let prod2 ="Casaco Rosa"
        let valor2 = 89.90

        produtos.push({"produto":prod2, "valor":valor2})
        document.getElementById("contarIten").innerHTML = produtos.length  

    })

    document.getElementById("produto3").addEventListener("click", () =>{
        let prod3 = "Vestido"
        let valor3 = 89.90

        produtos.push({"produto":prod3, "valor":valor3})
        document.getElementById("contarIten").innerHTML = produtos.length  

    })

    document.getElementById("produto4").addEventListener("click", () =>{
        let prod4 = "Camisa Masculina"
        let valor4 = 89.90

        produtos.push({"produto":prod4, "valor":valor4})
        document.getElementById("contarIten").innerHTML = produtos.length  

    })

    document.getElementById("produto5").addEventListener("click", () =>{
        let prod5 = "Camisa Social Masculina"
        let valor5 = 89.90

        produtos.push({"produto":prod5, "valor":valor5})
        document.getElementById("contarIten").innerHTML = produtos.length  

    })

    document.getElementById("produto6").addEventListener("click", () =>{
        let prod6 = "Calça E Camisa Feminina"
        let valor6 = 89.90

        produtos.push({"produto":prod6, "valor":valor6})
        document.getElementById("contarIten").innerHTML = produtos.length  

    })

    document.getElementById("produto7").addEventListener("click", () =>{
        let prod7 = "Blusinha Branca"
        let valor7 = 89.90

        produtos.push({"produto":prod7, "valor":valor7})
        document.getElementById("contarIten").innerHTML = produtos.length  

    })

    document.getElementById("produto8").addEventListener("click", () =>{
        let prod8 = "Camisa Feminina Amarela"
        let valor8 = 89.90

        produtos.push({"produto":prod8, "valor":valor8})
        document.getElementById("contarIten").innerHTML = produtos.length  

    })
        
    document.getElementById("cesta").addEventListener("click", () =>{

                for(let i = 0; i < produtos.length; i++){

                    document.write("<h3 id=''>"+produtos[i].produto + " - " +produtos[i].valor+ "</h3>" + "<hr>")
                
                }


                document.write("<a href=''> Voltar </a>")
    })
}