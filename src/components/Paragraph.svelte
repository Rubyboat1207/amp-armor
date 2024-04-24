<script lang="ts">
    export let color = "bg-electric-cyan-100";
</script>

<div class="flex justify-around mt-10 flex-col lg:flex-row">
    <div class="flex mb-5 lg:mb-0 lg:w-2/12">
        <div class="flex w-full items-center h-fit justify-center">
            <div class={`rounded-full ${color} w-5 h-5 lg:w-3 lg:h-3 mr-2`}></div>
            <slot name="title" class={`${color} size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold`}/>
        </div>
    </div>
    <div class="lg:w-8/12">
        <slot name="p"/>
    </div>
</div>