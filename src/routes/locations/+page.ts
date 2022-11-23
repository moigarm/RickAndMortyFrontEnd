import type { AllLocationResponse } from "$lib/models/allLocationResponse";

export async function load({ params }) {
    const id = params.id;
    const location: AllLocationResponse = await fetch(`https://rickandmortyapi.com/api/location/${id}`).then((res) => res.json());
    console.log(location);
    return location;
  }