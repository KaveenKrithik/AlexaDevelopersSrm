import React, { useEffect, useState } from "react";
import "./../styles/Events.css";

const Events = () => {
  const [eventsQueue, setEventsQueue] = useState([
    { title: "Hackathon", date: "Oct 20, 2024", desc: "24-hour coding marathon" },
    { title: "Workshop", date: "Nov 5, 2024", desc: "Learn React.js in 2 hours" },
    { title: "Webinar", date: "Nov 12, 2024", desc: "Discussing Future of AI" },
    { title: "Tech Meetup", date: "Dec 1, 2024", desc: "Networking with professionals" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setEventsQueue(prevQueue => {
        const newQueue = [...prevQueue];
        const firstEvent = newQueue.shift();
        newQueue.push(firstEvent);
        return newQueue;
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="events" className="events">
      <h2>Upcoming Events</h2>
      <div className="event-queue">
        {eventsQueue.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;

