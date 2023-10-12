// import Navbar
import Navbar from "./Navbar";
import { Button } from "flowbite-react";


function App() {
  
  return (
    <div className="flex h-screen dark:bg-neutral-900">
      <Navbar />
      <Button className="bg-slate-500 border-gray-400 text-black px-4 py-2 rounded-full w-fit absolute bottom-4 right-8 hover:bg-slate-600 dark:bg-slate-300 dark:hover:bg-slate-100 dark:text-black" href="#login">Up</Button>
    </div>
  );
}

export default App;
