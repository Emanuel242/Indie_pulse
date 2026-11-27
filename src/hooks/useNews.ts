import { useEffect, useState } from "react";
import type { NewsItem } from "../types";
import { NEWS_ENDPOINT, parseNews } from "../services/newsService";

export function useNews() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadNews() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(NEWS_ENDPOINT, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }

                const data: unknown = await response.json();

                setNews(parseNews(data));
            } catch (error) {
                if (controller.signal.aborted) return;

                setError(
                    error instanceof Error
                        ? error.message
                        : "Erro desconhecido."
                );
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadNews();

        return () => controller.abort();
    }, []);

    return { news, loading, error };
}