<script>
  import Paragraph from "../../components/Paragraph.svelte";
  import VerticalTimeline from "../../components/VerticalTimeline.svelte";
  import highway_fire from "../../assets/highway_fire.png";
  import TimelineElement from "../../components/TimelineElement.svelte";
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
<div class="h-0.5 w-full bg-slate-800 mt-7"></div>

<Paragraph color={"bg-red-500"}>
  <span
    slot="title"
    class="text-red-500 size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold"
    >Timeline</span
  >
  <div slot="p">
    <div class="flex flex-col">
      <div class="">
        <!-- Timeline line -->
        <TimelineElement>
          <p slot="year">May 9th 2023</p>
          <div slot="content">
            <div class="flex justify-between">
              <h2 class="text-5xl">Bishal Malla</h2>
              <img
                src={highway_fire}
                alt="Tesla on fire on highway offramp"
                class="hidden lg:block w-4/12 rounded-lg"
              />
            </div>
            <img
              src={highway_fire}
              alt="Tesla on fire on highway offramp"
              class="lg:hidden block w-full rounded-lg mt-3 mb-3"
            />
            <div>
              <p>
                Bishal was in his early thirties and he has two daughters. On this
                faitful day he was driving his Tesla Model Y off the highway. He was
                only going about 20 miles per hour when he noticed his car shaking.
                Thinking it was a flat tire he then pulled to the side of the highway.
                After pulling over to inspect what was wrong, he noticed a thick white
                smoke coming from the underside of his vehicle. At that very moment, his
                car burst into a violent inferno. He immediately called 911, but by the
                time first responders arrived at the scene, the car was completely
                engulfed in flames. In an interview following the incident, he remarked
                that when backing away from the vehicle, he saw the car seats of his
                daughter, he could only think about what would happen to them if they
                were in the car at the time.
              </p>
              <p class="mt-3 text-primary-400">
                "Caught on camera: Tesla catches fire on Highway 99" May 9, 2023 / 11:31
                AM PDT <a
                  class="text-electric-cyan-50 underline"
                  href="https://www.cbsnews.com/sacramento/news/caught-on-camera-tesla-catches-fire-on-highway-99/"
                  >https://www.cbsnews.com/sacramento/news/caught-on-camera-tesla-catches-fire-on-highway-99/</a
                >
              </p>
            </div>
          </div>
        </TimelineElement>
      </div>
    </div>
  </div>
</Paragraph>
