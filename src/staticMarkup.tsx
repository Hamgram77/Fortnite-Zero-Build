/* eslint-disable react-refresh/only-export-components */
import { renderToStaticMarkup } from 'react-dom/server';
import { creators } from './data/creators';
import { guides } from './data/guides';
import { creatorInterviews } from './data/interviews';
import { loot } from './data/loot';
import { updates } from './data/updates';
import { weapons } from './data/weapons';
import { competitiveRegions, tournamentCalendarVerifiedAt, tournamentEvents, tournamentSources } from './data/tournaments';

const baseUrl = '/Fortnite-Zero-Build/';
const refreshedAt = '2026-10-18T14:42:37-05:00';

function StaticLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href}>{children}</a>;
}

function StaticSite() {
  return <div className="app-shell static-snapshot">
    <a className="skip-link" href="#static-main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#static-home" aria-label="Zero Build Field Guide home">
        <span className="brand-mark" aria-hidden="true">Z</span>
        <span><strong>ZERO BUILD</strong><small>Field Guide</small></span>
      </a>
      <nav className="nav-list" aria-label="Complete site content">
        <a href="#static-home">Home</a><a href="#static-weapons">Weapons</a><a href="#static-loot">Loot pool</a><a href="#static-updates">Updates</a><a href="#static-tournaments">Tournaments</a><a href="#static-creators">Creators</a><a href="#static-interviews">Creator interviews</a><a href="#static-guides">Guides</a>
      </nav>
    </header>

    <main id="static-main">
      <section className="section-wrap page-section static-section" id="static-home">
        <header className="page-heading"><p className="eyebrow">Community intel · source first</p><h1>Zero Build Field Guide</h1><p>A fast, honest field guide to Fortnite Zero Build—built for players who want useful information without invented stats or stale claims.</p></header>
        <blockquote><p>Zero Build is more than a game mode. <strong>It’s a community.</strong></p><p>We document its players, celebrate its creators, explain its competitive scene, and give Zero Build fans a place to stay informed. Whether you compete, create content, or just love playing, your voice matters.</p></blockquote>
        <p><strong>Snapshot verified:</strong> <time dateTime={refreshedAt}>{refreshedAt}</time></p>
        <div className="static-about-grid">
          <article><h2>About the guide</h2><h3>Mission</h3><p>Zero Build is more than a game mode. It’s a community.</p><p>We document its players, celebrate its creators, explain its competitive scene, and give Zero Build fans a place to stay informed. This site is unofficial and is not endorsed by or affiliated with Epic Games.</p></article>
          <article><h3>Sources</h3><ul><li><StaticLink href="https://www.fortnite.com/news">Official Fortnite News</StaticLink></li><li><StaticLink href="https://communities.epicgames.com/">Epic Games Communities update notes</StaticLink></li><li><StaticLink href="https://prod.api-fortnite.com/swagger/index.html">API Fortnite Swagger documentation</StaticLink></li><li><StaticLink href="https://dash.fortnite-api.com/">Fortnite-API documentation</StaticLink></li><li><StaticLink href="https://fortnite.fandom.com/wiki/Fortnite_Wiki">Fortnite Wiki reference data</StaticLink></li></ul></article>
          <article><h3>Method</h3><ol><li>Official Epic sources establish update scope and item availability.</li><li>Community references may supply versioned stats, always labeled by rarity and patch context.</li><li>Unverified values render as “Not available.”</li><li>Battle Royale claims are not silently promoted to Zero Build claims.</li><li>Creator identities are corroborated before external links are published.</li></ol></article>
          <article><h3>Ownership and attribution</h3><p>Fortnite and related names, marks, and assets belong to their respective owners. This project is unofficial and is not endorsed by Epic Games.</p></article>
        </div>
      </section>

      <section className="section-wrap page-section static-section" id="static-weapons">
        <header className="page-heading"><p className="eyebrow">Database / dated reference</p><h2>Weapon intelligence</h2><p>Verified references and official availability notes. Missing values remain explicitly unavailable, with patch and rarity context attached.</p></header>
        <p><strong>Confidence check:</strong> Epic’s current Battle Royale notes do not provide full rarity-specific stats or independently confirm Zero Build parity.</p>
        <div className="static-card-grid">{weapons.map((weapon) => <article key={weapon.id}>
          <h3>{weapon.name}</h3><p>{weapon.category} · {weapon.rarity} · {weapon.availability}</p>
          <dl><div><dt>Damage</dt><dd>{weapon.damage ?? 'Not available'}</dd></div><div><dt>Headshot damage</dt><dd>{weapon.headshotDamage ?? 'Not available'}</dd></div><div><dt>Fire rate</dt><dd>{weapon.fireRate ?? 'Not available'}</dd></div><div><dt>Magazine size</dt><dd>{weapon.magazineSize ?? 'Not available'}</dd></div><div><dt>Reload time</dt><dd>{weapon.reloadTime ?? 'Not available'}</dd></div></dl>
          <p>{weapon.statContext}</p><p>{weapon.note}</p><p>Verified <time dateTime={weapon.verifiedAt}>{weapon.verifiedAt}</time>. <StaticLink href={weapon.sourceUrl}>{weapon.sourceLabel}</StaticLink></p>
        </article>)}</div>
        <article className="static-tool-panel">
          <h3>Zero Build damage calculator</h3>
          <p>The interactive calculator determines body shots and headshots required to eliminate a target with 250 total health: 100 HP, 100 Shield, and 50 Overshield.</p>
          <p><strong>Formula:</strong> shots required = ceiling of 250 divided by damage per shot.</p>
          <p>Inputs accept verified base damage and headshot damage. Results report the first whole shot that reaches or exceeds 250 damage.</p>
        </article>
      </section>

      <section className="section-wrap page-section static-section" id="static-loot">
        <header className="page-heading"><p className="eyebrow">Mode scope matters</p><h2>Loot report</h2><p>An official Battle Royale snapshot with honest limits. It is not labeled as a confirmed Zero Build pool because Epic’s source does not state that parity.</p></header>
        <div className="static-card-grid">{loot.map((item) => <article key={`${item.name}-${item.status}`}><h3>{item.name}</h3><p>{item.category} · {item.status}</p><p>{item.detail}</p><StaticLink href={item.sourceUrl}>Epic source</StaticLink></article>)}</div>
      </section>

      <section className="section-wrap page-section static-section" id="static-updates">
        <header className="page-heading"><p className="eyebrow">Official signal / labeled by mode</p><h2>Updates and patch notes</h2><p>Announcements are tagged only with the modes named by their source.</p></header>
        <div className="static-list">{updates.map((item) => <article key={item.url}><h3>{item.title}</h3><p><time dateTime={item.date}>{item.date}</time> · {item.modes.join(', ')}</p><p>{item.summary}</p><StaticLink href={item.url}>Read original article</StaticLink></article>)}</div>
      </section>

      <section className="section-wrap page-section static-section" id="static-tournaments">
        <header className="page-heading"><p className="eyebrow">Official schedule snapshot</p><h2>Tournament calendar</h2><p>Upcoming Fortnite tournament dates across all seven competitive regions: OCE, Asia, Middle East, Europe, Brazil, NAC, and NAW.</p></header>
        <p><strong>Verified:</strong> <time dateTime={tournamentCalendarVerifiedAt}>{tournamentCalendarVerifiedAt}</time>. Session times vary by region and dates can change. Confirm the final schedule in Fortnite’s in-game Compete tab.</p>
        <nav className="static-region-links" aria-label="Official schedules by region">{competitiveRegions.map((region) => <StaticLink key={region.code} href={`${tournamentSources.schedule}&region=${region.code}`}>{region.code}: {region.label}</StaticLink>)}</nav>
        <p><strong>Filters available in the interactive calendar:</strong> upcoming or past events, region, game mode, and platform. Confirmed entries also provide downloadable calendar files.</p>
        <div className="static-list">{tournamentEvents.map((event) => <article key={event.id}><h3>{event.name}</h3><p><time dateTime={event.date}>{event.date}</time> · {event.regionLabel} · {event.modes.join(' + ')} · {event.format} · {event.platform}</p><p><strong>Eligibility:</strong> {event.eligibility}</p><p><strong>Local time:</strong> {event.startUtc ? new Date(event.startUtc).toISOString() : 'Regional time not published source-wide; check Epic’s schedule or the in-game Compete tab.'}</p><p><strong>Verified by Epic:</strong> checked <time dateTime={event.verifiedAt}>{event.verifiedAt}</time>. <StaticLink href={event.sourceUrl}>{event.sourceLabel}</StaticLink></p></article>)}</div>
        <div className="static-outlook"><article><h3>December 2026</h3><p><strong>No official tournament dates announced.</strong> Checked {tournamentCalendarVerifiedAt}.</p></article><article><h3>2027 season</h3><p><strong>No official tournament dates announced.</strong> Epic’s public schedule currently lists 2026 as its latest year.</p></article></div>
        <p><StaticLink href={tournamentSources.schedule}>Official Fortnite Competitive schedule</StaticLink> · <StaticLink href={tournamentSources.fncsReloadRules}>FNCS Solos Reload official rules</StaticLink> · <StaticLink href={tournamentSources.mobileLan}>Fortnite Mobile Series LAN</StaticLink></p>
      </section>

      <section className="section-wrap page-section static-section" id="static-creators">
        <header className="page-heading"><p className="eyebrow">Community directory</p><h2>Creators in the field</h2><p>Verified public destinations for creators selected by the site owner. A listing is a community reference—not an endorsement, partnership, or affiliation.</p></header>
        <div className="static-card-grid">{creators.map((creator) => <article key={creator.id}>
          <img src={`${baseUrl}${creator.imageUrl ?? 'favicon.svg'}`} alt={creator.imageAlt ?? `Neutral placeholder for ${creator.displayName}`} loading="lazy" />
          <h3>{creator.displayName}</h3>{creator.alsoKnownAs && <p>Also known as {creator.alsoKnownAs}</p>}
          <p><strong>{creator.verificationStatus === 'verified' ? 'Identity checked' : 'Needs confirmation'}</strong></p><p>{creator.description}</p>
          {creator.featuredQuote && <blockquote><p>“{creator.featuredQuote}”</p><footer>— {creator.featuredQuoteAttribution ?? creator.displayName}</footer></blockquote>}
          <p><strong>Zero Build check:</strong> {creator.zeroBuildRelevance}</p><p>{creator.verificationNote}</p><p>{creator.imageNote}</p>
          {creator.channels.filter((channel) => channel.verified).length > 0 && <ul>{creator.channels.filter((channel) => channel.verified).map((channel) => <li key={channel.url}><StaticLink href={channel.url}>{channel.platform}: {channel.label}</StaticLink></li>)}</ul>}
          <details><summary>Verification sources</summary><ul>{creator.evidence.map((url) => <li key={url}><StaticLink href={url}>{url}</StaticLink></li>)}</ul></details>
        </article>)}</div>
        <p><strong>Community listing policy:</strong> This is a curated, non-exhaustive directory; the Zero Build creator community is too large to list in full. Listed creators do not endorse or sponsor this project. Creator portraits may include a site-owner-selected Fortnite outfit.</p>
      </section>

      <section className="section-wrap page-section static-section" id="static-interviews">
        <header className="page-heading"><p className="eyebrow">Community conversations</p><h2>Creator interviews</h2><p>First-person conversations about the people and values shaping the Fortnite community.</p></header>
        {creatorInterviews.map((interview) => <article className="static-interview" key={interview.id}>
          <img src={`${baseUrl}${interview.imageUrl}`} alt={interview.imageAlt} loading="lazy" />
          <p className="eyebrow">Featured creator</p><h3>{interview.creatorName}: {interview.title}</h3><p>{interview.summary}</p><p>{interview.attribution}</p>
          {interview.questions.map((item) => <section key={item.question}><h4>{item.question}</h4><blockquote><p>{item.answer}</p><footer>— {interview.creatorName}</footer></blockquote></section>)}
          <p><StaticLink href={interview.channelUrl}>Visit verified YouTube channel</StaticLink></p>
        </article>)}
      </section>

      <section className="section-wrap page-section static-section" id="static-guides">
        <header className="page-heading"><p className="eyebrow">Durable fundamentals</p><h2>Fieldcraft</h2><p>Practical Zero Build habits separated from season-specific mechanics.</p></header>
        <div className="static-card-grid">{guides.map((tip) => <article key={tip.title}><p>{tip.category} · {tip.level}</p><h3>{tip.title}</h3><p>{tip.text}</p><p>{tip.scope}</p></article>)}</div>
      </section>

    </main>

    <footer className="site-footer"><div><strong>Zero Build Field Guide</strong><p>Independent community project. Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</p></div></footer>
  </div>;
}

export function renderStaticSite() {
  return renderToStaticMarkup(<StaticSite />);
}
