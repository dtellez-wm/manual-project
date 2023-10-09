// import Navbar
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";

function App() {
  
  return (
    <div className="flex h-screen dark:bg-neutral-900">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
