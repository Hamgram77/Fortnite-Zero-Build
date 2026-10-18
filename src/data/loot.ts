import type { LootItem } from '../types';

const latest = 'https://communities.epicgames.com/thread/fortnitemares-2026-curses-battle-royale-reload-and-more/L4S8/';
const season = 'https://communities.epicgames.com/thread/v42-00-fortnite-override-battle-royale-update-notes/L5R3/';

export const loot: LootItem[] = [
  { name: 'Bonerattler SMG', category: 'Weapons', status: 'new', detail: 'New reveal-oriented SMG in the Fortnitemares update.', sourceUrl: latest },
  { name: "Freddy's Nightmare", category: 'Weapons', status: 'new', detail: 'Boss reward with a teleport-and-slash ability.', sourceUrl: latest },
  { name: 'Wood Stake Shotgun', category: 'Weapons', status: 'returned', detail: 'Returned for Fortnitemares.', sourceUrl: latest },
  { name: 'Dual Fiend Hunters', category: 'Weapons', status: 'returned', detail: 'Returned dual weapons; also featured in an official Power Hour.', sourceUrl: latest },
  { name: 'Heavy Assault Rifle', category: 'Weapons', status: 'returned', detail: 'Returned in v42.30.', sourceUrl: latest },
  { name: 'Quack Snacks', category: 'Healing', status: 'unvaulted', detail: 'Officially listed as unvaulted.', sourceUrl: latest },
  { name: 'Chug Splash', category: 'Healing', status: 'unvaulted', detail: 'Listed among the v42.00 unvaults.', sourceUrl: season },
  { name: 'Slap Candy Corn', category: 'Healing', status: 'returned', detail: 'Available through a Fortnitemares Loot Hack.', sourceUrl: latest },
  { name: 'Witch Broom', category: 'Mobility', status: 'returned', detail: 'Returned for Fortnitemares.', sourceUrl: latest },
  { name: 'Overdrive Grenade', category: 'Mobility', status: 'unvaulted', detail: 'Listed among the v42.00 unvaults.', sourceUrl: season },
  { name: 'Flare Gun', category: 'Utility', status: 'unvaulted', detail: 'Listed among the v42.00 unvaults.', sourceUrl: season },
  { name: "Snack-O'-Lantern Gizmo", category: 'Utility', status: 'new', detail: 'Breaks open to spill Exotic Candy.', sourceUrl: latest },
  { name: 'Tetris Rift', category: 'Other', status: 'vaulted', detail: 'Officially listed as vaulted in v42.30.', sourceUrl: latest },
  { name: 'Drum Gun', category: 'Weapons', status: 'vaulted', detail: 'Officially listed as vaulted in v42.30.', sourceUrl: latest },
  { name: 'Ranger Assault Rifle', category: 'Weapons', status: 'vaulted', detail: 'Officially listed as vaulted in v42.30.', sourceUrl: latest },
];
