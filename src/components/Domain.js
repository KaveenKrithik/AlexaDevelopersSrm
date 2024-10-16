import React from "react";
import "./../styles/Domain.css";


const Domain = () => {
  return (
    <section className="domain" id="domain">
      <h2>Our Domain</h2>
      <div className="domain-list">
        <div className="domain-card">
          <h3>Technical</h3>
          <p>A vibrant community of tech enthusiasts collaborating and transforming the future. The tech domain works together to perfect frontend user experiences, build robust systems in backend, and innovate ideas through app dev, elevating their skills throughout the journey.</p>
        </div>
        <div className="domain-card">
          <h3>Creatives</h3>
          <p>In the Creatives domain, ideas evolve into unforgettable experiences. The talented content writers and designers have mastered the creation of compelling narratives and seamless design interfaces. Experience the forefront of creativity as they shape the art of engagement.</p>
        </div>
        <div className="domain-card">
          <h3>Events</h3>
          <p>The heartbeat of the club, from brainstorming brilliant ideas to executing them with precision, ensures that each event is not just memorable but leaves a lasting impact on everyone involved. Our events domain thrives because of the hard work and creativity of the team.</p>
        </div>
        <div className="domain-card">
          <h3>Business</h3>
          <p>The business domain is at the forefront, fostering innovation and entrepreneurial spirit among students. It provides real-world relations and networking opportunities with industry professionals, bringing in amazing sponsors through skilled PR activities and bringing imagination to life.</p>
        </div>
      </div>
    </section>
  );
};

export default Domain;

