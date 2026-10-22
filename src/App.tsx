import { useEffect, useState } from 'react';
import { contentProvider } from './providers/contentProvider';
import type { SiteContent } from './types';
import { CreatorInterviewsPage, CreatorsPage, GuidesPage, HomePage, LootPage, TournamentsPage, UpdatesPage, WeaponsPage } from './pages';

const routes = [
  { id: 'home', label: 'Home' },
  { id: 'weapons', label: 'Weapons' },
  { id: 'loot', label: 'Loot pool' },
  { id: 'updates', label: 'Updates' },
  { id: 'tournaments', label: 'Tournaments' },
  { id: 'creators', label: 'Creators' },
  { id: 'interviews', label: 'Creator interviews' },
  { id: 'guides', label: 'Guides' },
] as const;

type RouteId = (typeof routes)[number]['id'];

const getRoute = (): RouteId => {
  const value = window.location.hash.replace('#/', '') as RouteId;
  return routes.some((route) => route.id === value) ? value : 'home';
};

function App() {
  const [route, setRoute] = useState<RouteId>(getRoute);
  const [menuOpen, setMenuOpen] = useState(false);
  const [content, setContent] = useState<SiteContent | null>(null);
  const [error, setError] = useState('');

  const loadContent = () => {
    setError('');
    contentProvider.load().then(setContent).catch(() => setError('The maintained data snapshot could not be loaded.'));
  };

  useEffect(() => {
    let active = true;
    contentProvider.load()
      .then((data) => { if (active) setContent(data); })
      .catch(() => { if (active) setError('The maintained data snapshot could not be loaded.'); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const label = routes.find((item) => item.id === route)?.label ?? 'Home';
    document.title = `${label} · Zero Build Field Guide`;
  }, [route]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#/home" aria-label="Zero Build Field Guide home">
          <span className="brand-mark" aria-hidden="true">Z</span>
          <span><strong>ZERO BUILD</strong><small>Field Guide</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span><span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="main-navigation" className={menuOpen ? 'nav-list is-open' : 'nav-list'} aria-label="Primary navigation">
          {routes.map((item) => <a key={item.id} href={`#/${item.id}`} className={route === item.id ? 'active' : ''} aria-current={route === item.id ? 'page' : undefined}>{item.label}</a>)}
        </nav>
      </header>

      <main id="main-content">
        {!content && !error && <LoadingState />}
        {error && <ErrorState message={error} retry={loadContent} />}
        {content && route === 'home' && <HomePage content={content} />}
        {content && route === 'weapons' && <WeaponsPage weapons={content.weapons} />}
        {content && route === 'loot' && <LootPage items={content.loot} refreshedAt={content.refreshedAt} />}
        {content && route === 'updates' && <UpdatesPage updates={content.updates} />}
        {content && route === 'tournaments' && <TournamentsPage />}
        {content && route === 'creators' && <CreatorsPage creators={content.creators} />}
        {content && route === 'interviews' && <CreatorInterviewsPage />}
        {content && route === 'guides' && <GuidesPage guides={content.guides} />}
      </main>

      <footer className="site-footer">
        <div><strong>Zero Build Field Guide</strong><p>Independent community project. Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</p></div>
        <a href="#/home">About, sources & methodology <span aria-hidden="true">→</span></a>
      </footer>
    </div>
  );
}

function LoadingState() {
  return <section className="state-page" aria-live="polite"><span className="loader" aria-hidden="true" /><p>Loading verified field data…</p></section>;
}

function ErrorState({ message, retry }: { message: string; retry: () => void }) {
  return <section className="state-page" role="alert"><p>{message}</p><button className="button primary" onClick={retry}>Try again</button></section>;
}

export default App;
