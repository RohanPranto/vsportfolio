function Assistant() {
  return (
    <div className="w-80 bg-[#252526] p-4 border-l border-gray-700 hidden lg:block">
      <h2 className="text-sm font-bold">AI Assistant</h2>

      <p className="text-gray-400 text-xs mt-2">
        Ask me anything about projects, skills, experience.
      </p>

      <div className="mt-4 space-y-2">
        <button className="w-full bg-[#2d2d2d] p-2 rounded text-left text-xs">
          Tell me about projects
        </button>
        <button className="w-full bg-[#2d2d2d] p-2 rounded text-left text-xs">
          Tech stack
        </button>
        <button className="w-full bg-[#2d2d2d] p-2 rounded text-left text-xs">
          Contact
        </button>
      </div>

      <input
        className="mt-6 w-full p-2 bg-[#1e1e1e] border border-gray-700 rounded text-xs"
        placeholder="Ask something..."
      />
    </div>
  );
}

export default Assistant;