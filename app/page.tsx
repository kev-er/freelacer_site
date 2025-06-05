import Banner, { HiddenNetlifyForm } from './components/Banner';
import Aboutus from './components/Aboutus';
import Dedicated from './components/Dedicated';
import Digital from './components/Digital';
import Beliefs from './components/Beliefs';
import Ourteam from './components/Ourteam';
import Featured from './components/Featured';
import Manage from './components/Manage';
import FAQ from './components/FAQ';
import Joinus from './components/Joinus';

export default function Home() {
  return (
    <main>
      <HiddenNetlifyForm />
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Ourteam />
      <Featured />
      <Manage />
      <FAQ />
      <Joinus />
    </main>
  );
}

