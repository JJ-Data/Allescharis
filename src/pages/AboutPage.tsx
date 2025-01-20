import About from "@/components/About";
import Quality from "@/components/Quality";
import Values from "@/components/Values";

function AboutPage() {
  return (
    <div>
      <About />
      <Quality />
      <section id="value">
        <Values />
      </section>
    </div>
  );
}

export default AboutPage;
