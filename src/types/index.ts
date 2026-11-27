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
    date: string;
};

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
};

export type NewsCardProps = {
    news: NewsItem;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
};

export type NewsSectionProps = {
    news: NewsItem[];
    favorites: number[];
    onToggleFavorite: (id: number) => void;
};

export type EventCardProps = {
    event: EventItem;
};

export type EventsSectionProps = {
    events: EventItem[];
};