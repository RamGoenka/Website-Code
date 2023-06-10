import React from 'react';

import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
    👋 Hello! :) <br />
      My name is Ram Goenka.
      </SectionTitle>
      <SectionText>
      👨🏽‍💻 <b>A little bit about me</b><br /> 
        I am an Undergradute Student @ University of Illinois Urbana-Champaign, majoring in Mathematics and minoring in Computer Science, Statistics and Economics. I am interested in exploring and learning more about topics such as Abstract Algebra, Artificial Intelligence, Computer Vision, Data Science and Analytics, Machine and Deep learning, Number Theory and Statistics. I love coffee. I love sleep (even though I tend to get lack of it).<br /> 
        <br />
      😎 <b>When I am not working or noodling with code or Mathematics...</b><br />
      I like to talk about and watch the Premier League, UEFA Champions League, International Association Football and International Cricket. I also like to talk about cats, food, KPOP, JPOP (I love Blackpink and TWICE :D) space, science among many other things. I am also trying to get into the habit of mainting a blog about life or any thoughts I have that I want to dump (my first blog post is coming soon!).<br />

      </SectionText>
      <Button onClick = {() => window.location = 'https://youtu.be/dQw4w9WgXcQ'}> Resume: To be uploaded! </Button>
    </LeftSection>
  </Section>
);

export default Hero;