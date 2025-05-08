import type React from "react";
import Header from "./components/layout/Header";
import Sidebar, { type CalculatorType } from "./components/layout/Sidebar";
import BasicCalculator from "./components/calculadoras/Basica";

type LayoutProps = {
  // children: React.ReactNode;
  activeCalculator: CalculatorType;
  setActiveCalculator: (calculator: CalculatorType) => void;
};

const App: React.FC<LayoutProps> = ({
  // children,
  activeCalculator,
  setActiveCalculator,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <Sidebar
          activeCalculator={activeCalculator}
          setActiveCalculator={setActiveCalculator}
        />
        <main className="flex-1">
          <div className="">
            
          <BasicCalculator/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
