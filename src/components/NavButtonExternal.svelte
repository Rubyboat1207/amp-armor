<script lang="ts">
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { base } from "$app/paths";

    export let page: string;
    export let text: string;
    export let hover_color: string = 'electric-cyan-100';
    export let color: string = 'bond-blue';
</script>

<a href="{page}" target="_blank"><Button size="xl" class={`inline-flex items-center justify-center mr-3 hover:bg-${hover_color} bg-${color}`}>{text}<ArrowRightOutline size="md" class="ml-2 -mr-1" /></Button></a>
