<script>
  import { Section, News, HeroHeader, HeroBody } from "flowbite-svelte-blocks";
  import { base } from "$app/paths";
  import { Carousel } from "flowbite-svelte";
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import render from "../../assets/product_render.png";
  import NavButton from "../../components/NavButton.svelte";
  import Paragraph from "../../components/Paragraph.svelte";
</script>

<div class="w-full flex justify-center">
  <div class="w-11/12">
    <Section name="heroVisual">
      <div class="flex mt-10">
        <div class="mr-auto place-self-center lg:col-span-7">
          <HeroHeader
            h1Class="max-w-2xl mb-4 text-4xl text-primary-500 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
            pClass="max-w-2xl mb-6 font-light text-primary-400 lg:mb-8 md:text-lg lg:text-xl"
          >
            <svelte:fragment slot="h1"
              >Keeping You and Your Car Safe</svelte:fragment
            >
            <svelte:fragment slot="paragraph"
              >Electric, hybrid, and other plug-in vehicles are becoming more
              popular across various states and countries as we shift from
              fossil fuels to green energy. As Electric Vehicles (EVs) grow in
              popularity, there's an increased risk of accidents that could harm
              people and property. Safety is our top priority. Our EV Car
              Battery Extinguisher is designed to provide assistance when you
              need it most.</svelte:fragment
            >
            <NavButton page="procedure" text="Product Proceedure" />
          </HeroHeader>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={render}
            alt="mockup"
            class="border-2 border-electric-cyan-50 rounded-lg aspect-auto ml-5"
            style="box-shadow: 0px 0px 015px #00ffff;"
          />
        </div>
      </div>
    </Section>
    <div class="mb-24"></div>
    <Paragraph>
      <div slot="title" class="text-electric-cyan-100">
        Self-Activating Fire Suppression System
      </div>
      <div slot="p" class="text-white text-xl w-full">
        This device is meant to give you, your family, and first responders
        crucial time to get out and get away, and plan what to do. Like Bishal
        Malla's story, you might not even be aware of the danger you're in until
        it's too late. All because you weren't aware.
        <br />
        The extinguishing agent is a minimal-impact foaming agent that, when mixed
        with water, creates an expanding barrier between the battery and the car
        around it. This foam is stored in a strong, pressurized metal canister. Like
        a fire extinguisher, meant to be resilient against the years.
        <br />
        The activation system doesn't require any driver input, and instead relies
        on heat emitted by the fire. It uses a thermomechanical switch, meaning when
        heat is applied, the material in the switch begins to change shape and contact
        the other side of the circuit. It connects the circuit, and then powers a
        motor which uncorks the canister and lets the extinguishing agent flow out.
        <br />
        In the event this system fails, the cap itself is made of a metal made to
        melt a certain temperature to release the extinguishing agent.
      </div>
    </Paragraph>
    <Paragraph color="bg-red-500">
      <div slot="title" class="text-red-500">How does it work?</div>
      <div slot="p" class="text-white text-xl w-full">
        The chemical in the fire extinguisher is an expanding foam meant to put
        out Class A and B fuel fires. The class simply means what an
        extinguisher is meant to put out. The fire extinguishers you have at
        home, for example, are Class ABC. Class A fires are fires on things like
        wood, paper, or cloth. Class B fires involve liquids, like gasoline or
        the electrolyte in batteries.
        <br />
        Another important step to understanding how fires work is the fire triangle.
        <div class="flex w-full justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Fire_triangle.svg/1200px-Fire_triangle.svg.png"
            alt="Fire Triangle"
            class="w-full lg:w-3/12"
          />
        </div>
        If a runaway reaction has already begun, we don’t expect the extinguisher
        to be enough to fully stop the runaway reaction. However, by cooling the
        battery and cutting off oxygen, it significantly reduces the reaction rate
        and increases the time it takes for the battery to ignite, buying valuable
        time for the driver.
      </div>
    </Paragraph>
  </div>
</div>
