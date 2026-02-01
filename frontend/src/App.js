import WaveBackground from "./components/WaveBackground";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <WaveBackground />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
