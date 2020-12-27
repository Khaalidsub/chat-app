
import Chat from './pages/Chat';
import Chats from './pages/Chats';
import Home from './pages/Home'
import Button from './widgets/Button';

function App() {
  return (
    <div className="flex justify-center">

      {/* <Button /> */}
      <div className="h-2/3 w-4/5 mx-auto my-auto flex flex-row py-px">
        <div className="w-2/5">
          <Chats />
        </div>

        <div className="w-2/3">
          <Chat />
        </div>

      </div>

    </div>
  );
}

export default App;
