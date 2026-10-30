
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">
            <span>INDIE</span>
            <strong>PULSE</strong>
          </a>

          <nav className="navigation">
            <a href="#inicio" className="active">Início</a>
            <a href="#noticias">Notícias</a>
            <a href="#lancamentos">Lançamentos</a>
            <a href="#atualizacoes">Atualizações</a>
            <a href="#estudios">Estúdios</a>
          </nav>

          <button className="search-button" aria-label="Buscar">
            <span>⌕</span>
          </button>

          <button className="menu-button" aria-label="Abrir menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main id="inicio">
        <div className="page-container">
          <section className="intro">
            <span className="eyebrow">JOGOS INDEPENDENTES, EM FOCO</span>
            <h1>O pulso da cena indie</h1>
            <p>Notícias, atualizações e estúdios para acompanhar.</p>
          </section>

          <section className="highlights" aria-label="Notícias em destaque">
            <article className="main-highlight">
              <div className="image-placeholder main-image">
                <span>IMAGEM PRINCIPAL</span>
              </div>

              <div className="main-highlight-content">
                <span className="category">NOVO PROJETO</span>
                <h2>Novo capítulo de uma aventura indie é anunciado</h2>
                <p className="metadata">Moonforge Studio · 16 out. 2026</p>
                <p className="description">
                  A equipe revelou os primeiros detalhes da sequência e promete
                  um mundo maior, novos personagens e desafios inéditos.
                </p>
                <a href="#noticias" className="read-more">LER NOTÍCIA →</a>
              </div>
            </article>

            <div className="secondary-highlights">
              <h2 className="section-title">Mais destaques</h2>

              <article className="secondary-highlight">
                <div className="image-placeholder secondary-image">
                  <span>THUMB</span>
                </div>
                <div>
                  <span className="category">ATUALIZAÇÃO</span>
                  <h3>Atualização melhora o desempenho de Hollow Vale</h3>
                  <p className="metadata">Pinecone Games · 15 out. 2026</p>
                </div>
              </article>

              <article className="secondary-highlight">
                <div className="image-placeholder secondary-image">
                  <span>THUMB</span>
                </div>
                <div>
                  <span className="category">EVENTO</span>
                  <h3>Festival indie confirma nova edição online</h3>
                  <p className="metadata">Indie Connect · 14 out. 2026</p>
                </div>
              </article>
            </div>
          </section>

          <div className="content-layout">
            <section className="news-section" id="noticias">
              <div className="section-heading">
                <h2 className="section-title">Últimas notícias</h2>
                <p>Novidades recentes de jogos e estúdios.</p>
              </div>

              <div className="news-grid">
                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">LANÇAMENTO</span>
                    <h3>Cidades flutuantes chegam em Skybound</h3>
                    <p className="game-name">Skybound</p>
                    <p className="metadata">15 out. 2026</p>
                    <p className="description">Aventura narrativa estreia para PC com exploração e personagens inéditos.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">CORREÇÃO DE BUGS</span>
                    <h3>Patch corrige travamentos no modo cooperativo</h3>
                    <p className="game-name">Mosslight</p>
                    <p className="metadata">14 out. 2026</p>
                    <p className="description">Atualização foca na estabilidade das partidas e no sistema de salvamento.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">DLC</span>
                    <h3>Expansão adiciona uma região inédita</h3>
                    <p className="game-name">Below the Lantern</p>
                    <p className="metadata">12 out. 2026</p>
                    <p className="description">A nova expansão apresenta uma área para explorar, personagens e desafios.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">NOVO JOGO</span>
                    <h3>Estúdio anuncia RPG tático por turnos</h3>
                    <p className="game-name">Copper Owl</p>
                    <p className="metadata">10 out. 2026</p>
                    <p className="description">O novo projeto foi revelado com um trailer que apresenta seu universo.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">ESTÚDIO</span>
                    <h3>Conheça a equipe por trás de Tiny Harbor</h3>
                    <p className="game-name">Tiny Harbor</p>
                    <p className="metadata">09 out. 2026</p>
                    <p className="description">Conheça a história de um pequeno estúdio independente e seus projetos.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">ATUALIZAÇÃO</span>
                    <h3>Modo fotografia chega em versão gratuita</h3>
                    <p className="game-name">Neon Orchard</p>
                    <p className="metadata">08 out. 2026</p>
                    <p className="description">A atualização adiciona opções de câmera, filtros e novos recursos visuais.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">LANÇAMENTO</span>
                    <h3>Echoes of Ember ganha data oficial de estreia</h3>
                    <p className="game-name">Echoes of Ember</p>
                    <p className="metadata">07 out. 2026</p>
                    <p className="description">A aventura de fantasia chegará aos computadores ainda neste mês.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">DLC</span>
                    <h3>Nova expansão traz desafios subterrâneos</h3>
                    <p className="game-name">Deepwood</p>
                    <p className="metadata">06 out. 2026</p>
                    <p className="description">O conteúdo adicional apresenta mapas, inimigos e equipamentos inéditos.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">NOVO JOGO</span>
                    <h3>Projeto independente mistura música e exploração</h3>
                    <p className="game-name">Soundfall Stories</p>
                    <p className="metadata">04 out. 2026</p>
                    <p className="description">O estúdio apresentou uma prévia de sua nova experiência interativa.</p>
                  </div>
                </article>

                <article className="news-card">
                  <div className="image-placeholder news-image"><span>THUMBNAIL DO JOGO</span></div>
                  <div className="news-card-content">
                    <span className="category">CORREÇÃO DE BUGS</span>
                    <h3>Atualização resolve problemas de desempenho</h3>
                    <p className="game-name">Pixel Frontier</p>
                    <p className="metadata">02 out. 2026</p>
                    <p className="description">O novo patch melhora a taxa de quadros e corrige erros relatados pela comunidade.</p>
                  </div>
                </article>
              </div>
            </section>

            <aside className="events-section" id="lancamentos">
              <div className="section-heading">
                <h2 className="section-title">Próximos lançamentos e eventos</h2>
                <p>Agenda indie — lançamentos, showcases e apresentações.</p>
              </div>

              <div className="events-list">
                <article className="event-item">
                  <div className="image-placeholder event-image"><span>ÍCONE</span></div>
                  <div className="event-content">
                    <span className="event-date">22 OUT. 2026</span>
                    <h3>Echoes of Ember</h3>
                    <p className="event-organizer">Lantern Fox</p>
                    <p className="event-description">Lançamento para PC.</p>
                  </div>
                </article>

                <article className="event-item">
                  <div className="image-placeholder event-image"><span>ÍCONE</span></div>
                  <div className="event-content">
                    <span className="event-date">28 OUT. 2026</span>
                    <h3>Indie Worlds Showcase</h3>
                    <p className="event-organizer">Indie Connect</p>
                    <p className="event-description">Apresentação online de novos projetos.</p>
                  </div>
                </article>

                <article className="event-item">
                  <div className="image-placeholder event-image"><span>ÍCONE</span></div>
                  <div className="event-content">
                    <span className="event-date">05 NOV. 2026</span>
                    <h3>Tiny Harbor: Marés</h3>
                    <p className="event-organizer">Tiny Harbor</p>
                    <p className="event-description">Lançamento em acesso antecipado.</p>
                  </div>
                </article>
              </div>
            </aside>
          </div>

          <section className="studios-section" id="estudios">
            <div className="section-heading">
              <h2 className="section-title">Estúdios em destaque</h2>
            </div>

            <div className="studios-grid">
              <article className="studio-card">
                <div className="studio-logo">M</div>
                <div>
                  <h3>Moonforge Studio</h3>
                  <p>Aventuras narrativas e mundos fantásticos.</p>
                </div>
              </article>

              <article className="studio-card">
                <div className="studio-logo">P</div>
                <div>
                  <h3>Pinecone Games</h3>
                  <p>Jogos acolhedores com foco em exploração.</p>
                </div>
              </article>

              <article className="studio-card">
                <div className="studio-logo">C</div>
                <div>
                  <h3>Copper Owl</h3>
                  <p>Estratégia, tática e histórias autorais.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div>
            <a href="#" className="logo footer-logo">
              <span>INDIE</span>
              <strong>PULSE</strong>
            </a>
            <p>Um projeto acadêmico sobre a cena indie.</p>
          </div>

          <nav className="footer-links">
            <a href="#inicio">Sobre o projeto</a>
            <a href="#estudios">Contato</a>
            <a href="#noticias">Redes sociais</a>
          </nav>

          <p className="copyright">© 2026 Indie Pulse</p>
        </div>
      </footer>
    </>
  )
}

export default App
