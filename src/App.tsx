import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import StudiosSection from "./components/StudiosSection";
import Footer from "./components/Footer";
import { events } from "./data/content";
import { useNews } from "./hooks/useNews";
import type { PageSection, NewsItem } from "./types";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] =
    useState<PageSection>("inicio");

  const [favorites, setFavorites] =
    useState<number[]>([]);

  const { news, loading, error } = useNews();

  function toggleFavorite(id: number) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  const favoriteNews = news.filter((item) =>
    favorites.includes(item.id)
  );

  const updateNews = news.filter(
    (item) => item.category.toLowerCase() === "atualizações"
  );

  const regularNews = news.filter(
    (item) => item.category.toLowerCase() !== "atualizações"
  );

  function renderNews(items: NewsItem[], emptyMessage: string) {
    if (loading) {
      return (
        <div className="panel-loading" role="status">
          <div className="loading-spinner"></div>
          <h3>Carregando notícias...</h3>
          <p>Buscando as novidades do universo indie.</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="panel-error" role="alert">
          <h3>Não foi possível carregar as notícias</h3>
          <p>
            Verifique sua conexão com a internet e tente novamente.
          </p>
          <p>{error}</p>

          <button onClick={() => window.location.reload()}>
            Tentar novamente
          </button>
        </div>
      );
    }

    if (items.length === 0) {
      return (
        <div className="panel-empty">
          <h3>Nenhum conteúdo encontrado</h3>
          <p>{emptyMessage}</p>
        </div>
      );
    }

    return (
      <NewsSection
        news={items}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    );
  }

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main>
        {currentPage === "inicio" && (
          <>
            <HeroSection />

            {renderNews(
              news,
              "Nenhuma notícia disponível no momento."
            )}

            <EventsSection events={events} />
            <StudiosSection />
          </>
        )}

        {currentPage === "noticias" &&
          renderNews(
            regularNews,
            "Nenhuma notícia encontrada."
          )}

        {currentPage === "atualizacoes" &&
          renderNews(
            updateNews,
            "Nenhuma atualização disponível."
          )}

        {currentPage === "lancamentos" && (
          <EventsSection events={events} />
        )}

        {currentPage === "estudios" && (
          <StudiosSection />
        )}

        {currentPage === "favoritos" &&
          renderNews(
            favoriteNews,
            "Você ainda não adicionou nenhuma notícia aos favoritos."
          )}
      </main>

      <Footer />
    </>
  );
}

export default App;