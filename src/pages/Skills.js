import React from 'react'

import SkillIndicator from '../components/SkillIndicator'

const Skills = () => (
  <section id="two">
    <div className="skills">
        <h2>Skills</h2>
        <SkillIndicator title="AutoCad" level={8} />
        <SkillIndicator title="Adobe Photoshop" level={7.5} />
        <SkillIndicator title="Adobe InDesign" level={7.5} />
        <SkillIndicator title="Sketchup" level={7.5} />
        <SkillIndicator title="Revit" level={7.5} />
        <SkillIndicator title="Rhinoceros" level={5} />
    </div>
  </section>
)

export default Skills
