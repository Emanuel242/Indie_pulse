import EventCard from "./EventCard";
import type { EventsSectionProps } from "../types";

function EventsSection({ events }: EventsSectionProps) {
    return (
        <section className="events-section" id="lancamentos">
            <div className="section-heading">
                <div>
                    <span className="section-tag">AGENDA INDIE</span>
                    <h2>Lançamentos e eventos</h2>
                </div>
            </div>

            <div className="events-grid">
                {events.map((item) => (
                    <EventCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default EventsSection;