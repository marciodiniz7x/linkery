// Solicita dados à API do Instagram

$.ajax({

    url: "https://graph.instagram.com/{user-id}?fields=id,username,account_type,media_count,follows_count,followed_by_count&access_token={Aqui vai o token da API}",
    method: "GET",
    dataType: "json",
    success: function(response) {
        // Lida com a resposta da API aqui
    },
    error: function(error) {
        console.log(error);
    }

});

// Seletor
const menu = document.querySelector('.menu');
const ambiente = document.querySelector('.ambiente');

// Evento menu
menu.addEventListener('click', () => {
    
});
