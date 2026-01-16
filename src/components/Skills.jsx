function Skills() {
  return (
    <section id="skills">
      <h2 className="title">Skills</h2>
      <div className="skills-grid">
        {["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"].map(skill => (
          <div className="skill glass" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;