import HeroContent from "./HeroContent";
import AboutContent from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from './Contact';
import Readme from './Readme';
function Editor({ tabs, setTabs, activeTab, setActiveTab,openFile }) {
  {activeTab === "home.tsx" && <HeroContent openFile={openFile} />}

  // Map file → component
  const getComponent = (name) => {
    switch (name) {
      case "home.tsx":
        return <HeroContent openFile={openFile}/>;
      case "about.html":
        return <AboutContent />;
      case "projects.js":
        return <Projects />;
      case "skills.tsx":
        return <Skills />;
      case "experience.ts":
        return <Experience />;
      case "contact.css":
        return <Contact />;
      case "README.md":
        return <Readme />;
      default:
        return <div>File not found</div>;
    }
  };

  // Close tab
  const closeTab = (tabName) => {
    const newTabs = tabs.filter((tab) => tab.name !== tabName);
    setTabs(newTabs);

    if (activeTab === tabName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1].name);
    }
  };

  return (
    <div className="flex-1 bg-[#1e1e1e] flex flex-col">

      {/* Tabs */}
      <div className="bg-[#2d2d2d] flex border-b border-gray-700 overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 text-sm flex items-center gap-2 cursor-none whitespace-nowrap
              ${activeTab === tab.name
                ? "bg-[#1e1e1e] border-t-2 border-blue-500 text-white"
                : "text-gray-400 hover:bg-[#37373d]"
              }`}
          >
            <span>{tab.name}</span>

            <span
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.name);
              }}
              className="hover:text-red-400"
            >
              ✕
            </span>
          </div>
        ))}
      </div>

      {/* Breadcrumb */}
      <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-800">
        Rohan Biswas &gt; src &gt; {activeTab || "no file"}
      </div>

      {/* Code Area */}
      <div className="flex-1 overflow-y-auto">
        {activeTab ? getComponent(activeTab) : <div>No file open</div>}
      </div>
    </div>
  );
}

export default Editor;