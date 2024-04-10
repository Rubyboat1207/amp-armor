<script>
  import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
  import { Carousel } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import render from "../assets/product_render.png"
  import highway_fire from "../assets/highway_fire.png"
  import house_explode from "../assets/house_explode.webp"
  import leaf from "../assets/leaf.webp"


  export const images = [
    {
      alt: 'Highway fire',
      src: highway_fire,
      title: 'Highway Fire'
    },
    {
      alt: 'Exploded house',
      src: house_explode,
      title: 'house exploded'
    },
    {
      alt: 'Leaf in Ukraine',
      src: leaf,
      title: 'Ukraine Leaf'
    }
  ];
</script>

<Section name="heroVisual">
  <div class="flex">
    <div class="mr-auto place-self-center lg:col-span-7">
      <HeroHeader h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        <svelte:fragment slot="h1">Keeping you and your car safe</svelte:fragment>
        <svelte:fragment slot="paragraph">With the green future promised by EV cars, saftey is our <strong>number one concern</strong>. Our EV Car Battery extiguisher/early warning system/whatevr we want it to be helps you when you may need it the most.</svelte:fragment>
        <a href="/"><Button size="xl" color="primary" class="inline-flex items-center justify-center mr-3">Learn More<ArrowRightOutline size="md" class="ml-2 -mr-1" /></Button> </a>
        <a href="/"><Button color="light" size="xl" class="inline-flex items-center justify-center">Our Solution</Button> </a>
      </HeroHeader>
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={render} alt="mockup" />
    </div>
  </div>
</Section>

<div class="flex justify-center">
  <div class="flex pb-10 max-w-screen-xl lg:w-11/12 flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 lg:ml-5">
      <h1 class="font-black text-5xl lg:text-left text-center mt-5 lg:mt-0">The present danger of EVs</h1>
      <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 p-4 lg:text-left text-center">Whether on the road, plugged in or simply unattended EVs can pose a serious danger to those around them.</p>
    </div>
    <div class="lg:w-1/2">
    <Carousel {images} duration="5000"/>
    </div>
  </div>
</div>