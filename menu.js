// Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Lista de designs para o carrossel
        const designs = [
            {
                title: "Logotipo",
                description: "Design moderno para sua loja!",
                imageUrl: "imagens/logotipo.jpg",
                altText: "Post para Instagram com gradiente de cores quentes e tipografia impactante"
            },
            {
                title: "Adesivos personalizados",
                description: "Estilizados com seu toque.",
                imageUrl: "imagens/cartazperso.jpg",
                altText: "Cartão de visita minimalista com logo dourado e fundo escuro"
            },
            {
                title: "Panfleto Promocional",
                description: "Layout atraente para marketing",
                imageUrl: "https://placehold.co/800x500",
                altText: "Panfleto de oferta com fotos vibrantes de produtos e texto chamativo"
            },
            {
                title: "Apresentação Corporativa",
                description: "Slides profissionais para negócios",
                imageUrl: "https://placehold.co/800x500",
                altText: "Slide de apresentação com gráficos profissionais e branding consistente"
            },
            {
                title: "Banner para Site",
                description: "Hero banner para páginas web",
                imageUrl: "https://placehold.co/800x500",
                altText: "Banner horizontal com call-to-action claro e imagem de fundo relevante"
            }
        ];

        // Inicializar carrossel
        function initCarousel() {
            const carousel = document.getElementById('design-carousel');
            
            designs.forEach(design => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide flex-shrink-0 w-100 bg-white rounded-lg shadow-md overflow-hidden';
                slide.innerHTML = `
                    <img src="${design.imageUrl}" alt="${design.altText}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">${design.title}</h3>
                        <p class="text-gray-700">${design.description}</p>
                    </div>
                `;
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
        }

        // Chamar a função quando o DOM estiver pronto
        document.addEventListener('DOMContentLoaded', initCarousel);
