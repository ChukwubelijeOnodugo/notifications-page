import './App.css';
import Timeline from './components/Timeline';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <div className="App">
        <Timeline />
      </div>
    </NotificationProvider>
  );
}

export default App;
