// Selecionando elementos do DOM com base em seus IDs
let btnMenu = document.getElementById('btn-menu'); // Botão de menu mobile
let menu = document.getElementById('menu-mobile'); // Menu móvel
let overlay = document.getElementById('overlay-menu'); // Overlay do menu

// Adicionando um ouvinte de evento de clique ao botão de menu mobile
btnMenu.addEventListener('click', () => {
    // Quando o botão é clicado, adicionamos a classe 'abrir-menu' ao menu para exibi-lo
    menu.classList.add('abrir-menu');
});

// Adicionando um ouvinte de evento de clique ao menu para fechar o menu quando clicado
menu.addEventListener('click', () => {
    // Quando o menu é clicado, removemos a classe 'abrir-menu' para escondê-lo
    menu.classList.remove('abrir-menu');
});

// Adicionando um ouvinte de evento de clique ao overlay do menu para fechar o menu quando clicado
overlay.addEventListener('click', () => {
    // Quando o overlay é clicado, removemos a classe 'abrir-menu' para esconder o menu
    menu.classList.remove('abrir-menu');
});

// Adicionando um ouvinte de evento de rolagem na janela do navegador
window.addEventListener("scroll", function() {
    // Selecionando o elemento 'header' com base no seu ID
    let header = document.querySelector('#header');

    // Alternando a classe 'rolagem' no elemento 'header' com base na posição de rolagem
    header.classList.toggle('rolagem', this.window.scrollY > 100);
    // Isso torna o menu fixo (adicionando a classe 'rolagem') quando o usuário rola a página para baixo.
});
