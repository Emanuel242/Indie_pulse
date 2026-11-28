export default function NewsSkeleton() {
    return (
        <section
            className="skeleton-section"
            role="status"
            aria-label="Carregando notícias"
        >
            <div className="skeleton-grid">
                {Array.from({ length: 6 }, (_, index) => (
                    <article
                        className="skeleton-card"
                        key={index}
                        aria-hidden="true"
                    >
                        <div className="skeleton skeleton-image" />

                        <div className="skeleton-content">
                            <div className="skeleton skeleton-category" />
                            <div className="skeleton skeleton-title" />
                            <div className="skeleton skeleton-title-short" />
                            <div className="skeleton skeleton-text" />
                            <div className="skeleton skeleton-text" />
                            <div className="skeleton skeleton-text-short" />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}