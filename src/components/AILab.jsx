import Reveal from "./Reveal";
import AICore from "./AICore";
import AIAgentCard from "./AIAgentCard";
import AIDemo from "./AIDemo";
import Products from "./Products";
import { agents } from "../data/agents";

export default function AILab() {
  return (
    <section id="ai-lab" className="section ai-lab">
      <div className="container">
        <Reveal className="eyebrow">JD AI Lab</Reveal>
        <Reveal delay={0.05} as="h2" className="section-title">
          EXPERIMENTING WITH
          <br /> INTELLIGENT SYSTEMS.
        </Reveal>
        <Reveal delay={0.1} className="ai-lab__intro muted">
          This is where I explore AI agents, automation, AI-powered products and
          intelligent workflows.
        </Reveal>

        <div className="ai-lab__core-wrap">
          <Reveal delay={0.1} y={0}>
            <AICore />
          </Reveal>
        </div>

        <div className="ai-lab__agents">
          {agents.map((a, i) => (
            <AIAgentCard key={a.id} agent={a} delay={i * 0.05} />
          ))}
        </div>

        <AIDemo />

        <Products />
      </div>
    </section>
  );
}
