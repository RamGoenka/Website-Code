import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Blog from '../components/Blog/Blog';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import Head from 'next/head';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <>
    <Head>
      <title>Ram Goenka</title>
    </Head>
    <Layout>
       <Section grid> 
        <Hero />
        {/* nothing */}
       </Section> 
      <Timeline />
      <Projects />
      <Technologies />
      <Blog />
    </Layout>
    </>
  );
};

export default Home;
