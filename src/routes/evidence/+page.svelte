<script>
  import Paragraph from "../../components/Paragraph.svelte";
  import VerticalTimeline from "../../components/VerticalTimeline.svelte";
  import highway_fire from "../../assets/highway_fire.png";
  import TimelineElement from "../../components/TimelineElement.svelte";
  import house_explode from "../../assets/house_explode.webp";
  import leaf from "../../assets/leaf.webp";
</script>

<div class="text-5xl text-white text-center mt-20 font-bold mb-10">
  Historical Precedence
</div>

<Paragraph>
  <span
    slot="title"
    class="text-electric-cyan-100 size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold"
    >A Growing problem</span
  >
  <div slot="p" class="text-white lg:text-lg">
    As EVs begin to take over the market, it is increasingly likely that you
    will end up right next to one of these cars. For example, in 2023, the Tesla
    Model Y had 1.2 million registrations in the United States and being the 5th
    most sold car according to kelly blue book. Already, 1 out of every 50 cars
    on the road are EVs or Hybrids.

    <div class="mt-5"></div>
    <span
      >https://cleantechnica.com/2024/02/05/world-ev-sales-report-tesla-model-y-is-the-best-selling-model-in-the-world/</span
    >
    <br/>
    <span
      >https://www.kbb.com/best-cars/top-10-25-best-selling-cars-trucks-suvs/</span
    >
  </div>
</Paragraph>
