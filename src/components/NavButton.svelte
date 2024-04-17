<script lang="ts">
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { base } from "$app/paths";

    export let page: string;
    export let text: string;
</script>

<a href="{base}/{page}"><Button size="xl" class="inline-flex items-center justify-center mr-3 hover:bg-electric-cyan-100 bg-bond-blue">{text}<ArrowRightOutline size="md" class="ml-2 -mr-1" /></Button></a>
