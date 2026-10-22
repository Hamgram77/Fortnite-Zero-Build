export type RegionCode = 'OCE' | 'ASIA' | 'ME' | 'EU' | 'BR' | 'NAC' | 'NAW';

export interface TournamentEvent {
  id: string;
  date: string;
  name: string;
  regions: RegionCode[];
  regionLabel: string;
  modes: Array<'Zero Build' | 'Reload' | 'Battle Royale' | 'FNCS'>;
  format: string;
  platform: 'Cross-platform' | 'Console' | 'Mobile';
  eligibility: string;
  sourceLabel: string;
  sourceUrl: string;
  verifiedAt: string;
  startUtc?: string;
}

export const tournamentCalendarVerifiedAt = '2026-10-22';

export const competitiveRegions = [
  { code: 'OCE', label: 'Oceania' }, { code: 'ASIA', label: 'Asia' },
  { code: 'ME', label: 'Middle East' }, { code: 'EU', label: 'Europe' },
  { code: 'BR', label: 'Brazil' }, { code: 'NAC', label: 'North America Central' },
  { code: 'NAW', label: 'North America West' },
] as const;

const allRegions: RegionCode[] = competitiveRegions.map((region) => region.code);

export const tournamentSources = {
  schedule: 'https://www.fortnite.com/competitive/schedule?lang=en-US',
  fncsSolosRules: 'https://www.fortnite.com/competitive/rules-guidelines/rules-library/fortnite-championship-series-fncs-solos-2026-official-rules?region=NAC',
  fncsReloadRules: 'https://www.fortnite.com/competitive/rules-guidelines/rules-library/fortnite-championship-series-fncs-solos-reload-2026-official-rules?region=NAC',
  mobileLan: 'https://www.fortnite.com/competitive/events/Mobile%20LAN/?region=NAC',
  consoleZeroBuild: 'https://www.fortnite.com/competitive/events/S42_ConsoleVCC_SolosZB/?region=NAC',
};

const regionalNote = 'Final session time and playlist eligibility are shown in Fortnite’s in-game Compete tab.';
const qualifiedOnly = 'Qualified players only. Confirm advancement and the final regional session time in-game.';
const event = (value: TournamentEvent) => value;

