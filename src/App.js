import "./App.sass";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllLibraries from "./components/pages/AllLibraries";
import OneLibrare from "./components/pages/OneLibrare";
import { Libraries } from "./components/contexts/Libraries";

function App() {
  const [allLibraries, setAllLibraries] = useState([]);
  useEffect(() => {
    try {
      fetch("data/data.json")
        .then((response) => response.json())
        .then((data) => {
          setAllLibraries(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Libraries.Provider
      value={{
        allLibraries: allLibraries,
        setAllLibraries: setAllLibraries,
      }}
    >
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" exact component={AllLibraries} />
            <Route path="/librare/:order" component={OneLibrare} />
          </Switch>
        </div>
      </BrowserRouter>
    </Libraries.Provider>
  );
}

export default App;
