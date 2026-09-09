import { useState } from 'react'
import './App.css'

type Agent = {
  name: string
  icon: string
  color: string
  strategy: string
  count: number
}

const initialAgents: Agent[] = [
  { name: 'Minions', icon: 'M', color: '#f7c948', strategy: 'Scavenge', count: 8 },
  { name: 'Monkeys', icon: 'O', color: '#e9825b', strategy: 'Swarm', count: 5 },
  { name: 'Bananas', icon: 'B', color: '#61b88d', strategy: 'Multiply', count: 12 },
]

function App() {
  const [agents, setAgents] = useState(initialAgents)
  const [rounds, setRounds] = useState(100)
  const [isRunning, setIsRunning] = useState(false)
  const [completed, setCompleted] = useState(64)

  const updateCount = (name: string, count: number) => {
    setAgents((current) => current.map((agent) => agent.name === name ? { ...agent, count } : agent))
  }

  const runSimulation = () => {
    setIsRunning(true)
    window.setTimeout(() => {
      setCompleted(rounds)
      setIsRunning(false)
    }, 500)
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark">✳</span><span>ROOM / 01</span></div>
        <div className="status"><span className="status-dot" /> SIMULATION LAB <span className="version">v0.1</span></div>
      </header>

      <section className="intro">
        <div>
          <p className="eyebrow">QUESTION OF THE DAY</p>
          <h1>What happens when<br /><em>everything wants the same thing?</em></h1>
        </div>
        <p className="intro-note">A small room. A finite supply.<br />A hundred possible outcomes.</p>
      </section>

      <section className="workspace">
        <aside className="controls">
          <div className="panel-heading"><span>01</span><h2>Population</h2></div>
          <p className="muted">Set the starting conditions.</p>
          <div className="agent-list">
            {agents.map((agent) => (
              <div className="agent-row" key={agent.name}>
                <div className="agent-icon" style={{ backgroundColor: agent.color }}>{agent.icon}</div>
                <div className="agent-meta"><strong>{agent.name}</strong><span>{agent.strategy}</span></div>
                <input aria-label={`${agent.name} population`} type="range" min="1" max="20" value={agent.count} onChange={(event) => updateCount(agent.name, Number(event.target.value))} />
                <output>{agent.count}</output>
              </div>
            ))}
          </div>
          <div className="setting"><label htmlFor="rounds">Trial rounds</label><strong>{rounds}</strong><input id="rounds" type="range" min="10" max="500" step="10" value={rounds} onChange={(event) => setRounds(Number(event.target.value))} /></div>
          <button className="run-button" type="button" onClick={runSimulation} disabled={isRunning}>{isRunning ? 'Running trials...' : 'Run simulation'} <span>↗</span></button>
          <p className="keyboard-hint">Press <kbd>R</kbd> to run · <kbd>⌘</kbd><kbd>K</kbd> for settings</p>
        </aside>

        <div className="arena-panel">
          <div className="panel-heading"><span>02</span><h2>The room</h2><span className="live-label"><i /> LIVE PREVIEW</span></div>
          <div className="arena" aria-label="Simulation room preview">
            <div className="room-label top-left">FINITE ROOM<br /><span>12 × 08 GRID</span></div>
            <div className="room-label top-right">SUPPLY<br /><span>01 / 01</span></div>
            <div className="grid-lines" />
            <div className="banana-supply">B</div>
            <div className="creature minion m1">M</div><div className="creature minion m2">M</div><div className="creature minion m3">M</div>
            <div className="creature monkey o1">O</div><div className="creature monkey o2">O</div><div className="creature monkey o3">O</div>
            <div className="creature banana b1">B</div><div className="creature banana b2">B</div><div className="creature banana b3">B</div><div className="creature banana b4">B</div>
            <div className="axis-x">X</div><div className="axis-y">Y</div>
          </div>
          <div className="legend"><span><i className="dot minion-dot" /> MINIONS</span><span><i className="dot monkey-dot" /> MONKEYS</span><span><i className="dot banana-dot" /> BANANAS</span><span className="legend-right">TICK <b>0042</b> / 100</span></div>
        </div>
      </section>

      <section className="results">
        <div className="panel-heading"><span>03</span><h2>Trial outcomes</h2><span className="result-count">{completed} ROUNDS COMPLETE</span></div>
        <div className="result-grid"><div className="winner-card"><p className="muted">MOST LIKELY WINNER</p><strong>MONKEYS</strong><div className="winner-bar"><span /></div><small>They win by coordination, not numbers.</small></div><div className="stat"><span>MONKEYS</span><strong>48<span>%</span></strong><i className="bar orange" /></div><div className="stat"><span>MINIONS</span><strong>31<span>%</span></strong><i className="bar yellow" /></div><div className="stat"><span>BANANAS</span><strong>21<span>%</span></strong><i className="bar green" /></div></div>
      </section>
      <footer><span>BUILT FOR CURIOUS MINDS</span><span>AGENT DYNAMICS / 2026</span></footer>
    </main>
  )
}

export default App
