import { useState, type FormEvent } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/grcarhart@icloud.com';
const FORM_ACTION = 'https://formsubmit.co/grcarhart@icloud.com';

interface TelemetryFields {
  weaponName: string;
  patchVersion: string;
  rarity: string;
  baseDamage: string;
  headshotDamage: string;
  proofUrl: string;
}

const initialFields: TelemetryFields = {
  weaponName: '', patchVersion: '', rarity: '', baseDamage: '', headshotDamage: '', proofUrl: '',
};

function isApprovedProofUrl(value: string) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    return url.protocol === 'https:' && (host === 'youtu.be' || host === 'youtube.com' || host.endsWith('.youtube.com') || host === 'twitch.tv' || host.endsWith('.twitch.tv'));
  } catch {
    return false;
  }
}

function containsPersonalDataPattern(value: string) {
  return /@|https?:\/\/|www\./i.test(value) || /\b(?:\+?\d[\d ().-]{6,}\d)\b/.test(value);
}

export function WeaponTelemetryForm() {
  const [fields, setFields] = useState<TelemetryFields>(initialFields);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const update = (field: keyof TelemetryFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') { setStatus('idle'); setMessage(''); }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    if (containsPersonalDataPattern(fields.weaponName) || containsPersonalDataPattern(fields.patchVersion)) {
      setStatus('error');
      setMessage('Only game telemetry is accepted. Remove contact details, usernames, handles, and unrelated links.');
      return;
    }
    if (!isApprovedProofUrl(fields.proofUrl)) {
      setStatus('error');
      setMessage('Video proof must be a secure YouTube or Twitch URL.');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Weapon Name': fields.weaponName.trim(),
          'Patch Version': fields.patchVersion.trim(),
          Rarity: fields.rarity,
          'Observed Base Damage': fields.baseDamage,
          'Observed Headshot Damage': fields.headshotDamage,
          'Unedited Video Proof': fields.proofUrl.trim(),
          _subject: 'Zero Build weapon telemetry submission',
          _template: 'table',
          _url: 'https://hamgram77.github.io/Fortnite-Zero-Build/#/weapons',
        }),
      });
      const result = await response.json() as { success?: boolean | string };
      if (!response.ok || result.success === false || result.success === 'false') throw new Error('Submission rejected');
      setFields(initialFields);
      setStatus('success');
      setMessage('Telemetry submitted for review. Thank you for including verifiable match footage.');
    } catch {
      setStatus('error');
      setMessage('The report could not be sent. Check the proof URL and try again later.');
    }
  };

  return <section className="tool-panel" aria-labelledby="telemetry-form-title">
    <div className="tool-heading"><div><p className="eyebrow">Community verification</p><h2 id="telemetry-form-title">Report missing weapon telemetry</h2></div><span className="form-destination">Game data only</span></div>
    <div className="notice warning form-alert" role="note"><strong>Proof required</strong><span>Help us clear the “Not available” status. All submissions require unedited video proof showing the damage numbers in a live Zero Build match.</span></div>
    <p className="privacy-note" id="telemetry-privacy"><strong>Do not enter personal data.</strong> Names, email addresses, phone numbers, usernames, social handles, contact details, and free-form messages are not requested or accepted. Submission data is processed by FormSubmit.</p>
    <form className="telemetry-form" action={FORM_ACTION} method="POST" onSubmit={submit} aria-describedby="telemetry-privacy">
      <input type="hidden" name="_subject" value="Zero Build weapon telemetry submission" />
      <input type="hidden" name="_template" value="table" />
      <input className="honey-field" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="telemetry-grid">
        <label><span>Weapon name</span><input name="Weapon Name" required minLength={2} maxLength={60} pattern="[A-Za-z0-9 .'-]{2,60}" autoComplete="off" value={fields.weaponName} onChange={(event) => update('weaponName', event.target.value)} placeholder="In-game weapon name only" /></label>
        <label><span>Patch version</span><input name="Patch Version" required maxLength={16} pattern="v?[0-9]+([.][0-9]+){0,2}" autoComplete="off" value={fields.patchVersion} onChange={(event) => update('patchVersion', event.target.value)} placeholder="Example: v42.30" /></label>
        <label><span>Rarity</span><select name="Rarity" required value={fields.rarity} onChange={(event) => update('rarity', event.target.value)}><option value="">Select rarity</option><option>Common</option><option>Uncommon</option><option>Rare</option><option>Epic</option><option>Legendary</option><option>Mythic</option><option>Exotic</option></select></label>
        <label><span>Observed base damage</span><input name="Observed Base Damage" type="number" required min="0.01" max="1000" step="0.01" inputMode="decimal" value={fields.baseDamage} onChange={(event) => update('baseDamage', event.target.value)} placeholder="Body-shot number" /></label>
        <label><span>Observed headshot damage</span><input name="Observed Headshot Damage" type="number" required min="0.01" max="1000" step="0.01" inputMode="decimal" value={fields.headshotDamage} onChange={(event) => update('headshotDamage', event.target.value)} placeholder="Headshot number" /></label>
        <label className="proof-field"><span>Unedited video proof URL</span><input name="Unedited Video Proof" type="url" required maxLength={300} inputMode="url" autoComplete="off" value={fields.proofUrl} onChange={(event) => update('proofUrl', event.target.value)} placeholder="https://youtube.com/... or https://twitch.tv/..." /></label>
      </div>
      <div className="form-actions"><button className="button primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending report…' : 'Submit telemetry'}</button><span>Reports are reviewed before any stat is published.</span></div>
      {message && <p className={`form-status ${status}`} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">{message}</p>}
    </form>
  </section>;
}

