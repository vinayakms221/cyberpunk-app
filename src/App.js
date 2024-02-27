import Avatar from "./components/Avatar";
import Hero from "./components/Hero";
import Products from "./components/Products"

function App() {
  const cursorStyle = { cursor: `url(/cursor.svg), pointer` };
  return (
    <div className=" bla flex flex-col" style={cursorStyle}>
    <Hero/>
    <Products/>
    <Avatar/>
    
    </div>
    
  );
}

export default App;
