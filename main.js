$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('form').on('submit', function (e){
        e.preventDefault();
    
        const endereco_imagem = $('#endereco-imagem').val()
        const novo_item = $('<li style="display: none"></li>')
        $(`<img src="${endereco_imagem}"   />`).appendTo(novo_item)
        $(`<div class="overlay-imagem-link" >
        <a href="${endereco_imagem}" taget="_blank" title="ver imagem em tamanho real">Ver Imagem em tamanho real</a>
        </div>`).appendTo(novo_item)
        $(novo_item).appendTo('ul')
        $(novo_item).fadeIn();
        $('#endereco-imagem').val('')
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })  
})
$(document).ready(function(){alert('Algo deu certo')})
 