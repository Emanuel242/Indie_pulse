export type NewsItem = {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    date: string;
};

export type EventItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    location: string;
};

export type Theme = "dark" | "light";

export type PageSection =
    | "inicio"
    | "noticias"
    | "lancamentos"
    | "atualizacoes"
    | "estudios"
    | "favoritos";

export type HeaderProps = {
    currentPage: PageSection;
    onNavigate: (page: PageSection) => void;
    theme: Theme;
    onToggleTheme: () => void;
};

export type NewsCardProps = {
    item: NewsItem;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
};

export type NewsSectionProps = {
    news: NewsItem[];
    favorites: number[];
    onToggleFavorite: (id: number) => void;
};

export type EventCardProps = {
    item: EventItem;
};

export type EventsSectionProps = {
    events: EventItem[];
};