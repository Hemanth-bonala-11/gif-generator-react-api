
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='w-full h-full flex flex-col background '>
      <h1 className='bg-white  rounded text-center mt-[40px] ml-[20px] mr-[20px] text-3xl px-10 py-2 font-bold'>RANDOM GIFS</h1>
      <div className='w-full flex flex-col items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
      
    </div>
  );
}

export default App;
