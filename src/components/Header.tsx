import { useState } from "react";
import type { HeaderProps, PageSection } from "../types";

const menuItems: { label: string; page: PageSection }[] = [
    { label: "Início", page: "inicio" },
    { label: "Notícias", page: "noticias" },
    { label: "Lançamentos", page: "lancamentos" },
    { label: "Atualizações", page: "atualizacoes" },
    { label: "Estúdios", page: "estudios" },
    { label: "Favoritos", page: "favoritos" }
];

function Header({
    currentPage,
    onNavigate,
    theme,
    onToggleTheme
}: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    function navigate(page: PageSection) {
        onNavigate(page);
        setMenuOpen(false);
    }

    return (
        <header className="header" id="inicio">
            <div className="header-content">
                <button
                    className="logo"
                    onClick={() => navigate("inicio")}
                >
                    INDIE <span>PULSE</span>
                </button>

                <nav
                    className={`navigation ${menuOpen ? "navigation-open" : ""}`}
                >
                    {menuItems.map((item) => (
                        <button
                            key={item.page}
                            className={
                                currentPage === item.page ? "active" : ""
                            }
                            onClick={() => navigate(item.page)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <button
                    type="button"
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    aria-label={
                        theme === "dark"
                            ? "Ativar modo claro"
                            : "Ativar modo escuro"
                    }
                    title={
                        theme === "dark"
                            ? "Modo claro"
                            : "Modo escuro"
                    }
                >
                    {theme === "dark" ? "☀" : "☾"}
                </button>

                <button
                    className="menu-button"
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((previous) => !previous)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}

export default Header;