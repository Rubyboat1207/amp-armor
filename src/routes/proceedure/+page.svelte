<script lang="ts">
  import Paragraph from "../../components/Paragraph.svelte";
</script>

<div class="text-5xl text-white text-center mt-20 font-bold mb-10">Product Procedure</div>
<Paragraph>
  <span
    slot="title"
    class="text-electric-cyan-100 size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold"
    >Professional Organization</span
  >
  <p slot="p" class="text-white lg:text-lg">
    For our solution, we will be using a chemical fire extinguisher. Chemicals
    are regulated by the EPA. We will use an approved chemical non-fluorinated
    aqueous expanding foam fire extinguisher. EPA regulations related to fire
    extinguishing agents primarily focus on environmental considerations, such
    as the Clean Air Act and Clean Water Act. These regulations aim to minimize
    the impact of firefighting chemicals on air and water quality. NFPA 10:
    Standard for Portable Fire Extinguishers: This standard provides
    comprehensive guidance on the selection, installation, maintenance, and use
    of portable fire extinguishers. It covers various types of fire
    extinguishing agents, including aqueous film-forming foam (AFFF), which is
    similar to non-fluorinated aqueous expanding foam. Underwriters Laboratories
    (UL): UL is a global safety certification company that conducts testing and
    certification of various products, including fire protection equipment and
    systems. Fire extinguishers, fire alarms, sprinklers, and other fire safety
    products may undergo UL testing and certification to ensure compliance with
    safety standards. Federal Emergency Management Agency (FEMA): FEMA is an
    agency of the United States Department of Homeland Security responsible for
    coordinating disaster response, recovery, and preparedness efforts. FEMA
    provides resources and guidance related to fire safety and emergency
    management. National Highway Traffic Safety Administration (NHTSA): The
    NHTSA, a part of DOT, is responsible for setting and enforcing vehicle
    safety standards. This includes regulations related to crashworthiness,
    occupant protection, and vehicle performance. For electric vehicles, NHTSA
    establishes safety standards specific to EV components such as batteries,
    electric drivetrains, and charging systems. DOT, through agencies like
    NHTSA, provides educational resources and outreach initiatives to raise
    awareness about electric vehicle safety among consumers, vehicle
    manufacturers, and first responders. These efforts may include safety
    guidelines for charging infrastructure, information about EV-specific safety
    features, and training programs for emergency responders on handling
    electric vehicle accidents.
  </p>
</Paragraph>
<Paragraph color="bg-red-500">
  <span
    slot="title"
    class="size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold text-red-500"
    >Problem Statement</span
  >
  <p slot="p" class="text-white lg:text-3xl bold">
    How can we prevent or mitigate damage or loss of life from EV fires caused
    by thermal runaway events
  </p>
</Paragraph>
<Paragraph color="bg-green-400">
  <span
    slot="title"
    class="text-green-400 size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold"
    >Solution</span
  >
  <p slot="p" class="text-white lg:text-lg">
    In order to mitigate battery fires, we will create an expanding foam fire
    extinguisher that envelopes the battery, starving it of oxygen. This
    provides more time for people to evacuate the vehicle and first responders
    to properly extinguish the battery out before it destroys the vehicle. In
    vehicles coming from the factory, this device can be installed as a new
    safety feature. It can be advertised as a safety feature to prevent property
    damage in vehicle collisions, and other faults that would affect the
    battery. The device is a system of a foam extinguishing agent to coat the
    battery compartment in an electric vehicle. The device is a standalone unit,
    and has its own backup battery that will keep the safety feature active even
    in a blackout situation. This device will also be able to be retro-fitted to
    older electric vehicles that didn't have the option to have the device
    equipped from the factory.
  </p>
</Paragraph>
<Paragraph color="bg-yellow-400">
  <span
    slot="title"
    class="size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold text-yellow-400"
    >Safety considerations</span
  >
  <div slot="p">
    <ul class="text-white lg:text-lg">
      <li>
        Is it safe? Is it effective? Will it work in a variety of situations?<br
        />
      </li>
      <ul>
        <li>
          Is the extinguishing agent safe to life and the environment and/or
          causes minimal disturbance?<br />
        </li>
        <li>Does it actually extinguish the fires at the source?<br /></li>
      </ul>
    </ul>
  </div>
</Paragraph>
<Paragraph>
  <span
    slot="title"
    class="text-electric-cyan-100 size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold"
    >Resources</span
  >
  <div slot="p" class="text-white lg:text-lg list-disc">
    <li>
      Physical
      <div class="list-disc ml-8">
        <li>Expanding foam chemical(s)</li>
        <li>glycerin-based liquid for heat bulb</li>
        <li>glass bulb</li>
        <li>metal canister</li>
        <li>steel tubing</li>
      </div>
    </li>
    <li>
      Human
      <div class="list-disc ml-8">
        <li>Legislators</li>
        <li>Manufacturers</li>
        <li>First responders: Police, Fire, and EMS</li>
        <li>Owners</li>
        <li>Concerned citizens</li>
        <li>Automotive Technicians (maintenance to ensure proper function)</li>
      </div>
    </li>
  </div>
