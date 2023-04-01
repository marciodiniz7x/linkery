// Solicita dados à API do Instagram

$.ajax({

    url: "https://graph.instagram.com/{user-id}?fields=id,username,account_type,media_count,follows_count,followed_by_count&access_token={IGQVJXOUVnNUJhWEV2cVFlNlhoZAEs2QjFYM1UtMWs0SU0zT3drTFIwbGUyWU1qYVRDdl92NS0yTVBhX3k4ak14ZA0xkUGVTNGZASM0JIenpSeXdoZADhEM1dyUWVRUldtdXhSQUhPRWF0eklmRFlFX3N3UAZDZD}",
    method: "GET",
    dataType: "json",
    success: function(response) {
        // Lida com a resposta da API aqui
    },
    error: function(error) {
        console.log(error);
    }
    
});

