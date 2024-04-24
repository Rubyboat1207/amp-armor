<script>
  import Paragraph from "../../components/Paragraph.svelte";
  import VerticalTimeline from "../../components/VerticalTimeline.svelte";
  import highway_fire from "../../assets/highway_fire.png";
  import TimelineElement from "../../components/TimelineElement.svelte";
  import house_explode from "../../assets/house_explode.webp";
  import leaf from "../../assets/leaf.webp";
</script>

<div class="text-5xl text-white text-center mt-20 font-bold mb-10">Historical Precedence</div>

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
          <p slot="year">Jul 27, 2019</p>
          <div slot="content">
            <div class="flex justify-between">
              <h2 class="text-5xl">Garage Door Explosion</h2>
              <img
                src={house_explode}
                alt="House with a garage door blown off"
                class="hidden lg:block w-4/12 rounded-lg"
              />
            </div>
            <img
              src={house_explode}
              alt="House with a garage door blown off"
              class="lg:hidden block w-full rounded-lg mt-3 mb-3"
            />
            <div class="mb-10">
              <p>
                Bishal was in his early thirties and he has two daughters. On
                this faitful day he was driving his Tesla Model Y off the
                highway. He was only going about 20 miles per hour when he
                noticed his car shaking. Thinking it was a flat tire he then
                pulled to the side of the highway. After pulling over to inspect
                what was wrong, he noticed a thick white smoke coming from the
                underside of his vehicle. At that very moment, his car burst
                into a violent inferno. He immediately called 911, but by the
                time first responders arrived at the scene, the car was
                completely engulfed in flames. In an interview following the
                incident, he remarked that when backing away from the vehicle,
                he saw the car seats of his daughter, he could only think about
                what would happen to them if they were in the car at the time.
              </p>
              <p class="mt-3 text-primary-400 text-sm">
                "Electric car catches fire and explodes in Île-Bizard garage"
                Jul 27, 2019 6:09 AM CDT <a
                  class="text-electric-cyan-50 underline"
                  href="https://www.cbsnews.com/sacramento/news/caught-on-camera-tesla-catches-fire-on-highway-99/"
                  >https://www.cbsnews.com/sacramento/news/caught-on-camera-tesla-catches-fire-on-highway-99/</a
                >
              </p>
            </div>
          </div>
        </TimelineElement>
        <TimelineElement>
          <p slot="year">Jul 8, 2021</p>
          <div slot="content">
            <div class="flex justify-between">
              <h2 class="text-5xl">Khmelnytskyi Ukraine Fire</h2>
              <img
                src={leaf}
                alt="Red nissan leaf with white smoke"
                class="hidden lg:block w-4/12 rounded-lg"
              />
            </div>
            <img
              src={leaf}
              alt="Red nissan leaf with white smoke"
              class="lg:hidden block w-full rounded-lg mt-3 mb-3"
            />
            <div class="mb-10">
              <p>
                In Khmelnytskyi (zeh-myentski), Ukraine a used Red Nissan Leaf
                parked outside a shopping center caught fire while charging.
                Reports from witnesses say that they noticed a thick white smoke
                coming from the car. The people around tried their hardest with
                conventional fire extinguishers and the help of the fire
                department to extinguish the car… but to no avail
              </p>
              <p class="mt-3 text-primary-400 text-sm">
                Юлія, Дюдюн "In Khmelnitsky during charging burned electric car
                (video of the moment)" 08 July 2021 <a
                  class="text-electric-cyan-50 underline"
                  href="https://www.autocentre.ua/news/v-hmelnitskom-vo-vremya-zaryadki-sgorel-elektromobil-video-momenta-1356053.html"
                  >https://www.autocentre.ua/news/v-hmelnitskom-vo-vremya-zaryadki-sgorel-elektromobil-video-momenta-1356053.html</a
                >
              </p>
            </div>
          </div>
        </TimelineElement>
        <TimelineElement>
          <p slot="year">May 9, 2023</p>
          <div slot="content">
            <div class="flex justify-between">
              <h2 class="text-5xl">Tesla Highway Fire</h2>
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
            <div class="mb-10">
              <p>
                Bishal Malla was in his early thirties and he has two daughters. On
                this faitful day he was driving his Tesla Model Y off the
                highway. He was only going about 20 miles per hour when he
                noticed his car shaking. Thinking it was a flat tire he then
                pulled to the side of the highway. After pulling over to inspect
                what was wrong, he noticed a thick white smoke coming from the
                underside of his vehicle. At that very moment, his car burst
                into a violent inferno. He immediately called 911, but by the
                time first responders arrived at the scene, the car was
                completely engulfed in flames. In an interview following the
                incident, he remarked that when backing away from the vehicle,
                he saw the car seats of his daughter, he could only think about
                what would happen to them if they were in the car at the time.
              </p>
              <p class="mt-3 text-primary-400 text-sm">
                "Caught on camera: Tesla catches fire on Highway 99" May 9, 2023
                / 11:31 AM PDT <a
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
