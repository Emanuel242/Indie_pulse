import NewsCard from "./NewsCard";
import type { NewsSectionProps } from "../types";

function NewsSection({
    news,
    favorites,
    onToggleFavorite,
}: NewsSectionProps) {
    return (
        <section className="news-section" id="noticias">
            <div className="section-heading" id="atualizacoes">
                <div>
                    <span className="section-tag">FIQUE POR DENTRO</span>
                    <h2>Últimas notícias</h2>
                </div>

                <span className="section-description">
                    Novidades do universo indie
                </span>
            </div>

            <div className="news-grid">
                {news.map((item) => (
                    <NewsCard
                        key={item.id}
                        item={item}
                        isFavorite={favorites.includes(item.id)}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
        </section>
    );
}

export default NewsSection;