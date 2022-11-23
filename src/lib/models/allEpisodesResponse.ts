import type { Info } from "$lib/models/info";
import type { Episode } from "$lib/models/episode";

export interface AllEpisodesResponse{
    info : Info;
    results: Episode[];
}