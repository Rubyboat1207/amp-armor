<script>
  import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
  import { Carousel } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import render from "../assets/product_render.png"
  import highway_fire from "../assets/highway_fire.png"


  export const images = [
    {
      alt: 'Highway fire',
      src: highway_fire,
      title: 'Highway Fire'
    },
    {
      alt: 'Cristina Gottardi',
      src: '/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp',
      title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
    },
    {
      alt: 'Johannes Plenio',
      src: '/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp',
      title: 'johannes-plenio-RwHv7LgeC7s-unsplash.com'
    }
  ];
</script>

<Section name="heroVisual">
  <div class="flex">
    <div class="mr-auto place-self-center lg:col-span-7">
      <HeroHeader h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        <svelte:fragment slot="h1">Keeping you and your car safe</svelte:fragment>
        <svelte:fragment slot="paragraph">With the green future promised by EV cars, saftey is our <strong>number one concern</strong>. Our EV Car Battery extiguisher/early warning system/whatevr we want it to be helps you when you may need it the most.</svelte:fragment>
        <a href="/"><Button size="xl" color="red" class="inline-flex items-center justify-center mr-3">Learn More<ArrowRightOutline size="md" class="ml-2 -mr-1" /></Button> </a>
        <a href="/"><Button color="light" size="xl" class="inline-flex items-center justify-center">Our Solution</Button> </a>
      </HeroHeader>
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={render} alt="mockup" />
    </div>
  </div>
</Section>

<div>
  <Carousel {images} duration="5000"/>
</div>