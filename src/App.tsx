import { useContext, useEffect } from "react";
import Container from "./components/common/Container";
import Header from "./components/common/Header";
import Stepper from "./components/stepper/Stepper";
import { GlobalContext } from "./state/contexts/GlobalContext";

function App() {
  const {
    state: { darkMode },
    dispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Container>
      <div className="flex flex-col items-center w-full gap-10 px-6">
        <div className="flex flex-col items-center justify-center w-full gap-16">
          <Header />
          <Stepper />
        </div>
      </div>
    </Container>
  );
}

export default App;
