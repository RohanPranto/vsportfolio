import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const emailLink =
    "mailto:rohanbiswaspranto@gmail.com?subject=Let's%20Connect%20Rohan&body=Hi%20Rohan,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20connect.%0D%0A";

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/r.biswasz",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/rohan.pranto/",
      color: "hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/rohan-biswas-178848239/",
      color: "hover:text-cyan-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/",
      color: "hover:text-white",
    },
  ];

  return (
    <div className="py-8 px-6 text-gray-300 min-h-full bg-[#1e1e1e]">
      {/* file label */}
      <p className="text-gray-500 text-sm">// contact.css</p>
      <h1 className="text-4xl font-bold mb-10">
        <span className="text-pink-400">Contact</span>
      </h1>

      {/* Different layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT PANEL */}
        <div className="border border-[#2d2d2d] rounded-xl overflow-hidden bg-[#181818]">
          {/* fake terminal top */}
          <div className="h-10 px-4 border-b border-[#2d2d2d] flex items-center gap-2 bg-[#202020]">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="text-xs text-gray-500 ml-2">
              terminal / contact.sh
            </span>
          </div>

          {/* terminal body */}
          <div className="p-5 font-mono text-sm leading-8">
            <p>
              <span className="text-green-400">$</span> whoami
            </p>
            <p className="text-[#4fc1ff]">Rohan Biswas</p>

            <p className="mt-3">
              <span className="text-green-400">$</span> status
            </p>
            <p className="text-yellow-400">Open for opportunities 🚀</p>

            <p className="mt-3">
              <span className="text-green-400">$</span> location
            </p>
            <p>India 🇮🇳</p>

            <p className="mt-3">
              <span className="text-green-400">$</span> message
            </p>
            <p className="text-gray-400">
              Need a frontend, fullstack or smart dev guy?
            </p>
            <p className="text-pink-400">Ping me before recruiter does 😎</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="border border-[#2d2d2d] rounded-xl bg-[#181818] p-6">
          <h2 className="text-2xl font-bold text-white">
            Let’s Build Something Cool
          </h2>

          <p className="text-sm text-gray-400 mt-2 leading-7">
            If you have an idea, project, opportunity or just want to say hello,
            my inbox compiles faster than legacy code.
          </p>

          {/* email button */}
          <a
            href={emailLink}
            className="mt-6 inline-flex items-center gap-2 bg-[#0e639c] px-5 py-3 rounded-md text-white hover:bg-[#1177bb] transition"
          >
            <MdEmail />
            Send Email
          </a>

          {/* socials */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`border border-[#2d2d2d] rounded-lg px-4 py-3 flex items-center gap-3 text-gray-400 hover:bg-[#252526] transition ${item.color}`}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          {/* footer note */}
          <div className="mt-8 border-t border-[#2d2d2d] pt-4 text-xs text-gray-500 flex items-center gap-2">
            <FaPaperPlane />
            I Usually reply faster than npm install.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;