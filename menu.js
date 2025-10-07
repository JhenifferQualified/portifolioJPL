// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Unifica todos os designs em uma única lista
const allDesigns = [
    {
        title: "Identidade Visual e Logotipos",
        description: "Profissionalize sua marca com um logo memorável.",
        imageUrl: "imagens/logotipo.jpg",
        altText: "Logotipo moderno para marca de roupas."
    },
    {
        title: "Adesivos e Rótulos Exclusivos",
        description: "Destaque seus produtos com um toque único de marca.",
        imageUrl: "imagens/cartazperso.jpg",
        altText: "Adesivo para embalagem artesanal."
    },
    {
        title: "Design para Estampas",
        description: "Transforme suas ideias em estampas de moda únicas.",
        imageUrl: "imagens/atequeelavenha.jpg",
        altText: "Estampa de camiseta com frase religiosa."
    },
    {
        title: "Flyers e Panfletos Profissionais",
        description: "Artes visuais que atraem e convertem clientes.",
        imageUrl: "imagens/planfetofeijo.jpg",
        altText: "Flyer de feijoada com informações."
    },
    {
        title: "Materiais Impressos de Alta Qualidade",
        description: "Design profissional para todos os seus materiais impressos.",
        imageUrl: "imagens/arteimpresso.jpg",
        altText: "Design digital pronto para impressão."
    },
    {
        title: "Convites e Kits de Festa Personalizados",
        description: "Crie uma identidade visual completa para a sua festa.",
        imageUrl: "imagens/designfesta.jpg",
        altText: "Convite digital com tema de festa."
    },
    {
        title: "Design de Capas para Livros e Cadernos",
        description: "Capas que fazem sua obra se destacar.",
        imageUrl: "imagens/capadepastademusica.jpg",
        altText: "Capa de caderno com arte dourada 'Manancial'."
    },
    {
        title: "Identidade Visual para Eventos",
        description: "Designs coesos para eventos e mídias sociais.",
        imageUrl: "imagens/hinosdafesta.jpg",
        altText: "Capa de pasta de música 'Hinos da Festa'."
    },
    {
        title: "Artes para Mídias Sociais e Delivery",
        description: "Posts criativos para engajar e impulsionar vendas.",
        imageUrl: "imagens/postpao.jpg",
        altText: "Post de delivery de pães."
    },
    {
        title: "Cartões de Visita e Agradecimento",
        description: "Crie conexões duradouras com cartões que impressionam.",
        imageUrl: "imagens/cartaodeVisitas.jpg",
        altText: "Cartão de agradecimento para clientes."
    },
    {
        title: "Mockups para Estampas de Camisas",
        description: "Estampas feitas para elevar sua idêntidade visual.",
        imageUrl: "imagens/Estampablusa1.jpg",
        altText: "Mockup de camisa com estampa personalizada."
    },
    {
        title: "Banners para Eventos",
        description: "Designs marcantes para congressos e eventos memoráveis.",
        imageUrl: "imagens/Banner Festa dos Jovens (3).jpg",
        altText: "Banner para congresso com tema religioso."
    },
    {
        title: "Design de Estampas Personalizadas",
        description: "Artes exclusivas para blusas, canecas, livros e mais.",
        imageUrl: "imagens/blusaestampa.jpg",
        altText: "Estampa de blusa para festa de jovens."
    },
    {
        title: "Conteúdo para Redes Sociais",
        description: "Posts que engajam e fortalecem a presença digital do seu negócio.",
        imageUrl: "imagens/cartazredessociais.jpg",
        altText: "Post de festa para redes sociais."
    }
];

function setupModalListeners() {
    const modal = document.getElementById('image-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (modal) {
        modalCloseBtn.addEventListener('click', () => modal.classList.add('hidden'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }
}

// Função que cria um card e adiciona o evento de clique
function createCardHTML(design, isCarousel = false) {
    const card = document.createElement('div');
    const cardBaseClass = 'bg-white rounded-lg shadow-md overflow-hidden cursor-pointer flex flex-col';

    if (isCarousel) {
        card.className = `carousel-slide flex-shrink-0 w-[320px] h-[450px] ${cardBaseClass}`;
    } else {
        card.className = `design-card w-full h-[450px] ${cardBaseClass}`;
    }

    card.innerHTML = `
        <div class="w-full h-[70%] flex items-center justify-center overflow-hidden p-2 flex-shrink-0">
            <img src="${design.imageUrl}" alt="${design.altText}" class="max-w-full max-h-full object-contain rounded-lg" />
        </div>
        <div class="w-full h-[30%] p-4">
            <h3 class="font-semibold text-lg mb-2">${design.title}</h3>
            <p class="text-gray-600">${design.description}</p>
        </div>
    `;

    card.addEventListener('click', () => {
        const modalImage = document.getElementById('modal-image');
        const modal = document.getElementById('image-modal');
        modalImage.src = design.imageUrl;
        modalImage.alt = design.altText;
        modal.classList.remove('hidden');
        modalImage.classList.add('img-pop');
        setTimeout(() => modalImage.classList.remove('img-pop'), 400);
    });

    return card;
}

function initPortfolio() {
    const carouselContainer = document.getElementById('design-carousel');
    const staticGridContainer = document.getElementById('static-cards-grid');

    allDesigns.forEach((design, index) => {
        if (index < 11) {
            carouselContainer.appendChild(createCardHTML(design, true));
        } else {
            staticGridContainer.appendChild(createCardHTML(design));
        }
    });

    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    prevBtn.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    nextBtn.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupModalListeners();
    initPortfolio();
});
