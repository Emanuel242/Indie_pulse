import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import StudiosSection from "./components/StudiosSection";
import Footer from "./components/Footer";
import { news, events } from "./data/content";
import type { PageSection } from "./types";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<PageSection>("inicio");

  function toggleFavorite(id: number) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favoriteId) => favoriteId !== id)
        : [...currentFavorites, id]
    );
  }

  const favoriteNews = news.filter((item) =>
    favorites.includes(item.id)
  );

  const updateNews = news.filter(
    (item) => item.category === "Atualizações"
  );

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main>
        <div className="container">
          {currentPage === "inicio" && (
            <>
              <HeroSection />

              <NewsSection
                news={news}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />

              <EventsSection events={events} />

              <StudiosSection />
            </>
          )}

          {currentPage === "noticias" && (
            <NewsSection
              news={news.filter(
                (item) => item.category !== "Atualizações"
              )}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          )}

          {currentPage === "atualizacoes" && (
            <NewsSection
              news={updateNews}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          )}

          {currentPage === "lancamentos" && (
            <EventsSection events={events} />
          )}

          {currentPage === "estudios" && <StudiosSection />}

          {currentPage === "favoritos" && (
            <NewsSection
              news={favoriteNews}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;