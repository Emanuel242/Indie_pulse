function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <span className="section-tag">DESTAQUE DA SEMANA</span>

                <h1>O universo dos jogos independentes em um só lugar.</h1>

                <p>
                    Descubra novidades, lançamentos e histórias dos estúdios que estão
                    transformando o mundo dos games.
                </p>

                <a href="#noticias" className="primary-button">
                    Explorar notícias
                </a>
            </div>

            <div className="hero-image">
                <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
                    alt="Ambiente de jogos eletrônicos"
                />
            </div>
        </section>
    );
}

export default HeroSection;