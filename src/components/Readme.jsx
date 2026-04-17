import {
  FaGithub,
  FaCode,
  FaHeart,
  FaGamepad,
  FaGuitar,
  FaPlaneDeparture,
  FaCarSide,
  FaMask,
  FaTv,
  FaFilm,
  FaBolt,
  FaCube,
} from "react-icons/fa";

function Readme() {
  const stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Firebase",
    "MongoDB",
    "C",
    "C++",
    "Python",
    "Java",
    "Spring Boot",
    "Tailwind CSS",
    "Bootstrap",
    "SQL",
    "Azure",
  ];

  const games = [
    "Red Dead Redemption 2",
    "God of War",
    "Detroit: Become Human",
    "A Plague Tale",
    "Uncharted 4",
    "Control",
  ];

  const commands = [
    "npm run build",
    "git push origin main",
    "java -jar future.jar",
    "deploy and pray",
    "console.log('still alive')",
  ];

  const fandoms = [
    "Spider-Man",
    "Marvel Universe",
    "Breaking Bad",
    "Better Call Saul",
  ];

  return (
    <div className="min-h-full bg-[#1e1e1e] text-gray-300 p-8 overflow-auto">
      {/* top */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>README.md</span>
        <span>•</span>
        <span>Preview Mode</span>
      </div>

      <div className="mt-6 max-w-6xl">
        {/* heading */}
        <h1 className="text-4xl font-bold text-white border-b border-[#2d2d2d] pb-4">
          # Hey, I'm Rohan 👋
        </h1>

        <p className="mt-5 text-gray-400 leading-8 text-lg">
          Engineer by profession, builder by mindset, gamer by passion,
          collector by heart, guitarist by mood.
        </p>

        {/* badges */}
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="px-3 py-1 rounded bg-[#252526] text-sm">
            <FaCode className="inline mr-2" />
            Software Engineer
          </span>

          <span className="px-3 py-1 rounded bg-[#252526] text-sm">
            <FaGamepad className="inline mr-2" />
            Gamer
          </span>

          <span className="px-3 py-1 rounded bg-[#252526] text-sm">
            <FaGuitar className="inline mr-2" />
            Guitarist
          </span>

          <span className="px-3 py-1 rounded bg-[#252526] text-sm">
            <FaCarSide className="inline mr-2" />
            Collector
          </span>

          <span className="px-3 py-1 rounded bg-[#252526] text-sm">
            <FaMask className="inline mr-2" />
            Marvel Fan
          </span>
        </div>

        {/* about */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">## About Me</h2>

          <div className="mt-4 space-y-3 text-gray-400 leading-8">
            <p>→ Building clean UI with personality.</p>
            <p>→ Loves products that feel smooth and modern.</p>
            <p>→ Curious about backend systems and cloud tech.</p>
            <p>→ Believes consistency creates results.</p>
            <p>→ Goal: career growth + helping family.</p>
          </div>
        </section>

        {/* stack */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">## Tech Stack</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-5">
            {stack.map((item, index) => (
              <div
                key={index}
                className="border border-[#2d2d2d] bg-[#181818] rounded-lg px-4 py-3 hover:bg-[#252526] transition hover:-translate-y-1"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* passions */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">
            ## Outside Coding
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
            <div className="border border-[#2d2d2d] rounded-xl p-5 bg-[#181818]">
              <FaGamepad className="text-blue-400 text-xl mb-3" />
              <h3 className="text-white font-semibold mb-2">Gaming</h3>
              <p className="text-gray-400 text-sm leading-7">
                Story-rich games and immersive worlds.
              </p>
            </div>

            <div className="border border-[#2d2d2d] rounded-xl p-5 bg-[#181818]">
              <FaGuitar className="text-pink-400 text-xl mb-3" />
              <h3 className="text-white font-semibold mb-2">Guitar</h3>
              <p className="text-gray-400 text-sm leading-7">
                Music keeps the mind sharp and calm.
              </p>
            </div>

            <div className="border border-[#2d2d2d] rounded-xl p-5 bg-[#181818]">
              <FaPlaneDeparture className="text-cyan-400 text-xl mb-3" />
              <h3 className="text-white font-semibold mb-2">Travel</h3>
              <p className="text-gray-400 text-sm leading-7">
                New places bring fresh perspective.
              </p>
            </div>

            <div className="border border-[#2d2d2d] rounded-xl p-5 bg-[#181818]">
              <FaCarSide className="text-yellow-400 text-xl mb-3" />
              <h3 className="text-white font-semibold mb-2">Hot Wheels</h3>
              <p className="text-gray-400 text-sm leading-7">
                Tiny cars. Big nostalgia. Real hobby.
              </p>
            </div>
          </div>
        </section>

        {/* favourite games */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">
            ## Favourite Games
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
            {games.map((game, index) => (
              <div
                key={index}
                className="border border-[#2d2d2d] rounded-lg px-4 py-3 bg-[#181818] hover:bg-[#252526] transition"
              >
                🎮 {game}
              </div>
            ))}
          </div>
        </section>

        {/* fandoms */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">
            ## Pop Culture Zone
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            {fandoms.map((item, index) => (
              <div
                key={index}
                className="border border-[#2d2d2d] rounded-lg px-4 py-3 bg-[#181818] hover:bg-[#252526] transition"
              >
                {item === "Spider-Man" && <FaBolt className="inline mr-2 text-red-400" />}
                {item === "Marvel Universe" && <FaMask className="inline mr-2 text-blue-400" />}
                {item === "Breaking Bad" && <FaTv className="inline mr-2 text-green-400" />}
                {item === "Better Call Saul" && <FaFilm className="inline mr-2 text-yellow-400" />}
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* collection */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">
            ## Collector Mode
          </h2>

          <div className="mt-5 border border-[#2d2d2d] rounded-xl bg-[#181818] p-5">
            <p className="text-gray-400 leading-8">
              I enjoy collecting Hot Wheels models — especially iconic cars,
              clean designs and rare finds. Some people collect bugs in code,
              I collect cars in boxes.
            </p>
          </div>
        </section>

        {/* terminal */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">
            ## Current Status
          </h2>

          <div className="mt-5 rounded-xl overflow-hidden border border-[#2d2d2d] bg-[#181818]">
            <div className="h-10 bg-[#202020] border-b border-[#2d2d2d] px-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />

              <span className="text-xs text-gray-500 ml-2">
                terminal / rohan.sh
              </span>
            </div>

            <div className="p-5 font-mono text-sm space-y-2">
              {commands.map((cmd, i) => (
                <p key={i}>
                  <span className="text-green-400">$</span> {cmd}
                </p>
              ))}

              <p className="text-cyan-400">
                Learning, building, improving every day...
              </p>

              <p>
                <span className="text-green-400">$</span> _
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </section>

        {/* footer */}
        <section className="mt-10 border-t border-[#2d2d2d] pt-8">
          <a
            href="https://github.com/rohanpranto"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#0e639c] hover:bg-[#1177bb] transition text-white"
          >
            <FaGithub />
            View GitHub
          </a>

          <p className="mt-5 text-gray-500 text-sm flex items-center gap-2">
            <FaHeart className="text-red-400" />
            Thanks for reading the README of a human being.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Readme;