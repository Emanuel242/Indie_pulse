function StudiosSection() {
    return (
        <section className="studios-section" id="estudios">
            <div className="section-heading">
                <div>
                    <span className="section-tag">QUEM FAZ ACONTECER</span>
                    <h2>Estúdios independentes</h2>
                </div>
            </div>

            <div className="studios-grid">
                <article className="studio-card">
                    <div className="studio-icon">TC</div>
                    <h3>Team Cherry</h3>
                    <p>
                        Estúdio independente conhecido pelo desenvolvimento de Hollow
                        Knight.
                    </p>
                </article>

                <article className="studio-card">
                    <div className="studio-icon">SD</div>
                    <h3>Studio MDHR</h3>
                    <p>
                        Desenvolvedora independente responsável pelo jogo Cuphead.
                    </p>
                </article>

                <article className="studio-card">
                    <div className="studio-icon">SU</div>
                    <h3>Supergiant Games</h3>
                    <p>
                        Estúdio independente conhecido por experiências como Hades e
                        Bastion.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default StudiosSection;