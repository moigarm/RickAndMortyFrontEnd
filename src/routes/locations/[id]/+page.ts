import type { Location } from "$models/location";

export async function load({ params }) {
    const id = params.id;
    const location: Location = await fetch(`https://rickandmortyapi.com/api/location/${id}`).then((res) => res.json());
    console.log(location);
    return location;
  }