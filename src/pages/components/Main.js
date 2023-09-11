import Banner from './Banner';
import Blog from './Blog';
import News from './News';
import Repo from './Repository';

function Main() {
    return (
      <div >
        <div>
            <Banner />
            <div className='content__wrapper'>
            <Blog />
            <News />
        </div>
            <Repo />
        </div>
  
      </div>
    );
  };

  export default Main;