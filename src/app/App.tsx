import { Heart, Coffee, Camera, Music, Book, Plane, Star, Moon, Sun, Sparkles, Gift, MessageCircle, Home, MapPin, Utensils, Film, Palette, Headphones, TreePine, Waves, Mountain, Flower2, Cake, Clock, Key, Umbrella, Watch, Glasses, Bookmark, Navigation, Feather, Award, Music2 } from 'lucide-react';
import { ExperienceCard } from './components/ExperienceCard';
import { ExperienceGroup } from './components/ExperienceGroup';

const experienceGroups = [
  {
    id: 1,
    title: "Momentos em Casa",
    experiences: [
      { id: 1, title: "Jantar Especial ", icon: Utensils, description: "Uma noite especial com vinhos e petiscos ( tartar de salmão, carpacio e queijos" },
      { id: 2, title: "Café da Manhã na Cama", icon: Coffee, description: "Começar o dia com carinho e amor" },
      { id: 3, title: "Almoço especial", icon: Utensils, description: "Risoto de limão com Bifes de  ancho" },
      { id: 4, title: "Ouvir Não Inviabilize", icon: Music2, description: "Compartilhar histórias e risadas" },
      { id: 5, title: "Noite de jogos", icon: Home, description: "Aconchego, intimidade e Competitividade" },
      { id: 6, title: "Cozinhar Juntos", icon: Utensils, description: "Preparar uma receita especial" },
      { id: 7, title: "Sessão de Cinema", icon: Film, description: "Filme romântico com doces" },
      { id: 8, title: "Fazer um Bolo", icon: Cake, description: "Doçura e diversão na cozinha" }
    ]
  },
  {
    id: 2,
    title: "Passeios com o Dandan ",
    experiences: [
      { id: 9, title: "Piquenique no Parque da Cidade ", icon: Sun, description: "Fazer um piquenique com queijo e frutas pro nosso ratinho" },
      { id: 10, title: "Passeio na praia a noite", icon: Moon, description: "Caminhar no calçadão de Camburi a noite" },
      { id: 11, title: "Noite de Estrelas num chalé ", icon: Star, description: "Observar as estrelas sob o céu noturno num chalé que funcione a hidormassagem" },
      { id: 12, title: "Passeio no Parque", icon: TreePine, description: "Natureza e ar fresco" },
      { id: 13, title: "Dia na Praia", icon: Waves, description: "Sol, mar e amor" },
      { id: 14, title: "Quadriciclo na montanha", icon: Mountain, description: "Aventura, superação, risadas e muito estresse" },
      { id: 15, title: "Passeio no museu Melo leitão", icon: Flower2, description: "Apreciar a beleza da natureza" },
      { id: 16, title: "Pôr do Sol no farol de Santa Luzia", icon: Glasses, description: "Admirar a beleza do entardecer" }
    ]
  },
  {
    id: 3,
    title: "Expressões Criativas",
    experiences: [
      { id: 17, title: "Sessão de Fotos", icon: Camera, description: "Capturar momentos inesquecíveis juntos com minha enorme habilidade com câmeras" },
      { id: 18, title: "Pintar bob goodies Juntos", icon: Palette, description: "Expressar amor através da arte" },
      { id: 19, title: "Ouvir Música", icon: Headphones, description: "Descobrir novas canções juntos" },
      { id: 20, title: "Cartas de Amor", icon: Bookmark, description: "Declarar nossa admiração de forma espontãnea" },
      { id: 21, title: "Escrever Poemas", icon: Feather, description: "Versos dedicados ao amor" },
      { id: 22, title: "Conversa Profunda", icon: MessageCircle, description: "Compartilhar sentimentos verdadeiros" },
      { id: 23, title: "Relembrar Memórias", icon: Watch, description: "Revisitar nossos momentos favoritos" },
      { id: 24, title: "Tempo de Qualidade", icon: Clock, description: "Apenas nós dois, sem pressa" }
    ]
  },
  {
    id: 4,
    title: "Descobertas e Surpresas",
    experiences: [
      { id: 25, title: "Viagem Surpresa", icon: Plane, description: "Aventura para um lugar especial que eu vou deidir" },
      { id: 26, title: "Explorar Lugares", icon: MapPin, description: "Descobrir novos cantinhos da cidade" },
      { id: 27, title: "Troca de Presentes", icon: Gift, description: "Surpresas que aquecem o coração" },
      { id: 28, title: "Momento Mágico", icon: Sparkles, description: "Criar memórias especiais" },
      { id: 29, title: "Escapada Romântica", icon: Key, description: "Um refúgio só nosso" },
      { id: 30, title: "Dançar na Zilda", icon: Umbrella, description: "Aproveitar cada momento" },
      { id: 31, title: "Nova Aventura", icon: Navigation, description: "Explorar o desconhecido juntos" },
      { id: 32, title: "Celebrar o Amor", icon: Award, description: "Cada dia é uma conquista" }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-6xl mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 300, color: '#d4a574' }}>
              32 experiências
            </p>
            <h1 className="text-4xl tracking-wide" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.1em', color: '#9a8777' }}>
              PARA A TALITA
            </h1>
          </div>

          <div className="w-64 h-64 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center bg-card shadow-lg">
            <div className="text-center">
              <Cake className="w-16 h-16 mx-auto mb-3 text-primary" />
              <p className="text-xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#d4a574' }}>
                Feliz Aniversário
              </p>
              <p className="text-2xl mt-2" style={{ fontFamily: 'Georgia, serif', color: '#6b5444' }}>
                Talita
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="space-y-16">
          {experienceGroups.map((group) => (
            <ExperienceGroup
              key={group.id}
              title={group.title}
              experiences={group.experiences}
            />
          ))}
        </div>
      </main>

      <footer className="py-12 mt-16 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <Heart className="w-8 h-8 mx-auto mb-3 text-primary" />
          <p className="text-muted-foreground" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Feito com amor e carinho
          </p>
        </div>
      </footer>
    </div>
  );
}