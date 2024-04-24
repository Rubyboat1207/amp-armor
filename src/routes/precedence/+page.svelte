<script>
  import Paragraph from "../../components/Paragraph.svelte";
  import VerticalTimeline from "../../components/VerticalTimeline.svelte";
</script>

<Paragraph>
  <span
    slot="title"
    class="text-electric-cyan-100 size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold"
    >Decades of inaction</span
  >
  <p slot="p" class="text-white lg:text-lg">
    Electric vehicles (EVs) symbolize progress in eco-friendly transportation,
    yet the journey toward safer lithium-ion batteries reveals significant gaps
    in industry response. Historically, incidents of EV battery fires have
    exposed vulnerabilities, but the pace of implementing enhanced safety
    measures and industry regulations has been frustratingly slow. This lack of
    decisive action underscores the need for more rigorous safety protocols and
    faster adaptation to protect consumers and advance the reliability of EV
    technology.
  </p>
</Paragraph>

<Paragraph color={"bg-red-500"}>
  <span
    slot="title"
    class="text-red-500 size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold"
    >Timeline</span
  >
  <div slot="p">
    <VerticalTimeline
      events={[{ date: "May 9th 2023", text: "Mishal Malla" }, "event2"]}
    />
  </div>
</Paragraph>
