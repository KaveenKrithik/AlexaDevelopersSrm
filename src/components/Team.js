import React from "react";
import "./../styles/Team.css";

const Team = () => {
  const members = [
    { name: "Tyler Durden", role: "Head" },
    { name: "Travis Bickle", role: "Co-head" },
    { name: "Kaveen Krithik", role: "Developer" },
    { name: "Jesse Pinkman ", role: "Developer" },
    { name: "Walter White", role: "Marketing" },
    { name: "Marla Singer", role: "Marketing" },
    { name: "Michael Jackson", role: "Member" },
   
  ];

  return (
    <section id="team" className="team">
      <h1>Meet the Team</h1>
      <div className="team-list">
        {members.map((member, index) => (
          <div key={index} className="team-card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

