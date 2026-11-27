import type { NewsItem } from "../types";

export const NEWS_ENDPOINT = "https://my.api.mockaroo.com/news.?key=e088a160";

export function normalizeNews(item: Partial<NewsItem>): NewsItem {
    return {
        id: Number(item.id),
        title: String(item.title ?? "").trim(),
        description: String(item.description ?? "").trim(),
        category: String(item.category ?? "Notícias").trim(),
        image: String(item.image ?? "").trim(),
        date: String(item.date ?? "").trim(),
    };
}

export function parseNews(data: unknown): NewsItem[] {
    if (!Array.isArray(data)) {
        throw new Error("Formato de dados inválido.");
    }

    return data.map((item) => {
        if (
            typeof item !== "object" ||
            item === null ||
            !Number.isInteger(Number(item.id))
        ) {
            throw new Error("Notícia com formato inválido.");
        }

        return normalizeNews(item);
    });
}