type Section = {type: string; heading?: string; handle?: string};

export function SectionRenderer({sections}: {sections: Section[]}) {
  return (
    <>
      {sections.map((section, idx) => (
        <section key={`${section.type}-${idx}`} data-section-type={section.type}>
          <h2>{section.heading ?? section.type}</h2>
        </section>
      ))}
    </>
  );
}
