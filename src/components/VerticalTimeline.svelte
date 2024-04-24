<script lang="ts">
  export let events: {date: string, text: string, height?: string}[] = [];
</script>

<div class="flex flex-col">
  <div class="">
    <!-- Timeline line -->
    {#each events as event, index (event)}
      <div class="flex items-center align-middle w-full">
        <p class="text-gray-300 mr-2 w-5/12 text-right">{event.date}</p>

        <!-- Timeline event circle -->
        <div class="flex flex-col justify-center items-center w-1/12 self-stretch">
          <div class={`w-1 h-full min-h-4 bg-blue-500`}></div>
          <div class={`w-4 h-4 bg-blue-500 rounded-full`}></div>
          <div class={`w-1 h-full min-h-4 bg-blue-500`}></div>
        </div>
        <!-- Timeline event content -->
        <p class="text-gray-300 ml-2 w-6/12">{event.text}</p>
        <div style={`height: ${event.height || '0px'}`}></div>
      </div>
    {/each}
  </div>
</div>
