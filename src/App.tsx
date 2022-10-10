import Container from "./components/common/Container";
import Header from "./components/common/Header";
import Stepper from "./components/stepper/Stepper";

function App() {
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
