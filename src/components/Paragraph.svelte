<script lang="ts">
    export let color = "bg-electric-cyan-100";
</script>

<div class="flex justify-around mt-10 flex-col lg:flex-col">
    <div class="flex mb-5 lg:mb-0 lg:w-full">
        <div class="flex w-full items-center h-fit ml-10 mb-5">
            <div class={`rounded-full ${color} w-5 h-5 lg:w-3 lg:h-3 mr-2`}></div>
            <slot name="title" class={`${color} size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold`}/>
        </div>
    </div>
    <div class="lg:w-full">
        <div class="ml-5">
            <slot name="p"/>
        </div>
    </div>
</div>