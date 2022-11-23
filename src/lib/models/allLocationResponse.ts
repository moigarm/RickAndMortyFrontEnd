import type { Location } from "$lib/models/location";
import type { Info } from "$lib/models/info";

export interface AllLocationResponse{
    info : Info;
    results: Location[];
}