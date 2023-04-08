import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { DiCode } from 'react-icons/di';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TimeLineStyles';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {

  return (
    <Section nopadding id="Expereince">
      <SectionTitle> <DiCode size="4rem"/> Experience</SectionTitle>
      <SectionText>
      ➡️ <b>[Software Engineering Intern @ Country Financial]</b> ⬅️<br />
      • Incoming software engineering intern @ Country Financial for Summer 2023!<br />
      <br />
      <br />
      ➡️ <b>[Software Development Intern @ NCSA]</b> ⬅️<br />
      • Worked on the web interface for “Atmospheric chemistry simulations” under the supervision of Professor Nicole Riemer and Matthew Dawson in collaboration with the National Center for Atmospheric Research (NCAR).<br />
      • Developed graphical time-series models, by parsing and reading CSV files, to trace aerosol particle concentrations for various aerosols, using React.JS components.<br />
      • Deployed frontend components using JavaScript to support large input files to the website server and improve the efficiency of communication between frontend and backend.<br />
      <br />
      <br />
      ➡️ <b>[Course Assistant @ STAT 107]</b> ⬅️<br />
      • Facilitated and led weekly Python lab sections. Helped students understand lab prompts and solve programming problems. Troubleshot technical issues relating to Git, Visual Studio Code, and Python.<br />
      • Held weekly office hours for over 550+ students to help them understand data science, programming, and statistics concepts, solve homework problems, and lab assignments, and provide exam reviews.<br />
      • Managed and guided students with course assignments, coding projects, labs and exams on the online course forum.<br />
      <br />
      <br />
      ➡️ <b>[Course Staff @ U of I Department of CS]</b> ⬅️ <br />
      🔹 CS 124: Course Assistant 🔹 <br /> 
      • Supported 100+ students to develop an understanding of the fundamentals of computer science and the Java programming language. <br/> <br />
      🔹 CS 124: Course Associate 🔹 <br /> 
      • Assisted and guided 950+ students to understand and learn the basics of computer science and the Java programming language<br />
      • Actively held office hours and monitored the course forum in order to facilitate and support student learning and solving homework problems, Machine Projects (MPs), debugging code, and understanding concepts. 
        <br />
        <br />
        ➡️ <b>[Sub-team Lead - NASA L'SPACE Mission Concept Academy]</b> ⬅️ <br />
      • Researched algorithms and computing methods to record and transmit seismic data between the Earth from a rover prototype, developed throughout the academy.<br />
      • Conducted trade studies for battery systems to select the optimal power input unit within budget constraints.<br />
      • Compiled and presented a research document to industry experts and academy leads.
      </SectionText>
    </Section>
  );
};

export default Timeline;
