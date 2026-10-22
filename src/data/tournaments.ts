export interface TournamentDay {
  date: string;
  events: Array<{
    name: string;
    time?: string;
    region: string;
    mode: string;
    format: string;
  }>;
}

export const tournamentCalendarVerifiedAt = '2026-10-22';

export const competitiveRegions = [
  { code: 'OCE', label: 'Oceania' },
  { code: 'ASIA', label: 'Asia' },
  { code: 'ME', label: 'Middle East' },
  { code: 'EU', label: 'Europe' },
  { code: 'BR', label: 'Brazil' },
  { code: 'NAC', label: 'North America Central' },
  { code: 'NAW', label: 'North America West' },
] as const;

export const tournamentSources = {
  schedule: 'https://www.fortnite.com/competitive/schedule?lang=en-US',
  fncsReloadRules: 'https://www.fortnite.com/competitive/rules-guidelines/rules-library/fortnite-championship-series-fncs-solos-reload-2026-official-rules?region=NAC',
  mobileLan: 'https://www.fortnite.com/competitive/events/Mobile%20LAN/?region=NAC',
};

// These are shared event dates from Epic's official schedules and rules. Session
// times vary by region, so the in-game Compete tab remains the final authority.
export const tournamentDays: TournamentDay[] = [
  { date: '2026-10-22', events: [
    { name: 'Fortnite Performance Evaluation', region: 'All competitive regions', mode: 'Battle Royale', format: 'Trios' },
  ] },
  { date: '2026-10-23', events: [
    { name: 'Fortnite Performance Evaluation', region: 'All competitive regions', mode: 'Battle Royale', format: 'Trios' },
    { name: 'Reload ZB Duos Cash Cup — Round 12', region: 'All competitive regions', mode: 'Zero Build Reload', format: 'Duos' },
    { name: 'Solo Reload Victory Cup — Round 7', region: 'All competitive regions', mode: 'Reload', format: 'Solos' },
  ] },
  { date: '2026-10-24', events: [
    { name: 'Reload ZB Duos Cash Cup — Round 12', region: 'All competitive regions', mode: 'Zero Build Reload', format: 'Duos' },
    { name: 'Solo Reload Victory Cup — Rounds 7–8', region: 'All competitive regions', mode: 'Reload', format: 'Solos' },
    { name: 'Fortnite Mobile Series LAN — Day 1', region: 'Global · Copenhagen', mode: 'Reload', format: 'Solos' },
    { name: 'Console Zero Build Solo Victory Cup — Rounds 15–16', region: 'All competitive regions', mode: 'Zero Build', format: 'Solos' },
    { name: 'Duos Ranked Cup — Round 8', region: 'All competitive regions', mode: 'Battle Royale + Zero Build', format: 'Duos' },
  ] },
  { date: '2026-10-25', events: [
    { name: 'Fortnite Mobile Series LAN — Day 2', region: 'Global · Copenhagen', mode: 'Reload', format: 'Solos' },
    { name: 'Console Zero Build Solo Victory Cup — Rounds 15–16', region: 'All competitive regions', mode: 'Zero Build', format: 'Solos' },
    { name: 'Duos Ranked Cup — Round 8', region: 'All competitive regions', mode: 'Battle Royale + Zero Build', format: 'Duos' },
    { name: 'Duos Reload Ranked Cup — Round 3', region: 'All competitive regions', mode: 'Battle Royale + Zero Build Reload', format: 'Duos' },
  ] },
  { date: '2026-10-26', events: [
    { name: 'Duos Reload Ranked Cup — Round 3', region: 'All competitive regions', mode: 'Battle Royale + Zero Build Reload', format: 'Duos' },
    { name: 'FNCS Solos Finals — Day 1', region: 'All competitive regions', mode: 'Battle Royale', format: 'Solos' },
  ] },
  { date: '2026-10-27', events: [
    { name: 'FNCS Solos Finals — Day 1 / Day 2 sessions', region: 'All competitive regions', mode: 'Battle Royale', format: 'Solos' },
  ] },
  { date: '2026-10-28', events: [
    { name: 'FNCS Solos Finals — Day 2 closing sessions', region: 'All competitive regions', mode: 'Battle Royale', format: 'Solos' },
  ] },
  { date: '2026-11-03', events: [{ name: 'FNCS Solos Reload Qualifier — Round 1 Day 1', region: 'All competitive regions', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-04', events: [{ name: 'FNCS Solos Reload Qualifier — Round 1 Day 2', region: 'All competitive regions', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-07', events: [{ name: 'FNCS Solos Reload Qualifier — Round 2', region: 'All competitive regions', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-08', events: [{ name: 'FNCS Solos Reload Qualifier — Round 3', region: 'All competitive regions', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-14', events: [{ name: 'FNCS Solos Reload — Heat 1', region: 'All competitive regions', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-15', events: [{ name: 'FNCS Solos Reload — Heat 2', region: 'All competitive regions', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-16', events: [{ name: 'FNCS Solos Reload — Last Chance Qualifier Round 1', region: 'All competitive regions', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-17', events: [{ name: 'FNCS Solos Reload — Last Chance Qualifier Final', region: 'All competitive regions', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-21', events: [{ name: 'FNCS Solos Reload Finals', region: 'OCE · ME · NAC', mode: 'Reload', format: 'Solos' }] },
  { date: '2026-11-22', events: [{ name: 'FNCS Solos Reload Finals', region: 'Asia · BR · EU · NAW', mode: 'Reload', format: 'Solos' }] },
];
