import React from "react";
import facebook from "./assets/social-facebook.svg";
import instagram from "./assets/social-instagram.svg";
import twitter from "./assets/social-twitter.svg";
import agent1 from "./assets/agent-1.png";
import agent2 from "./assets/agent-2.png";
import agent3 from "./assets/agent-3.png";
import agent4 from "./assets/agent-4.png";

const AgentCard = ({ index, agent }) => {
  const fetchAvatar = (index) => agentAvatar[index];
  const agentAvatar = {
    0: agent1,
    1: agent2,
    2: agent3,
    3: agent4,
  };
  return (
    <div className={`agent agent--${index + 1}`}>
      <img
        src={fetchAvatar(index)}
        alt={`agent ${agent.name}`}
        className="agent__img"
      />
      <h5 className="agent__name">{agent.name}</h5>
      <p className="agent__position">{agent.position}</p>
      <p className="agent__email">{agent.email}</p>
      <p className="agent__phone">{agent.phone}</p>
      <div className="agent__social-medias">
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
      </div>
    </div>
  );
};
export default AgentCard;
