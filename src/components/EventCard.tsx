import type { EventCardProps } from "../types";

function EventCard({ item }: EventCardProps) {
    return (
        <article className="event-card">
            <img src={item.image} alt={item.title} />

            <div className="event-content">
                <span className="event-date">{item.date}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="event-location">{item.location}</span>
            </div>
        </article>
    );
}

export default EventCard;