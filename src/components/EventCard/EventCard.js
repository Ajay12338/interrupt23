import React from 'react';
import styles from './EventCard.module.css';

function EventCard() {
    return (
        <div class={styles.event_card}>
            <img class={styles.event_img} src="https://thumbs.dreamstime.com/b/technical-support-customer-service-business-technology-internet-concept-154148058.jpg" />
            <h1>Event title</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor purus amet libero nibh vel dignissim.</p>
            <div class={styles.arrow}>
                <img src="/assets/Yellow_Arrow.svg" />
            </div>
        </div>
    );
}

export default EventCard;
