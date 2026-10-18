export type Availability = 'new' | 'returned' | 'unvaulted' | 'vaulted' | 'historical';

export interface Weapon {
  id: string;
  name: string;
  category: string;
  rarity: string;
  availability: Availability;
  damage: number | null;
  headshotDamage: number | null;
  fireRate: number | null;
  magazineSize: number | null;
  reloadTime: number | null;
  statContext: string;
  sourceLabel: string;
  sourceUrl: string;
  verifiedAt: string;
  note: string;
}

export interface LootItem {
  name: string;
  category: 'Weapons' | 'Healing' | 'Mobility' | 'Utility' | 'Other';
  status: Availability;
  detail: string;
  sourceUrl: string;
}

export interface UpdateItem {
  title: string;
  date: string;
  modes: string[];
  summary: string;
  url: string;
  official: boolean;
}

export interface CreatorChannel {
  platform: string;
  label: string;
  url: string;
  verified: boolean;
}

export interface Creator {
  id: string;
  displayName: string;
  alsoKnownAs?: string;
  initials: string;
  imageUrl: string | null;
  imageNote: string;
  description: string;
  zeroBuildRelevance: string;
  zeroBuildSpecialist: boolean;
  verificationStatus: 'verified' | 'needs-confirmation';
  verificationNote: string;
  channels: CreatorChannel[];
  evidence: string[];
}

export interface GuideTip {
  category: string;
  level: 'Beginner' | 'Advanced';
  title: string;
  text: string;
  scope: 'General strategy' | 'Season-specific';
}

export interface SiteContent {
  weapons: Weapon[];
  loot: LootItem[];
  updates: UpdateItem[];
  creators: Creator[];
  guides: GuideTip[];
  refreshedAt: string;
}
