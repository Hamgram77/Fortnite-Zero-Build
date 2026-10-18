import type { Weapon } from '../types';

const epicLatest = 'https://communities.epicgames.com/thread/fortnitemares-2026-curses-battle-royale-reload-and-more/L4S8/';
const epicSeason = 'https://communities.epicgames.com/thread/v42-00-fortnite-override-battle-royale-update-notes/L5R3/';

export const weapons: Weapon[] = [
  {
    id: 'assault-rifle-rare', name: 'Assault Rifle', category: 'Assault Rifle', rarity: 'Rare', availability: 'unvaulted',
    damage: 33, headshotDamage: 49.5, fireRate: 5.5, magazineSize: 30, reloadTime: 2.5,
    statContext: 'Rare base stats reported for v40.00; later patch changes are possible.',
    sourceLabel: 'Fortnite Wiki reference + Epic v42.00 availability', sourceUrl: 'https://fortnite.fandom.com/wiki/Assault_Rifle', verifiedAt: '2026-10-18',
    note: 'Battle Royale availability is official. Zero Build parity and current numeric stats are not independently confirmed.',
  },
  {
    id: 'pump-shotgun-rare', name: 'Pump Shotgun', category: 'Shotgun', rarity: 'Rare', availability: 'unvaulted',
    damage: 110, headshotDamage: 175, fireRate: 0.7, magazineSize: 5, reloadTime: 4.4,
    statContext: 'Rare v40.00 reference stats; headshot value reflects the reported rarity cap.',
    sourceLabel: 'Fortnite Wiki reference + Epic v42.00 availability', sourceUrl: 'https://fortnite.fandom.com/wiki/Pump_Shotgun', verifiedAt: '2026-10-18',
    note: 'Battle Royale availability is official. Zero Build parity and current numeric stats are not independently confirmed.',
  },
  {
    id: 'tactical-pistol-rare', name: 'Tactical Pistol', category: 'Pistol', rarity: 'Rare', availability: 'unvaulted',
    damage: 27, headshotDamage: 54, fireRate: 6.9, magazineSize: 15, reloadTime: 1.4,
    statContext: 'Rare base stats reported for the v39.40 balance state.',
    sourceLabel: 'Fortnite Wiki reference + Epic v42.00 availability', sourceUrl: 'https://fortnite.fandom.com/wiki/Tactical_Pistol', verifiedAt: '2026-10-18',
    note: 'Battle Royale availability is official. Treat stats as a dated reference, not live telemetry.',
  },
  {
    id: 'bonerattler-smg', name: 'Bonerattler SMG', category: 'SMG', rarity: 'Not available', availability: 'new',
    damage: null, headshotDamage: null, fireRate: null, magazineSize: null, reloadTime: null,
    statContext: 'Epic confirmed the weapon, but did not publish base stats in the cited update.',
    sourceLabel: 'Epic Games — Fortnitemares v42.30', sourceUrl: epicLatest, verifiedAt: '2026-10-18',
    note: 'Reported for Battle Royale. Zero Build inclusion is not separately confirmed.',
  },
  {
    id: 'wood-stake-shotgun', name: 'Wood Stake Shotgun', category: 'Shotgun', rarity: 'Not available', availability: 'returned',
    damage: null, headshotDamage: null, fireRate: null, magazineSize: null, reloadTime: null,
    statContext: 'No verified current numbers were available in the official update.', sourceLabel: 'Epic Games — Fortnitemares v42.30', sourceUrl: epicLatest, verifiedAt: '2026-10-18',
    note: 'Returned in Battle Royale; Zero Build parity is unconfirmed.',
  },
  {
    id: 'dual-fiend-hunters', name: 'Dual Fiend Hunters', category: 'Pistol', rarity: 'Not available', availability: 'returned',
    damage: null, headshotDamage: null, fireRate: null, magazineSize: null, reloadTime: null,
    statContext: 'No verified current numbers were available in the official update.', sourceLabel: 'Epic Games — Fortnitemares v42.30', sourceUrl: epicLatest, verifiedAt: '2026-10-18',
    note: 'Returned in Battle Royale; Zero Build parity is unconfirmed.',
  },
  {
    id: 'heavy-assault-rifle', name: 'Heavy Assault Rifle', category: 'Assault Rifle', rarity: 'Not available', availability: 'returned',
    damage: null, headshotDamage: null, fireRate: null, magazineSize: null, reloadTime: null,
    statContext: 'Current rarity-specific values were not published by Epic in the cited update.', sourceLabel: 'Epic Games — Fortnitemares v42.30', sourceUrl: epicLatest, verifiedAt: '2026-10-18',
    note: 'Returned in Battle Royale; Zero Build parity is unconfirmed.',
  },
  {
    id: 'midas-masterpiece', name: "Midas' Masterpiece", category: 'Pistol', rarity: 'Not available', availability: 'new',
    damage: null, headshotDamage: null, fireRate: null, magazineSize: null, reloadTime: null,
    statContext: 'Epic described its high-damage behavior but did not publish numeric base stats.', sourceLabel: 'Epic Games — v42.00 Override', sourceUrl: epicSeason, verifiedAt: '2026-10-18',
    note: 'Season launch item; present-day Zero Build availability is not confirmed.',
  },
  {
    id: 'mega-buster', name: 'Mega Buster', category: 'Energy Weapon', rarity: 'Not available', availability: 'new',
    damage: null, headshotDamage: null, fireRate: null, magazineSize: null, reloadTime: null,
    statContext: 'The official announcement describes three charge states without numeric stats.', sourceLabel: 'Epic Games — v42.00 Override', sourceUrl: epicSeason, verifiedAt: '2026-10-18',
    note: 'Season launch item; present-day Zero Build availability is not confirmed.',
  },
];
