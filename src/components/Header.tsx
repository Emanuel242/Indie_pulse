import type { HeaderProps, PageSection } from "../types";

function Header({ currentPage, onNavigate }: HeaderProps) {
    const menuItems: { label: string; page: PageSection }[] = [
        { label: "Início", page: "inicio" },
        { label: "Notícias", page: "noticias" },
        { label: "Lançamentos", page: "lancamentos" },
        { label: "Atualizações", page: "atualizacoes" },
        { label: "Estúdios", page: "estudios" },
        { label: "Favoritos", page: "favoritos" },
    ];

    return (
        <header className="header" id="inicio">
            <div className="header-content">
                <button
                    className="logo"
                    onClick={() => onNavigate("inicio")}
                >
                    INDIE <span>PULSE</span>
                </button>

                <nav className="navigation">
                    {menuItems.map((item) => (
                        <button
                            key={item.page}
                            className={currentPage === item.page ? "active" : ""}
                            onClick={() => onNavigate(item.page)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <button className="menu-button" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

export default Header;