<div class="flex items-center align-middle w-full">
  <div class="text-gray-300 mr-2 w-1/12 text-right"><slot name="year" /></div>

  <!-- Timeline event circle -->
  <div class="flex flex-col justify-center items-center w-1/12 self-stretch">
    <div class={`w-1 h-full min-h-4 bg-blue-500`}></div>
    <div class={`w-4 h-4 bg-blue-500 rounded-full`}></div>
    <div class={`w-1 h-full min-h-4 bg-blue-500`}></div>
  </div>
  <!-- Timeline event content -->
  <div class="text-gray-300 ml-2 w-9/12 mb-12 mt-12">
    <slot name="content" />
  </div>
</div>
