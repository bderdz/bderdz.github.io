import { Layout } from './components/Layout/Layout';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Skills } from './components/Sections/Skills';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';
import { InteractiveBackground } from './components/Background/InteractiveBackground';

function App() {
  return (
    <>
      <InteractiveBackground />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
