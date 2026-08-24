import { Bot } from "lucide-react";
import Reveal from "./Reveal";

export default function AIAgentCard({ agent, delay = 0 }) {
  return (
    <Reveal delay={delay} className="agent-card">
      <div className="agent-card__top">
        <Bot size={18} className="agent-card__icon" />
        <span className="mono agent-card__tag">{agent.tag}</span>
      </div>
      <h4 className="agent-card__title">{agent.name}</h4>
      <p className="agent-card__desc muted">{agent.description}</p>
    </Reveal>
  );
}
