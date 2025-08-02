// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Lista de designs para o carrossel
const designs = [
    // ... (sua lista de designs permanece a mesma)
    {
        title: "Logotipo",
        description: "Design moderno para sua loja!",
        imageUrl: "imagens/logotipo.jpg",
        altText: "Logotipo moderno e colorido."
    },
    {
        title: "Adesivos Personalizados",
        description: "Estilizados com seu toque.",
        imageUrl: "imagens/cartazperso.jpg",
        altText: "Adesivos personalizados para embalagens."
    },
    {
        title: "Estampa de Blusas",
        description: "Estampa personalizada do seu gosto.",
        imageUrl: "imagens/atequeelavenha.jpg",
        altText: "Estampas personalizadas."
    },
    {
        title: "Planfetos Personalizados",
        description: "Planfetos chamativos e profissionais para o seu negócio.",
        imageUrl: "imagens/planfetofeijo.jpg",
        altText: "Planfetos de promoções."
    },
    {
        title: "Design para impressão",
        description: "Design feito para atender suas expectativas.",
        imageUrl: "imagens/arteimpresso.jpg",
        altText: "Design impresso."
    },
    {
        title: "Artes para Festa",
        description: "Design moderno e profissional para a sua festa.",
        imageUrl: "imagens/designfesta.jpg",
        altText: "Para festa."
    },
    {
        title: "Arte para caderno de Músicas e livros",
        description: "Capas personalizadas.",
        imageUrl: "imagens/capadepastademusica.jpg",
        altText: "Capa do caderno de música."
    },
    {
        title: "Arte para caderno de música.",
        description: "Para festas, redes sociais e para seu negócio.",
        imageUrl: "imagens/hinosdafesta.jpg",
        altText: "Capa do caderno de música.'"
    },
    {
        title: "Arte para Delivery",
        description: "Design para engajar seu negócio.",
        imageUrl: "imagens/postpao.jpg",
        altText: "Post de pães caseiros com informações de contato e preço"
    },
    {
        title: "Cartão de Bem-Vindos",
        description: "Cartão de visitas e para lembranças.",
        imageUrl: "imagens/cartaodeVisitas.jpg",
        altText: "Cartão personalizado para presentear."
    },
    {
        title: "Post 'Pães Caseiros'",
        description: "Design para delivery de pães artesanais",
        imageUrl: "imagens/Pão quentinho saindo moderno marrom para post retrato do instagram (1).jpg",
        altText: "Post de pães caseiros com informações de contato e preço"
    },
    {
        title: "Banner 'Festa dos Jovens'",
        description: "Banner para evento religioso",
        imageUrl: "imagens/Banner Festa dos Jovens (3).jpg",
        altText: "Banner do evento 'Festa dos Jovens' com uma pessoa orando"
    }
];

// Inicializar carrossel
function initCarousel() {
    const carousel = document.getElementById('design-carousel');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    designs.forEach(design => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide flex-shrink-0 w-[300px] h-[400px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'; // Adicionado 'cursor-pointer'
        slide.innerHTML = `
            <div class="w-full h-2/3 flex items-center justify-center overflow-hidden p-2">
                <img src="${design.imageUrl}" alt="${design.altText}" class="max-w-full max-h-full object-contain rounded-lg">
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-xl mb-2">${design.title}</h3>
                <p class="text-gray-700 text-base">${design.description}</p>
            </div>
        `;
        
        // Adicionar o evento de clique a cada slide
        slide.addEventListener('click', () => {
            modalImage.src = design.imageUrl;
            modalImage.alt = design.altText;
            modal.classList.remove('hidden');
        });

        carousel.appendChild(slide);
    });

    // Configurar navegação do carrossel
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Lógica para fechar o modal
    modalCloseBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// Chamar a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initCarousel);