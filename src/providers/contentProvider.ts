import { creators } from '../data/creators';
import { guides } from '../data/guides';
import { loot } from '../data/loot';
import { updates } from '../data/updates';
import { weapons } from '../data/weapons';
import type { SiteContent } from '../types';

export interface ContentProvider {
  load(): Promise<SiteContent>;
}

class MaintainedSnapshotProvider implements ContentProvider {
  async load(): Promise<SiteContent> {
    await new Promise((resolve) => window.setTimeout(resolve, 220));
    return { weapons, loot, updates, creators, guides, refreshedAt: '2026-10-18T14:42:37-05:00' };
  }
}

export const contentProvider: ContentProvider = new MaintainedSnapshotProvider();