</Paragraph>
<Paragraph color="bg-red-500">
  <span
    slot="title"
    class="size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold text-red-500"
    >Capital</span
  >
  <div slot="p" class="text-white lg:text-lg list-disc">
    <div class="list-disc">
      <li>
        Government: Local, State, and Federal
        <div class="list-disc ml-8">
          <li>
            Local
            <div class="list-disc ml-8">
              <li>Firefighters</li>
            </div>
          </li>
          <li>
            State
            <div class="list-disc ml-8">
              <li>State legislators</li>
              <li>State DOTs</li>
              <li>Interstate Commerce Commission</li>
            </div>
          </li>
          <li>
            Federal
            <div class="list-disc ml-8">
              <li>Department of Transportation</li>
              <li>Federal Highway Administration</li>
              <li>National Transportation Safety Board</li>
              <li>
                Biden Administration has passed legislation restricting the
                import of Chinese-made EVs and EV batteries
              </li>
            </div>
          </li>
          <li>
            Foreign Regulatory & Governmental Bodies
            <div class="list-disc ml-8">
              <li>European Union</li>
            </div>
          </li>
        </div>
      </li>
      <li>
        Manufacturers
        <div class="list-disc ml-8">
          <li>
            Automakers
            <div class="list-disc ml-8">
              <li>
                Foreign
                <div class="list-disc ml-8">
                  <li>Toyota</li>
                  <li>Honda</li>
                  <li>Nissan</li>
                  <li>Hyundai</li>
                  <li>BMW</li>
                  <li>Volkswagen-Audi and Porsche, etc.</li>
                </div>
              </li>
              <li>
                Domestic
                <div class="list-disc ml-8">
                  <li>MOPAR</li>
                  <li>General Motors</li>
                  <li>Ford Motor Company (including Land Rover and Jaguar)</li>
                  <li>Tesla</li>
                  <li>Rivian</li>
                </div>
              </li>
            </div>
          </li>
        </div>
      </li>
      <li>
        Private Businesses, Organizations, and Citizens
        <div class="list-disc ml-8">
          <li>NFPA (National Fire Protection Association)</li>
          <li>Society of Automotive Engineers</li>
          <li>ACEA (European Automobile Manufacturers’ Association)</li>
        </div>
      </li>
    </div>
  </div>
</Paragraph>
<Paragraph color="bg-green-400">
  <span
    slot="title"
    class="text-green-400 size-5 text-lg lg:text-sm flex justify-center items-center w-fit uppercase font-bold"
    >Solution</span
  >
  <div slot="p" class="text-white lg:text-lg list-disc">
    <li>
      R&D
      <div class="list-disc ml-8">
        <li>
          By conducting thorough research and development to refine our system's
          design and functionality. This may involve prototyping, testing
          various components, and optimizing the system for performance and
          reliability.
        </li>
      </div>
    </li>
    <li>
      Regulatory Compliance
      <div class="list-disc ml-8">
        <li>
          Ensure that our system complies with all relevant regulations and
          standards. This includes safety regulations from organizations such as
          the National Highway Traffic Safety Administration (NHTSA) for vehicle
          safety systems and the Environmental Protection Agency (EPA) for
          environmental considerations.
        </li>
      </div>
    </li>
    <li>
      Partnerships and Collaborations
      <div class="list-disc ml-8">
        <li>
          Establish partnerships and collaborations with relevant stakeholders,
          such as vehicle manufacturers, electric utilities, government
          agencies, and emergency responders. These partnerships can provide
          valuable insights, resources, and support for implementing your
          system.
        </li>
      </div>
    </li>
    <li>
      Integration with Electric Vehicles
      <div class="list-disc ml-8">
        <li>
          Integrate our system with electric vehicles' onboard systems and
          infrastructure. This may involve developing software interfaces,
          hardware components, and communication protocols to ensure seamless
          integration and compatibility with different vehicle models.
        </li>
      </div>
    </li>
    <li>
      Testing and Validation
      <div class="list-disc ml-8">
        <li>
          Conduct rigorous testing and validation of your system in real-world
          conditions. This includes testing its performance, reliability, and
          safety under various scenarios, such as different driving conditions,
          battery states, and emergency situations.
        </li>
      </div>
    </li>
    <li>
      Pilot Programs
      <div class="list-disc ml-8">
        <li>
          Launch pilot programs to evaluate the effectiveness of our system in
          real-world settings. Partner with fleet operators, electric vehicle
          owners, or municipalities to deploy your system on a small scale and
          gather feedback from users and stakeholders.
        </li>
      </div>
    </li>
    <li>
      Deployment and Scaling
      <div class="list-disc ml-8">
        <li>
          Once the pilot programs have demonstrated the viability and
          effectiveness of our system, begin deploying it more widely. This may
          involve partnering with electric vehicle manufacturers to integrate
          your system into new vehicles or offering retrofit solutions for
          existing electric vehicle fleets.
        </li>
      </div>
    </li>
    <li>
      Training and Support
      <div class="list-disc ml-8">
        <li>
          Provide training and support for users, maintenance personnel, and
          emergency responders on how to operate, maintain, and respond to
          incidents involving your system. This ensures that your system is used
          effectively and safely throughout its lifecycle.
        </li>
      </div>
    </li>
    <li>
      Continuous Improvement
      <div class="list-disc ml-8">
        <li>
          Continuously monitor and evaluate the performance of your system in
          the field. Gather feedback from users, analyze data, and identify
          areas for improvement. This iterative process helps ensure that your
          system evolves to meet changing needs and challenges over time.
        </li>
      </div>
    </li>
  </div>
</Paragraph>
