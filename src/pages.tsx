import { useMemo, useState } from 'react';
import type { Creator, GuideTip, LootItem, SiteContent, UpdateItem, Weapon } from './types';

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const formatDate = (value: string) => dateFormatter.format(new Date(`${value}T12:00:00`));
const formatRefresh = (value: string) => new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
  timeZone: 'America/Chicago', timeZoneName: 'short',
}).format(new Date(value));

function PageHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <header className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></header>;
}

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="source-link" href={href} target="_blank" rel="noreferrer">{children} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>;
}

export function HomePage({ content }: { content: SiteContent }) {
  return <>
    <section className="hero section-wrap">
      <div className="hero-copy">
        <p className="eyebrow">Community intel · source first</p>
        <h1>Win the fight<br /><span>before it starts.</span></h1>
        <p className="hero-lede">A fast, honest field guide to Fortnite Zero Build—built for players who want useful information without invented stats or stale claims.</p>
        <div className="hero-actions"><a className="button primary" href="#/weapons">Open weapon database</a><a className="button ghost" href="#/loot">Check loot report</a></div>
        <div className="freshness"><span className="status-dot" aria-hidden="true" /><div><strong>Snapshot verified</strong><span>{formatRefresh(content.refreshedAt)}</span></div></div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="radar"><i /><i /><i /><span className="radar-sweep" /></div>
        <div className="visual-card card-a"><span>01</span><strong>Cover</strong></div>
        <div className="visual-card card-b"><span>02</span><strong>Rotate</strong></div>
        <div className="visual-card card-c"><span>03</span><strong>Commit</strong></div>
      </div>
    </section>

    <section className="manifesto section-wrap">
      <span className="quote-mark" aria-hidden="true">“</span>
      <div><p>Zero Build is more than a game mode. <strong>It’s a community.</strong></p><p>We document its players, celebrate its creators, explain its competitive scene, and give Zero Build fans a place to stay informed. Whether you compete, create content, or just love playing, your voice matters.</p></div>
    </section>

    <section className="section-wrap quick-grid" aria-labelledby="explore-title">
      <div className="section-heading"><p className="eyebrow">Choose your route</p><h2 id="explore-title">Field stations</h2></div>
      <div className="feature-grid">
        {[
          ['01', 'Weapons', 'Search, filter, compare, and inspect the confidence behind each stat.', '#/weapons'],
          ['02', 'Loot report', 'See what Epic has reported—and where Zero Build-specific confirmation is missing.', '#/loot'],
          ['03', 'Updates', 'Read mode-labeled official news without Creative or general updates being miscast.', '#/updates'],
          ['04', 'Community', 'Find verified creator channels and clear identity checks.', '#/creators'],
          ['05', 'Guides', 'Practice durable Zero Build principles from first drop to endgame.', '#/guides'],
        ].map(([n, title, copy, href]) => <a className="feature-card" href={href} key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">→</b></a>)}
      </div>
    </section>

    <section className="section-wrap split-section">
      <div><p className="eyebrow">Latest official signal</p><h2>{content.updates[0].title}</h2><p>{content.updates[0].summary}</p><SourceLink href={content.updates[0].url}>Read the Epic source</SourceLink></div>
      <div className="tip-panel"><span className="panel-number">TIP / 01</span><h3>Own the next piece of cover</h3><p>Open terrain is a timer. Before leaving safety, know exactly where the next hard cover is—and what you’ll do if it becomes contested.</p><a href="#/guides">More fieldcraft <span aria-hidden="true">→</span></a></div>
    </section>
  </>;
}

export function WeaponsPage({ weapons }: { weapons: Weapon[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [rarity, setRarity] = useState('All');
  const [sort, setSort] = useState('name');
  const categories = ['All', ...new Set(weapons.map((item) => item.category))];
  const rarities = ['All', ...new Set(weapons.map((item) => item.rarity))];
  const filtered = useMemo(() => weapons.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) && (category === 'All' || item.category === category) && (rarity === 'All' || item.rarity === rarity)).sort((a, b) => {
    if (sort === 'rarity') return a.rarity.localeCompare(b.rarity) || a.name.localeCompare(b.name);
    if (sort === 'damage') return (b.damage ?? -1) - (a.damage ?? -1) || a.name.localeCompare(b.name);
    if (sort === 'fireRate') return (b.fireRate ?? -1) - (a.fireRate ?? -1) || a.name.localeCompare(b.name);
    return a.name.localeCompare(b.name);
  }), [weapons, search, category, rarity, sort]);

  return <section className="section-wrap page-section">
    <PageHeader eyebrow="Database / dated reference" title="Weapon intelligence" copy="Search verified references and official availability notes. Missing values stay missing; patch and rarity context stays attached." />
    <div className="notice warning"><strong>Confidence check</strong><span>Epic’s current Battle Royale notes do not provide full rarity-specific stats or independently confirm Zero Build parity. Reference values are labeled by version.</span></div>
    <div className="filter-bar" role="search">
      <label className="search-field"><span>Search weapons</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try “shotgun”" /></label>
      <label><span>Category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label><span>Rarity</span><select value={rarity} onChange={(event) => setRarity(event.target.value)}>{rarities.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="name">Name</option><option value="rarity">Rarity</option><option value="damage">Damage</option><option value="fireRate">Fire rate</option></select></label>
    </div>
    <p className="result-count" aria-live="polite">{filtered.length} result{filtered.length === 1 ? '' : 's'}</p>
    {filtered.length ? <div className="weapon-grid">{filtered.map((weapon) => <article className="weapon-card" key={weapon.id}>
      <div className="weapon-top"><WeaponGlyph category={weapon.category} /><div><span className={`status-tag ${weapon.availability}`}>{weapon.availability}</span><h2>{weapon.name}</h2><p>{weapon.category} · {weapon.rarity}</p></div></div>
      <dl className="stat-grid"><Stat label="Damage" value={weapon.damage} /><Stat label="Headshot" value={weapon.headshotDamage} /><Stat label="Fire rate" value={weapon.fireRate} unit="/s" /><Stat label="Magazine" value={weapon.magazineSize} /><Stat label="Reload" value={weapon.reloadTime} unit="s" /></dl>
      <p className="context-note">{weapon.statContext}</p><p className="card-note">{weapon.note}</p><SourceLink href={weapon.sourceUrl}>{weapon.sourceLabel}</SourceLink>
    </article>)}</div> : <div className="empty-state"><strong>No weapons match those filters.</strong><p>Clear a filter or try a broader name.</p><button className="button ghost" onClick={() => { setSearch(''); setCategory('All'); setRarity('All'); }}>Reset filters</button></div>}
    <div className="legend-panel"><h2>Reading the numbers</h2><div><p><strong>Damage</strong> Base body damage for the named rarity and cited version.</p><p><strong>Headshot</strong> Reported critical damage or a documented cap—not an estimate.</p><p><strong>Fire rate</strong> Shots per second. A faster value does not account for bloom, recoil, or accuracy.</p><p><strong>Reload</strong> Seconds for the cited rarity. Some shell-fed weapons behave differently mid-reload.</p></div></div>
  </section>;
}

function Stat({ label, value, unit = '' }: { label: string; value: number | null; unit?: string }) {
  return <div><dt>{label}</dt><dd>{value === null ? 'Not available' : `${value}${unit}`}</dd></div>;
}

function WeaponGlyph({ category }: { category: string }) {
  return <div className="weapon-glyph" aria-hidden="true"><span className="glyph-line" /><span className="glyph-stock" /><small>{category.slice(0, 3).toUpperCase()}</small></div>;
}

export function LootPage({ items, refreshedAt }: { items: LootItem[]; refreshedAt: string }) {
  const [view, setView] = useState<'reported' | 'changes'>('reported');
  const categories = ['Weapons', 'Healing', 'Mobility', 'Utility', 'Other'] as const;
  const shown = view === 'reported' ? items.filter((item) => item.status !== 'vaulted') : items.filter((item) => item.status === 'vaulted' || item.status === 'unvaulted');
  return <section className="section-wrap page-section">
    <PageHeader eyebrow="Mode scope matters" title="Loot report" copy="An official Battle Royale snapshot with honest limits. It is not labeled as a confirmed Zero Build pool because Epic’s source does not state that parity." />
    <div className="subtabs" role="tablist" aria-label="Loot views"><button role="tab" aria-selected={view === 'reported'} onClick={() => setView('reported')}>Reported items</button><button role="tab" aria-selected={view === 'changes'} onClick={() => setView('changes')}>Vault changes</button></div>
    <div className="notice stale"><strong>Zero Build verification pending</strong><span>Source: Epic Games Battle Royale notes · patch v42.30 · snapshot checked {formatRefresh(refreshedAt)}. Do not assume every listed item appears in every Zero Build playlist.</span></div>
    <div className="loot-groups">{categories.map((category) => {
      const group = shown.filter((item) => item.category === category);
      if (!group.length) return null;
      return <section key={category} className="loot-group"><div className="group-title"><span>{String(categories.indexOf(category) + 1).padStart(2, '0')}</span><h2>{category}</h2></div><div className="loot-list">{group.map((item) => <article key={`${item.name}-${item.status}`}><div><span className={`status-tag ${item.status}`}>{item.status}</span><h3>{item.name}</h3></div><p>{item.detail}</p><SourceLink href={item.sourceUrl}>Epic source</SourceLink></article>)}</div></section>;
    })}</div>
  </section>;
}

export function UpdatesPage({ updates }: { updates: UpdateItem[] }) {
  const modes = ['All', ...new Set(updates.flatMap((item) => item.modes))];
  const [mode, setMode] = useState('All');
  const shown = updates.filter((item) => mode === 'All' || item.modes.includes(mode));
  return <section className="section-wrap page-section">
    <PageHeader eyebrow="Official signal / labeled by mode" title="Updates & patch notes" copy="Announcements are tagged only with the modes named by their source. General Fortnite news is not treated as a Zero Build change." />
    <div className="chip-row" aria-label="Filter updates by mode">{modes.map((item) => <button className={mode === item ? 'active' : ''} aria-pressed={mode === item} key={item} onClick={() => setMode(item)}>{item}</button>)}</div>
    {shown.length ? <div className="timeline">{shown.map((item, index) => <article key={item.url}><div className="timeline-date"><span>{String(index + 1).padStart(2, '0')}</span><time dateTime={item.date}>{formatDate(item.date)}</time></div><div className="timeline-copy"><div className="mode-row">{item.modes.map((tag) => <span key={tag}>{tag}</span>)}</div><h2>{item.title}</h2><p>{item.summary}</p><SourceLink href={item.url}>Read original article</SourceLink></div></article>)}</div> : <div className="empty-state"><strong>No updates match this mode.</strong><p>Choose another mode to continue.</p></div>}
  </section>;
}

export function CreatorsPage({ creators }: { creators: Creator[] }) {
  const [tab, setTab] = useState<'directory' | 'verification'>('directory');
  return <section className="section-wrap page-section">
    <PageHeader eyebrow="Community directory" title="Creators in the field" copy="Verified public destinations for creators selected by the site owner. A listing is a community reference—not an endorsement, partnership, or affiliation." />
    <div className="subtabs" role="tablist" aria-label="Creator directory views"><button role="tab" aria-selected={tab === 'directory'} onClick={() => setTab('directory')}>Creator directory</button><button role="tab" aria-selected={tab === 'verification'} onClick={() => setTab('verification')}>Verification notes</button></div>
    {tab === 'directory' ? <div className="creator-grid">{creators.map((creator) => <article className={`creator-card ${creator.verificationStatus}`} key={creator.id}>
      <div className={`creator-avatar${creator.imageUrl ? ' has-image' : ''}`}>
        {creator.imageUrl
          ? <img src={`${import.meta.env.BASE_URL}${creator.imageUrl}`} alt={creator.imageAlt ?? `${creator.displayName} Fortnite creator outfit`} loading="lazy" />
          : <span role="img" aria-label={`Neutral placeholder for ${creator.displayName}`}>{creator.initials}</span>}
      </div>
      <div className="creator-body"><div className="creator-title"><div><h2>{creator.displayName}</h2>{creator.alsoKnownAs && <p>Also known as {creator.alsoKnownAs}</p>}</div><span className={`verify-badge ${creator.verificationStatus}`}>{creator.verificationStatus === 'verified' ? 'Identity checked' : 'Needs confirmation'}</span></div>
      <p>{creator.description}</p><div className="relevance"><strong>Zero Build check</strong><span>{creator.zeroBuildRelevance}</span></div>
      {creator.channels.length ? <div className="channel-list">{creator.channels.filter((channel) => channel.verified).map((channel) => <a key={channel.url} href={channel.url} target="_blank" rel="noreferrer"><span>{channel.platform}</span><strong>{channel.label}</strong><b aria-hidden="true">↗</b><span className="sr-only"> (opens in a new tab)</span></a>)}</div> : <div className="channel-pending">No channel published until identity is confirmed.</div>}</div>
    </article>)}</div> : <div className="verification-list">{creators.map((creator) => <article key={creator.id}><div><span className={`verify-dot ${creator.verificationStatus}`} /><h2>{creator.displayName}</h2></div><p>{creator.verificationNote}</p><small>{creator.imageNote}</small></article>)}</div>}
    <div className="notice neutral"><strong>Community listing policy</strong><span>This is a curated, non-exhaustive directory; the Zero Build creator community is too large to list in full. Listed creators do not endorse or sponsor this project. Creator portraits show confirmed Icon Series outfits, featured outfits from official creator Locker Bundles, or a site-owner-selected Fortnite outfit.</span></div>
  </section>;
}

export function CreatorInterviewsPage() {
  return <section className="section-wrap page-section">
    <PageHeader eyebrow="Community conversations" title="Creator interviews" copy="A future home for conversations with creators across the Fortnite Zero Build community." />
    <section className="construction-state" role="status" aria-labelledby="creator-interviews-title"><span aria-hidden="true">404</span><div><p className="eyebrow">Creator interviews</p><h2 id="creator-interviews-title">This area is under construction.</h2><p>Interviews are not available yet. Check back later as this part of the community directory is built.</p></div></section>
  </section>;
}

export function GuidesPage({ guides }: { guides: GuideTip[] }) {
  const categories = ['All', ...new Set(guides.map((item) => item.category))];
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState<'All' | GuideTip['level']>('All');
  const shown = guides.filter((item) => (category === 'All' || item.category === category) && (level === 'All' || item.level === level));
  return <section className="section-wrap page-section">
    <PageHeader eyebrow="Durable fundamentals" title="Fieldcraft" copy="Practical Zero Build habits separated from season-specific mechanics. Start simple, then layer in better decisions." />
    <div className="guide-controls"><div className="chip-row">{categories.map((item) => <button className={category === item ? 'active' : ''} aria-pressed={category === item} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="segmented"><button className={level === 'All' ? 'active' : ''} onClick={() => setLevel('All')}>All levels</button><button className={level === 'Beginner' ? 'active' : ''} onClick={() => setLevel('Beginner')}>Beginner</button><button className={level === 'Advanced' ? 'active' : ''} onClick={() => setLevel('Advanced')}>Advanced</button></div></div>
    <div className="guide-grid">{shown.map((tip, index) => <article key={tip.title}><div className="guide-index">{String(index + 1).padStart(2, '0')}</div><span>{tip.category} / {tip.level}</span><h2>{tip.title}</h2><p>{tip.text}</p><small>{tip.scope}</small></article>)}</div>
  </section>;
}

export function AboutPage() {
  const [tab, setTab] = useState<'mission' | 'sources' | 'method'>('mission');
  return <section className="section-wrap page-section">
    <PageHeader eyebrow="Trust is a feature" title="About the guide" copy="A community information project designed to be useful when the game moves faster than most databases." />
    <div className="subtabs" role="tablist" aria-label="About sections"><button role="tab" aria-selected={tab === 'mission'} onClick={() => setTab('mission')}>Mission</button><button role="tab" aria-selected={tab === 'sources'} onClick={() => setTab('sources')}>Sources</button><button role="tab" aria-selected={tab === 'method'} onClick={() => setTab('method')}>Method</button></div>
    <div className="about-panel">
      {tab === 'mission' && <div><p className="large-copy">Zero Build is more than a game mode. <strong>It’s a community.</strong></p><p>We document its players, celebrate its creators, explain its competitive scene, and give Zero Build fans a place to stay informed. Whether you compete, create content, or just love playing, your voice matters.</p><p>This site is unofficial and is not endorsed by or affiliated with Epic Games.</p></div>}
      {tab === 'sources' && <div className="source-stack"><SourceLink href="https://www.fortnite.com/news">Official Fortnite News</SourceLink><SourceLink href="https://communities.epicgames.com/">Epic Games Communities update notes</SourceLink><SourceLink href="https://prod.api-fortnite.com/swagger/index.html">API Fortnite Swagger documentation</SourceLink><SourceLink href="https://dash.fortnite-api.com/">Fortnite-API documentation</SourceLink><SourceLink href="https://fortnite.fandom.com/wiki/Fortnite_Wiki">Fortnite Wiki reference data</SourceLink></div>}
      {tab === 'method' && <div><ol><li>Official Epic sources establish update scope and item availability.</li><li>Community references may supply versioned stats, always labeled by rarity and patch context.</li><li>Unverified values render as “Not available.”</li><li>Battle Royale claims are not silently promoted to Zero Build claims.</li><li>Creator identities are corroborated before external links are published.</li></ol><p>Corrections can be proposed through this repository’s GitHub Issues after publication; no personal contact details are invented or collected.</p></div>}
    </div>
    <div className="legal-note"><h2>Ownership & attribution</h2><p>Fortnite and related names, marks, and assets belong to their respective owners. This project uses original interface artwork and links to source material rather than copying official site design or creator imagery.</p></div>
  </section>;
}
