let botao = document.getElementById('button')

botao.addEventListener('click', function(evento) {
    evento.preventDefault();
    requisicao();
});


function requisicao(){
    $(".cabecalho").css("display", "none")
    let data = $('input[type="date"]').val();
    
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=rgzSfze7r8Dv8EOuetDMii5O1DO05h1aBeSlLvuX&date=${data}`,
    
    success: function(result) {
        console.log(result);
        exibeConteudo(result);
    },
    error: function(error){
        console.log(error)
    }

})};

function exibeConteudo(result){
    
    if(result.media_type === "image"){
        $(".imagem").html(`<img id="imag"src="${result.url}">`)
    }else{
        $("#imag").css("display","none");
        $(".video").html(`<video id="video"src="${result.url}">`)
    }
    
    $("#titulo").html(`${result.title}`)
    $("#data").html(`${result.date}`)
    $("#creditos").html(`Créditos: ${result.copyright}`)
    $("#texto").html(` ${result.explanation}`)
}

