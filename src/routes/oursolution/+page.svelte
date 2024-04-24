<script>
    import {
        Section,
        News,
        HeroHeader,
        HeroBody,
    } from "flowbite-svelte-blocks";
    import { base } from "$app/paths";
    import { Carousel } from "flowbite-svelte";
    import { Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
    import render from "../../assets/product_render.png";
    import NavButton from "../../components/NavButton.svelte";
</script>

<Section name="heroVisual">
    <div class="flex mt-10">
        <div class="mr-auto place-self-center lg:col-span-7">
            <div class="lg:w-1/2 lg:hidden mt-5 mb-5">
                <img
                    class="border-2 border-electric-cyan-50"
                    style="box-shadow: 0px 0px 015px #00ffff;"
                    src={render}
                    alt="product CAD"
                />
            </div> 
            <HeroHeader
                h1Class="max-w-2xl mb-4 text-4xl text-primary-500 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
                pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            >
                <svelte:fragment slot="h1"
                    >Our Solution to the Dages of Electic Vehicles</svelte:fragment
                >
                <svelte:fragment slot="paragraph"
                    >Electric, hybrids, and other plug-in vehicles are on the
                    rise in almost every state and country as our modern world
                    begins the transition away from fossil fuels and towards
                    green energy. With the ever increasing popularity of
                    Electric Vehicles, the more risk there is for these vehicles
                    to harm people, and property. <strong>Safety is our number one concern</strong>. Our EV Car Battery extiguisher/early warning
                    system/whatevr we want it to be helps you when you may need it the most.</svelte:fragment
                >
            </HeroHeader>
        </div>
        <div class="lg:w-1/2 lg:block hidden lg:mr-5">
            <img
                class="border-2 border-electric-cyan-50"
                style="box-shadow: 0px 0px 015px #00ffff;"
                src={render}
                alt="product CAD"
            />
        </div>
    </div>
</Section>

