import React, { useState } from 'react';
import { StyleIcon, Icon, IconsList, List, IconsLink } from '../styles/Styled.Icons';


const Icons = () => {

  const [activeIcon, setActiveIcon] = useState("active-icon");

  const iconToggle = () => {
    if (activeIcon === "display-icon") {
      setActiveIcon("display-icon active-icon");
    } else setActiveIcon("display-icon");

    
  }

  return (
    <StyleIcon>
      <Icon>
        <h3>
          <i className="ts logo">Ts</i>
          ICONS
        </h3>
        <IconsLink>
          <li><a onClick={iconToggle} href="#ts_icons_c" className="link">shakya icons library</a></li>
          <li><a href="#ts_icons_b" className="link">shakya icons library</a></li>
          <li><a href="#ts_icons_s" className="link">shakya icons library</a></li>
          <li><a href="#ts_icons_d" className="link">shakya icons library</a></li>
        </IconsLink>
      </Icon>
      <IconsList>
        <List>
          <div className={activeIcon} id="ts_icons">
            <i className="ts logo">A</i>
            <i className="ts logo">B</i>
            <i className="ts logo">C</i>
            <i className="ts logo">D</i>
            <i className="ts logo">E</i>
            <i className="ts logo">F</i>
            <i className="ts logo">G</i>
            <i className="ts logo">H</i>
            <i className="ts logo">I</i>
            <i className="ts logo">J</i>
            <i className="ts logo">K</i>
            <i className="ts logo">L</i>
            <i className="ts logo">M</i>
            <i className="ts logo">N</i>
            <i className="ts logo">O</i>
            <i className="ts logo">P</i>
            <i className="ts logo">Q</i>
            <i className="ts logo">R</i>
            <i className="ts logo">S</i>
            <i className="ts logo">T</i>
            <i className="ts logo">U</i>
            <i className="ts logo">V</i>
            <i className="ts logo">W</i>
            <i className="ts logo">X</i>
            <i className="ts logo">Y</i>
            <i className="ts logo">Z</i>
            <i className="ts logo">A</i>
            <i className="ts logo">B</i>
            <i className="ts logo">C</i>
            <i className="ts logo">D</i>
            <i className="ts logo">E</i>
            <i className="ts logo">F</i>
            <i className="ts logo">G</i>
            <i className="ts logo">H</i>
            <i className="ts logo">I</i>
            <i className="ts logo">J</i>
            <i className="ts logo">K</i>
            <i className="ts logo">L</i>
            <i className="ts logo">M</i>
            <i className="ts logo">N</i>
            <i className="ts logo">O</i>
            <i className="ts logo">P</i>
            <i className="ts logo">Q</i>
            <i className="ts logo">R</i>
            <i className="ts logo">S</i>
            <i className="ts logo">T</i>
            <i className="ts logo">U</i>
            <i className="ts logo">V</i>
            <i className="ts logo">W</i>
            <i className="ts logo">X</i>
            <i className="ts logo">Y</i>
            <i className="ts logo">Z</i>
          </div>
        </List>
      </IconsList>
    </StyleIcon>
  );
}

export default Icons;