<script>
  import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
  import { Carousel } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import render from "../assets/product_render.png"
  import highway_fire from "../assets/highway_fire.png"
  import house_explode from "../assets/house_explode.webp"
  import leaf from "../assets/leaf.webp"
  import { base } from "$app/paths";
  import NavButton from '../components/NavButton.svelte';

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
  <div class="flex mt-10">
    <div class="mr-auto place-self-center lg:col-span-7">
      <HeroHeader h1Class="max-w-2xl mb-4 text-4xl text-primary-500 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl" pClass="max-w-2xl mb-6 font-light text-primary-400 lg:mb-8 md:text-lg lg:text-xl">
        <svelte:fragment slot="h1">Keeping You and Your Car Safe</svelte:fragment>
        <svelte:fragment slot="paragraph">Electric, hybrids, and other plug-in vehicles are on the rise in almost every state and country as our modern world begins the transition away from fossil fuels and towards green energy. With the ever increasing popularity of Electric Vehicles, the more risk there is for these vehicles to harm people, and property. <strong>Safety is our number one concern</strong>. Our EV Car Battery extiguisher/early warning system/whatevr we want it to be helps you when you may need it the most.</svelte:fragment>
        <NavButton page='oursolution' text='Learn More'/>
        <NavButton page='proceedure' text='Product Proceedure'/>
      </HeroHeader>
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={render} alt="mockup" />
    </div>
  </div>
</Section>

<div class="flex justify-center">
  <div class="flex pb-10 max-w-screen-xl lg:w-11/12 flex-col lg:flex-row">
    <div class="lg:w-1/2 lg:block hidden lg:mr-5">
      <Carousel class="border-2 border-electric-cyan-50" style="box-shadow: 0px 0px 015px #00ffff;" {images} duration="5000"/>
    </div>
    <div class="w-full lg:w-1/2 lg:mr-5">
      <h1 class="font-black text-5xl text-primary-500 lg:text-left text-center mt-5 lg:mt-0">The Danger of EVs</h1>
      <p class="max-w-2xl mb-6 font-light text-primary-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 p-4 lg:text-left text-center">Whether on the road, plugged in or simply unattended EVs can pose a serious danger to those around them.</p>
      <NavButton page='precedence' text='Historical Precedence'/>
    </div>
    <div class="lg:w-1/2 lg:hidden">
    <Carousel class="border-2 border-electric-cyan-50 mt-5" style="box-shadow: 0px 0px 015px #00ffff;" {images} duration="5000"/>
    </div>
  </div>
</div>

<div class="mt-20"></div>

<div class="flex justify-center">
  <div class="flex pb-10 max-w-screen-xl lg:w-11/12 flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 lg:mr-5">
      <h1 class="font-black text-5xl text-primary-500 lg:text-left text-center mt-5 lg:mt-0">AMP-Armor TED talk presentation</h1>
      <p class="max-w-2xl mb-6 font-light text-primary-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 p-4 lg:text-left text-center">Learn how our innovative EV battery fire prevention product is setting new safety standards in our TED Talk, explore how we're making electric vehicles safer for everyone.</p>
      <NavButton page='precedence' text='Watch our Presentation'/>
    </div>
    <div class="lg:w-1/2 lg:mr-5 lg:block h-64 flex justify-center">
      <iframe class="w-full h-full" title="presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vQlnlqH_N4uPmb6vSzeDH_K008Eo1HCMMCe2nAfjhFVLOEgys_jIIWMLKZYH4CxwT-qbYtvko9vFd6b/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
  </div>
</div>