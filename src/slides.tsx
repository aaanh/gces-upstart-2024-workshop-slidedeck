/* eslint-disable @next/next/no-img-element */
import { ISlide } from "./pages";
import Image from "next/image"
import SponsorCard, { SponsorCardProps, Tier } from "@/SponsorCard";
import sponsors from "@/sponsors";

const experience: { company: string, position: string, year: string }[] = [
  {
    company: "SimWell",
    position: "Simulation Software Consultant",
    year: "2024"
  },
  {
    company: "Microsoft",
    position: "Software Developer",
    year: "2023"
  },
  {
    company: "Nuance",
    position: "Software Developer",
    year: "2023"
  },
  {
    company: "Genetec",
    position: "Software Developer",
    year: "2022"
  },
  {
    company: "Genetec",
    position: "IT Specialist",
    year: "2021"
  },
  {
    company: "Concordia University",
    position: "IT Analyst II",
    year: "2020 - 2023"
  },
  {
    company: "SAC Research Group",
    position: "SAC Research Group Research Assistant",
    year: "2020-2024"
  }
]

const slides: ISlide[] = [
  {
    children: <>
      <h1 className="text-6xl text-center">Welcome, entrepreneurs. ✈️</h1>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-xl">

          <h1 className="text-8xl text-center">🍵</h1>
          <br></br>
          <h2>⚠️ Disclaimers</h2>
          <ul>
            <li>{`By attending this workshop, you have agreed to the following disclaimers.`}</li>
            <li>{`The views, opinions, operations, and any other at all content owned by me and my account DO NOT represent the views, opinions, works or any at all of my past, present, and current employers, unless explicitly stated.`}</li>
            <li>{`I do not assume any responsibility for injuries, damages, or losses that may result from the use or reliance upon the information provided. By participating in this infosession, you acknowledge and agree to release us from any and all claims, liabilities, or damages arising from or in connection with the use of the materials presented.`}</li>
            <li>{`Viewers' dicretion is advised.`}</li>
          </ul>

        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex flex-col justify-center items-center">

        <h1 className="text-6xl">Sponsors</h1>
        <div className="my-8 flex flex-col">
          <div
            id="gold-sponsors"
            className="scale-[125%] flex flex-wrap items-center justify-center space-y-2 sm:space-x-2 sm:space-y-0 mb-8"
          >
            {sponsors.map(
              (sponsor: SponsorCardProps, index: number) =>
                sponsor.tier === Tier.Gold &&
                <SponsorCard
                  displayName={sponsor.displayName}
                  link={sponsor.link}
                  tier={sponsor.tier}
                  key={index}
                ></SponsorCard>

            )}
          </div>
          <div
            id="silver-sponsors"
            className="flex flex-wrap items-center justify-center space-y-2 sm:space-x-2 sm:space-y-0 mb-8"
          >
            {sponsors.map(
              (sponsor: SponsorCardProps, index: number) =>
                sponsor.tier === Tier.Silver &&
                <SponsorCard
                  displayName={sponsor.displayName}
                  link={sponsor.link}
                  tier={sponsor.tier}
                  key={index}
                ></SponsorCard>

            )}
          </div>

          <div
            id="bronze-sponsors"
            className="scale-[75%] flex flex-wrap items-center justify-center space-y-2 sm:space-x-2 sm:space-y-0"
          >
            {sponsors.map(
              (sponsor: SponsorCardProps, index: number) =>
                sponsor.tier === Tier.Bronze && (
                  <SponsorCard
                    displayName={sponsor.displayName}
                    link={sponsor.link}
                    tier={sponsor.tier}
                    key={index}
                  ></SponsorCard>
                )
            )}
          </div>

          <div
            id="inkind-sponsors"
            className="scale-[65%] -translate-y-10 flex flex-wrap items-center justify-center space-y-2 sm:space-x-8 sm:space-y-0"
          >
            {sponsors.map(
              (sponsor: SponsorCardProps, index: number) =>
                sponsor.tier === Tier.InKind && (
                  <SponsorCard
                    displayName={sponsor.displayName}
                    link={sponsor.link}
                    tier={sponsor.tier}
                    key={index}
                  ></SponsorCard>
                )
            )}
          </div>
        </div>
      </div>

    </>
  },
  {
    children: <>
      <h1 className="text-6xl font-bold text-center text-blue-600">Practical Crash Course to UI/UX<br></br>👏for👏Business👏Products👏<br></br>💼</h1>
    </>
  },
  {
    children: <>
      <div className="flex justify-center w-full items-center">
        <article className="prose prose-2xl">
          <h1>Why should I care?</h1>
          <p className="text-4xl">{`You think...`}</p>
          <blockquote>{`My products' usefulness speaks for themselves. Users will be swarming and paying big bucks for them.`}</blockquote>
          <Image src="/assets/stonk.jpg" width={500} height={500} alt="stonk"></Image>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center w-full items-center">
        <article className="prose prose-2xl">
          {/* <h1>I want to convince you</h1> */}
          <Image src="/assets/change-my-mind.jpg" width={600} height={600} alt="stonk"></Image>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex space-x-0 md:space-x-4 items-center flex-wrap space-y-4 md:space-y-0">
        <div className="relative h-64 w-64">
          <Image alt="profile" fill={true} src="/assets/profile-photo.jpg" className="object-cover object-center rounded-full p-1 border-4 border-green-500"></Image>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="font-bold text-6xl">Anh H. Nguyen</h1>
          <h2 className="text-4xl">Vice President, Technology</h2>
          <h2 className="text-4xl flex items-center"><img className="h-16 w-16" alt="gces" src="/gces.png"></img>&nbsp;GCES</h2>
        </div>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex space-x-8 items-center justify-center">
        <h1 className="text-6xl text-center">Experience👨‍💻</h1>
        <div className="h-96 w-1 border-r-4 border-black"></div>
        <div className="flex flex-wrap">
          {experience.map((exp, idx: number) => <div key={idx} className="relative items-center flex flex-col m-4 w-80 bg-neutral-800 rounded-lg px-4 py-2">
            <div className="relative h-24 w-[175px]">
              <Image src={`/logos/${exp.company}.png`} className="object-contain bg-transparent transition-all ease-in-out px-2 rounded" fill={true} alt={exp.company}></Image>
            </div>
            <p className="absolute top-1 right-2 text-base text-white/75">{exp.year}</p>
            <p className="text-[0.75em] text-center text-white/90">{exp.position}</p>
          </div>)}
        </div>
      </div>
    </>
  },
  {
    children: <div className="flex justify-center items-center">
      <iframe src="https://gcesconcordia.com" className="w-[85vw] h-[85vh] z-50"></iframe>
    </div>
  },

  // ----- What is UI/UX -----

  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-xl">
          <h1>So... what is UI and UX?</h1>
          <p className="font-mono text-3xl">&gt; UI: User Interface</p>
          <p className="font-mono text-3xl">&gt; UX: User Experience</p>
        </article>
      </div>
    </>
  },

  // ----- Definition of UI -----

  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-xl">
          <h1>Can you define UI? 🤔</h1>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>User Interface</h1>
          <ul>
            <li>Users interact with their senses</li>
            <li className="opacity-0">
              {`Who are these "users?"`}
              <ul>
                <li>website visitors</li>
                <li>buyers</li>
                <li>your coworkers</li>
                <li>your grandmom</li>
                <li>you 🫵</li>
              </ul>
            </li>
            <li className="opacity-0">{`Multi-faceted, encompassing, and complex concept`}</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>User Interface</h1>
          <ul>
            <li>Users interact with their senses</li>
            <li>
              {`Who are these "users?"`}
              <ul>
                <li>website visitors</li>
                <li>buyers</li>
                <li>your coworkers</li>
                <li>your grandmom</li>
                <li>you 🫵</li>
              </ul>
            </li>
            <li className="opacity-0">{`Multi-faceted, encompassing, and complex concept`}</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>User Interface</h1>
          <ul>
            <li>Users interact with their senses</li>
            <li>
              {`Who are these "users?"`}
              <ul>
                <li>website visitors</li>
                <li>buyers</li>
                <li>your coworkers</li>
                <li>your grandmom</li>
                <li>you 🫵</li>
              </ul>
            </li>
            <li>{`Multi-faceted, encompassing, and complex concept`}</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl">Iterate, Innovate, and Incorporate</h1>
        <br></br>
        <div className="flex justify-center items-center">
          <img alt="bandwagon" className="h-[400px]" src="/assets/bandwagon.webp"></img>
          <span className="text-6xl">&nbsp;➡️&nbsp;</span>
          <img alt="stm" className="h-[400px]" src="/assets/stm.jpg"></img>
        </div>
        <div className="prose-xl prose">
          <blockquote className="text-4xl">
            <p>{`La STM vous souhaite la bienvenue à bord`}</p>
          </blockquote>
        </div>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>User Interface</h1>
          <h2>Design Principles</h2>
          <ul>
            <li>Consistency</li>
            <li>Clarity</li>
            <li>Accessibility</li>
            <li>Efficiency</li>
            <li>Familiarity</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>User Interface</h1>
          <h2>Design Process</h2>
          <ul>
            <li>Define your target audience 🎯</li>
            <li>Survey the market 👀</li>
            <li>Define features and business requirements (user stories) 📜</li>
            <li>Create a mockup 🤖</li>
            <li>Test 🧪</li>
            <li>Get feedback 👍</li>
            <li>... and iterate over again 🔄</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>UI toolings</h1>
          <ul>
            <li>Prototyping</li>
            <li>Sketching</li>
            <li>Diagramming</li>
            <li>Design system</li>
            <li>Component library</li>
            <li>Testing</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>UI toolings / Prototyping</h1>
          <ul>
            <li>
              <a href="https://www.figma.com">Figma</a>
            </li>
            <li>
              <a href="https://penpot.app">Penpot</a>
            </li>
            <li>
              <a href="https://adobe.com">Photoshop or Illustrator</a>
            </li>
            <li>
              <a href="https://webflow.com">Webflow</a>
            </li>
            <li>
              <a href="https://framer.com">Framer</a>
            </li>
            <li>
              <a href="https://vercel.com">v0 by Vercel</a>
            </li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>UI toolings / Sketching</h1>
          <ul>
            <li>
              <a href="https://tldraw.com">tldraw.com</a>
            </li>
            <li>
              <a href="https://www.sketch.com">Sketch</a>
            </li>
            <li>
              <a href="https://www.invisionapp.com">InVision</a>
            </li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>UI toolings / Diagramming</h1>
          <ul>
            <li>
              <a href="https://www.microsoft.com/en-ca/microsoft-365/visio/flowchart-software">Microsoft Visio</a>
            </li>
            <li>
              <a href="https://www.lucidchart.com">Lucidchart</a>
            </li>
            <li>
              <a href="https://draw.io">Draw.io</a>
            </li>
            <li>
              <a href="https://miro.com">Miro</a>
            </li>
            <li>
              <a href="https://whimsical.com">Whimsical</a>
            </li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>UI toolings / Design System</h1>
          <ul>
            <li>
              <a href="https://tailwindcss.com">Tailwind CSS</a>
            </li>
            <li>
              <a href="https://getbootstrap.com">Bootstrap</a>
            </li>
            <li>
              <a href="https://material-ui.com">Material UI</a>
            </li>
            <li>
              <a href="https://ant.design">Ant Design</a>
            </li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>UI toolings / Component Library</h1>
          <ul>
            <li>
              <a href="https://storybook.js.org">Storybook</a>
            </li>
            <li>
              <a href="https://bit.dev">Bit</a>
            </li>
            <li>
              <a href="https://www.chromatic.com">Chromatic</a>
            </li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>UI toolings / Testing</h1>
          <ul>
            <li>
              <a href="https://www.cypress.io">Cypress</a>
            </li>
            <li>
              <a href="https://jestjs.io">Jest</a>
            </li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>Okay, now can you define UX?</h1>
          <ul className="opacity-0">
            <li>Subconscious rating system</li>
            <li>Performance of the UI</li>
            <li>Accessibility</li>
            <li>Emotional response</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>Okay, now can you define UX?</h1>
          <ul className="">
            <li>Subconscious rating system</li>
            <li>Performance of the UI</li>
            <li>Accessibility</li>
            <li>Emotional response</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>Time for a demo</h1>
          <h2 className="opacity-0">Give me:</h2>
          <ul className="opacity-0">
            <li>An industry</li>
            <li>Company name</li>
            <li>What does it do?</li>
            <li>Three colors</li>
          </ul>
        </article>
      </div>
    </>
  },
  {
    children: <>
      <div className="flex justify-center items-center">
        <article className="prose prose-2xl">
          <h1>Time for a demo</h1>
          <h2>Give me:</h2>
          <ul>
            <li>An industry</li>
            <li>Company name</li>
            <li>What does it do?</li>
            <li>Three colors</li>
          </ul>
        </article>
      </div>
    </>
  },

  // ----- Examples of UI's -----

  {
    children: <>
      <h1 className="text-6xl">Some examples of impressive User Interfaces</h1>
    </>
  },
  {
    children: <>
      <h1 className="text-6xl text-center mb-2"><a href="https://evervault.com">Evervault</a></h1>
      <iframe src="https://evervault.com" className="w-full h-[80vh]"></iframe>
    </>
  },
  {
    children: <>
      <h1 className="text-6xl text-center"><a href="https://www.palantir.com">Palantir</a></h1>
    </>
  },
  {
    children: <>
      <h1 className="text-center text-4xl">Modern smartphones</h1>
      <br></br>
      <div className="flex relative justify-center">
        <div className="h-72 w-72 relative">

          <Image src="/assets/iphone.png" fill={true} alt="iphone" className="object-contain"></Image>
        </div>
        <div className="h-72 w-72 relative">

          <Image src="/assets/pixel.png" fill={true} alt="pixel" className="object-contain"></Image>
        </div>
      </div>
    </>
  },
  {
    children: <>
      <h1 className="text-6xl text-center mb-2"><a href="https://bruno-simon.com/">{`Bruno Simon's Portfolio`}</a></h1>
      <iframe src="https://bruno-simon.com/" className="w-full h-[80vh]"></iframe>
    </>
  },
  {
    children: <>
      <div className="text-center">
        <h1 className="text-6xl">End / Fin.</h1>
      </div>
    </>
  }
]



export default slides;