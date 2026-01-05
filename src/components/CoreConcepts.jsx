import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

function CoreConcepts() {
  return (
    <section className="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
