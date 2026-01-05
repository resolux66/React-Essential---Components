import { useState } from "react";
import Header from "./Header";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { TabContent } from "./TabContent";
import TabButton from "./TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Header />
      <main>
        <section className="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
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
      </main>
    </>
  );
}

export default App;
