import { useState } from "react";
import { EXAMPLES } from "../data";
import { TabContent } from "./TabContent";
import TabButton from "./TabButton";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          label="Components"
          isActive={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        />
        <TabButton
          label="JSX"
          isActive={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        />
        <TabButton
          label="Props"
          isActive={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        />
        <TabButton
          label="State"
          isActive={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        />
      </menu>
      {!selectedTopic && (
        <p id="tab-content">Please select a topic to see an example.</p>
      )}
      {selectedTopic && <TabContent {...EXAMPLES[selectedTopic]} />}
    </section>
  );
}

export default Examples;
