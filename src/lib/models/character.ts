import type { CharacterStatus } from "$lib/models/characterStatus";

export interface Character{
    id: number;
    name: string;
    // alive, dead or unknown
    status: CharacterStatus;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    },
    location: {
      name: string;
      url: string;
    },
    image: string;
    episode: string[];
    url: string;
    created: Date;
  }
