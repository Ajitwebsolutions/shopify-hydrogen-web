type Section = {type: string; [key: string]: unknown};

export function SectionRenderer({sections}: {sections: Section[]}) {
  return (
    <>
      {sections.map((section, idx) => (
        <section key={`${section.type}-${idx}`} data-section-type={section.type}>
          {section.type}
        </section>
      ))}
    </>
  );
}
