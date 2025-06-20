import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Joinus from './components/Joinus/index';

export default function Home() {
  return (
    <main>
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

