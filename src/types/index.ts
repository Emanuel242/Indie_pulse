export type PageSection =
    | "inicio"
    | "noticias"
    | "lancamentos"
    | "atualizacoes"
    | "estudios"
    | "favoritos";

export type NewsItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
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

export type HeaderProps = {
    currentPage: PageSection;
    onNavigate: (page: PageSection) => void;
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