import { useMemo, useState } from 'react';

const TOTAL_HEALTH = 250;

interface ShotCalculation {
  shots: number;
  totalDamage: number;
  excessDamage: number;
}

function calculateShots(value: string): ShotCalculation | null {
  const damage = Number(value);
  if (!Number.isFinite(damage) || damage <= 0) return null;

  const shots = Math.ceil(TOTAL_HEALTH / damage);
  const totalDamage = shots * damage;
  return { shots, totalDamage, excessDamage: totalDamage - TOTAL_HEALTH };
}

function ShotResult({ label, result }: { label: string; result: ShotCalculation | null }) {
  return <article className="shot-result">
    <span>{label}</span>
    {result
      ? <><strong>{result.shots}</strong><p>{result.totalDamage.toLocaleString(undefined, { maximumFractionDigits: 2 })} total damage · {result.excessDamage.toLocaleString(undefined, { maximumFractionDigits: 2 })} excess</p></>
      : <><strong>—</strong><p>Enter damage above zero.</p></>}
  </article>;
}

export function DamageCalculator() {
  const [baseDamage, setBaseDamage] = useState('');
  const [headshotDamage, setHeadshotDamage] = useState('');
  const bodyResult = useMemo(() => calculateShots(baseDamage), [baseDamage]);
  const headshotResult = useMemo(() => calculateShots(headshotDamage), [headshotDamage]);

  return <section className="tool-panel" aria-labelledby="damage-calculator-title">
    <div className="tool-heading"><div><p className="eyebrow">Combat math / 250 total health</p><h2 id="damage-calculator-title">Damage calculator</h2></div><div className="health-stack" aria-label="Target profile: 100 health, 100 shield, and 50 Overshield"><span>100 HP</span><span>100 Shield</span><span>50 Overshield</span></div></div>
    <p className="tool-intro">Enter verified per-shot damage values. The result rounds up to the first shot that reaches or exceeds the target’s fixed 250 total health.</p>
    <div className="calculator-layout">
      <div className="tool-form-grid">
        <label><span>Base damage</span><input type="number" min="0.01" max="1000" step="0.01" inputMode="decimal" value={baseDamage} onChange={(event) => setBaseDamage(event.target.value)} placeholder="Enter body-shot damage" /></label>
        <label><span>Headshot damage</span><input type="number" min="0.01" max="1000" step="0.01" inputMode="decimal" value={headshotDamage} onChange={(event) => setHeadshotDamage(event.target.value)} placeholder="Enter headshot damage" /></label>
      </div>
      <div className="shot-results" aria-live="polite"><ShotResult label="Body shots required" result={bodyResult} /><ShotResult label="Headshots required" result={headshotResult} /></div>
    </div>
    <p className="formula-note"><strong>Formula:</strong> shots required = ceiling of 250 ÷ damage per shot. This calculator does not account for falloff, pellets, reloads, fire rate, or mixed body/headshot sequences.</p>
  </section>;
}

