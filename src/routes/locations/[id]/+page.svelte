<script lang="ts">
    import type { Location} from '$lib/models/location';
    export let data: Location;
</script>

{#if data}
    Hello
    <h1>{data.name}</h1>
    <p>{data.type}</p>
    <p>{data.dimension}</p>
{/if}