// Shared event dates come from Epic's official schedule and rules. Precise session
// times are omitted unless Epic publishes one source-wide UTC time.
export const tournamentEvents: TournamentEvent[] = [
  event({ id: 'performance-1022', date: '2026-10-22', name: 'Fortnite Performance Evaluation', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Battle Royale'], format: 'Trios', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'performance-1023', date: '2026-10-23', name: 'Fortnite Performance Evaluation', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Battle Royale'], format: 'Trios', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'reload-zb-cash-1023', date: '2026-10-23', name: 'Reload ZB Duos Cash Cup — Round 12', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Zero Build', 'Reload'], format: 'Duos', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'solo-reload-1023', date: '2026-10-23', name: 'Solo Reload Victory Cup — Round 7', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Reload'], format: 'Solos', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'reload-zb-cash-1024', date: '2026-10-24', name: 'Reload ZB Duos Cash Cup — Round 12', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Zero Build', 'Reload'], format: 'Duos', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'solo-reload-1024', date: '2026-10-24', name: 'Solo Reload Victory Cup — Rounds 7–8', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Reload'], format: 'Solos', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'mobile-lan-1', date: '2026-10-24', name: 'Fortnite Mobile Series LAN — Day 1', regions: allRegions, regionLabel: 'Global · Copenhagen', modes: ['Reload'], format: 'Solos', platform: 'Mobile', eligibility: 'The 16 qualified Mobile Series players compete at BLAST Studios in Copenhagen.', sourceLabel: 'Epic Mobile Series LAN event', sourceUrl: tournamentSources.mobileLan, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'console-zb-1024', date: '2026-10-24', name: 'Console Zero Build Solo Victory Cup — Rounds 15–16', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Zero Build'], format: 'Solos', platform: 'Console', eligibility: 'Gold or higher in Combined Ranked; age and MFA requirements apply. Confirm the final session in-game.', sourceLabel: 'Epic Console Zero Build event', sourceUrl: tournamentSources.consoleZeroBuild, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'duos-ranked-1024', date: '2026-10-24', name: 'Duos Ranked Cup — Round 8', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Battle Royale', 'Zero Build'], format: 'Duos', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'mobile-lan-2', date: '2026-10-25', name: 'Fortnite Mobile Series LAN — Day 2', regions: allRegions, regionLabel: 'Global · Copenhagen', modes: ['Reload'], format: 'Solos', platform: 'Mobile', eligibility: 'The 16 qualified Mobile Series players compete at BLAST Studios in Copenhagen.', sourceLabel: 'Epic Mobile Series LAN event', sourceUrl: tournamentSources.mobileLan, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'console-zb-1025', date: '2026-10-25', name: 'Console Zero Build Solo Victory Cup — Rounds 15–16', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Zero Build'], format: 'Solos', platform: 'Console', eligibility: 'Gold or higher in Combined Ranked; age and MFA requirements apply. Confirm the final session in-game.', sourceLabel: 'Epic Console Zero Build event', sourceUrl: tournamentSources.consoleZeroBuild, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'duos-ranked-1025', date: '2026-10-25', name: 'Duos Ranked Cup — Round 8', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Battle Royale', 'Zero Build'], format: 'Duos', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'duos-reload-1025', date: '2026-10-25', name: 'Duos Reload Ranked Cup — Round 3', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Battle Royale', 'Zero Build', 'Reload'], format: 'Duos', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'duos-reload-1026', date: '2026-10-26', name: 'Duos Reload Ranked Cup — Round 3', regions: allRegions, regionLabel: 'All competitive regions', modes: ['Battle Royale', 'Zero Build', 'Reload'], format: 'Duos', platform: 'Cross-platform', eligibility: regionalNote, sourceLabel: 'Epic competitive schedule', sourceUrl: tournamentSources.schedule, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'fncs-solos-1', date: '2026-10-26', name: 'FNCS Solos Finals — Day 1', regions: allRegions, regionLabel: 'All competitive regions', modes: ['FNCS', 'Battle Royale'], format: 'Solos', platform: 'Cross-platform', eligibility: qualifiedOnly, sourceLabel: 'FNCS Solos official rules', sourceUrl: tournamentSources.fncsSolosRules, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'fncs-solos-2', date: '2026-10-27', name: 'FNCS Solos Finals — Day 1 / Day 2 sessions', regions: allRegions, regionLabel: 'All competitive regions', modes: ['FNCS', 'Battle Royale'], format: 'Solos', platform: 'Cross-platform', eligibility: qualifiedOnly, sourceLabel: 'FNCS Solos official rules', sourceUrl: tournamentSources.fncsSolosRules, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'fncs-solos-3', date: '2026-10-28', name: 'FNCS Solos Finals — Day 2 closing sessions', regions: allRegions, regionLabel: 'All competitive regions', modes: ['FNCS', 'Battle Royale'], format: 'Solos', platform: 'Cross-platform', eligibility: qualifiedOnly, sourceLabel: 'FNCS Solos official rules', sourceUrl: tournamentSources.fncsSolosRules, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'fncs-reload-q1d1', date: '2026-11-03', name: 'FNCS Solos Reload Qualifier — Round 1 Day 1', regions: allRegions, regionLabel: 'All competitive regions', modes: ['FNCS', 'Reload'], format: 'Solos', platform: 'Cross-platform', eligibility: 'Players must be in the top 200,000 of the global Power Rankings. Final regional time appears in-game.', sourceLabel: 'FNCS Solos Reload official rules', sourceUrl: tournamentSources.fncsReloadRules, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'fncs-reload-q1d2', date: '2026-11-04', name: 'FNCS Solos Reload Qualifier — Round 1 Day 2', regions: allRegions, regionLabel: 'All competitive regions', modes: ['FNCS', 'Reload'], format: 'Solos', platform: 'Cross-platform', eligibility: 'Players must be in the top 200,000 of the global Power Rankings. Final regional time appears in-game.', sourceLabel: 'FNCS Solos Reload official rules', sourceUrl: tournamentSources.fncsReloadRules, verifiedAt: tournamentCalendarVerifiedAt }),
  ...[
    ['fncs-reload-q2', '2026-11-07', 'FNCS Solos Reload Qualifier — Round 2'],
    ['fncs-reload-q3', '2026-11-08', 'FNCS Solos Reload Qualifier — Round 3'],
    ['fncs-reload-heat-1', '2026-11-14', 'FNCS Solos Reload — Heat 1'],
    ['fncs-reload-heat-2', '2026-11-15', 'FNCS Solos Reload — Heat 2'],
    ['fncs-reload-lcq-1', '2026-11-16', 'FNCS Solos Reload — Last Chance Qualifier Round 1'],
    ['fncs-reload-lcq-final', '2026-11-17', 'FNCS Solos Reload — Last Chance Qualifier Final'],
  ].map(([id, date, name]) => event({ id, date, name, regions: allRegions, regionLabel: 'All competitive regions', modes: ['FNCS', 'Reload'], format: 'Solos', platform: 'Cross-platform', eligibility: qualifiedOnly, sourceLabel: 'FNCS Solos Reload official rules', sourceUrl: tournamentSources.fncsReloadRules, verifiedAt: tournamentCalendarVerifiedAt })),
  event({ id: 'fncs-reload-final-1', date: '2026-11-21', name: 'FNCS Solos Reload Finals', regions: ['OCE', 'ME', 'NAC'], regionLabel: 'OCE · ME · NAC', modes: ['FNCS', 'Reload'], format: 'Solos', platform: 'Cross-platform', eligibility: qualifiedOnly, sourceLabel: 'FNCS Solos Reload official rules', sourceUrl: tournamentSources.fncsReloadRules, verifiedAt: tournamentCalendarVerifiedAt }),
  event({ id: 'fncs-reload-final-2', date: '2026-11-22', name: 'FNCS Solos Reload Finals', regions: ['ASIA', 'BR', 'EU', 'NAW'], regionLabel: 'Asia · BR · EU · NAW', modes: ['FNCS', 'Reload'], format: 'Solos', platform: 'Cross-platform', eligibility: qualifiedOnly, sourceLabel: 'FNCS Solos Reload official rules', sourceUrl: tournamentSources.fncsReloadRules, verifiedAt: tournamentCalendarVerifiedAt }),
];
