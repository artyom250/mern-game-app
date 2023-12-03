import Main from '../components/Main';
import Best from '../components/Best';
import Fresh from '../components/Fresh';

import "./styles/Page.css";

function Home() {
  document.title = 'Games | Homepage';

  return (
    <div className='Page'>
      <Main />
      <Best />
      <Fresh />
    </div>
  )
}

export default Home