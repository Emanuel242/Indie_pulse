import type { NewsCardProps } from "../types";

function NewsCard({
    item,
    isFavorite,
    onToggleFavorite,
}: NewsCardProps) {
    return (
        <article className="news-card">
            <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="news-category">{item.category}</span>
            </div>

            <div className="news-content">
                <span className="news-date">{item.date}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button
                    className={`favorite-button ${isFavorite ? "active" : ""}`}
                    onClick={() => onToggleFavorite(item.id)}
                    aria-pressed={isFavorite}
                >
                    {isFavorite ? "♥ Favoritado" : "♡ Favoritar"}
                </button>
            </div>
        </article>
    );
}

export default NewsCard;