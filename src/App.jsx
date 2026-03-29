import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Explorer from "./components/Explorer";
import Editor from "./components/Editor";
import Cursor from "./components/Cursor";
import CommandBar from "./components/CommandBar";
import StatusBar from "./components/StatusBar";

function App() {
  const [tabs, setTabs] = useState([{ name: "home.tsx" }]);
  const [activeTab, setActiveTab] = useState("home.tsx");
  const [focusSearch, setFocusSearch] = useState(false);
  const triggerSearch = () => {
    setFocusSearch(true);

    // reset so it can trigger again later
    setTimeout(() => setFocusSearch(false), 100);
  };
  const openFile = (file) => {
    const exists = tabs.find((t) => t.name === file);

    if (!exists) {
      setTabs([...tabs, { name: file }]);
    }

    setActiveTab(file);
  };

  return (
<div className="h-screen flex flex-col overflow-hidden">
      {/* Top Bar */}
      <CommandBar openFile={openFile} focusTrigger={focusSearch} />

      {/* Main Layout */}
<div className="flex flex-1 overflow-hidden">
        <Sidebar onSearchClick={triggerSearch} />
        <Explorer
          openFile={openFile}
          activeTab={activeTab}
        />

        <Editor
          tabs={tabs}
          setTabs={setTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

      </div>

  <StatusBar /> 
      <Cursor />

    </div>
  );
}

export default App;