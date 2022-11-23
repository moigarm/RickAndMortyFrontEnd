import type { Character } from "$lib/models/character";
import type { Info } from "$lib/models/info";

export interface AllCharacterResponse{
    info : Info
    results: Character[];
}