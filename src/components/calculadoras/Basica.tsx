import React, { useState } from "react";
import { Button } from "../ui/Button";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import Te from "../ui/te";

const BasicCalculator: React.FC = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const clearDisplay = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const toggleSign = () => {
    const newValue = parseFloat(display) * -1;
    setDisplay(newValue.toString());
  };

  const inputPercent = () => {
    const currentValue = parseFloat(display);
    const newValue = currentValue / 100;
    setDisplay(newValue.toString());
  };

  const performOperation = (nextOperation: string | null) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = parseFloat(previousValue);
      let newValue = 0;

      switch (operation) {
        case "+":
          newValue = currentValue + inputValue;
          break;
        case "-":
          newValue = currentValue - inputValue;
          break;
        case "×":
          newValue = currentValue * inputValue;
          break;
        case "÷":
          newValue = currentValue / inputValue;
          break;
        default:
          break;
      }

      const historyEntry = `${currentValue} ${operation} ${inputValue} = ${newValue}`;
      setHistory((prev) => [historyEntry, ...prev.slice(0, 4)]);
      setPreviousValue(newValue.toString());
      setDisplay(newValue.toString());
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  return (
    <Te cardClassName="w-full max-w-md mx-auto" Title="Calculadora Básica ">
      <div className="bg-button-basic p-4 rounded-lg shadow mb-4">
        <div className="text-right text-3xl font-mono">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button
          variant="outline"
          onClick={clearDisplay}
          className="bg-destructive text-destructive-foreground hover:bg-destructive/80 transition-colors"
        >
          C
        </Button>
        <Button variant="outline" onClick={toggleSign}>
          +/-
        </Button>
        <Button variant="outline" onClick={inputPercent}>
          %
        </Button>
        <Button
          variant="outline"
          onClick={() => performOperation("÷")}
          className={
            operation === "÷" ? "bg-primary text-primary-foreground" : ""
          }
        >
          ÷
        </Button>

        {[7, 8, 9].map((num) => (
          <Button
            key={num}
            variant="outline"
            onClick={() => inputDigit(num.toString())}
          >
            {num}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => performOperation("×")}
          className={
            operation === "×" ? "bg-primary text-primary-foreground" : ""
          }
        >
          ×
        </Button>

        {[4, 5, 6].map((num) => (
          <Button
            key={num}
            variant="outline"
            onClick={() => inputDigit(num.toString())}
          >
            {num}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => performOperation("-")}
          className={
            operation === "-" ? "bg-primary text-primary-foreground" : ""
          }
        >
          -
        </Button>

        {[1, 2, 3].map((num) => (
          <Button
            key={num}
            variant="outline"
            onClick={() => inputDigit(num.toString())}
          >
            {num}
          </Button>
        ))}
        <Button
          variant="outline"
          onClick={() => performOperation("+")}
          className={
            operation === "+" ? "bg-primary text-primary-foreground" : ""
          }
        >
          +
        </Button>

        <Button
          variant="outline"
          onClick={() => inputDigit("0")}
          className="col-span-2"
        >
          0
        </Button>
        <Button variant="outline" onClick={inputDecimal}>
          .
        </Button>
        <Button
          onClick={() => performOperation(null)}
          className="bg-primary text-primary-foreground hover:bg-primary/80"
        >
          =
        </Button>
      </div>

      {history.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Histórico</h3>
          <div className="text-sm text-gray-500 space-y-1">
            {history.map((entry, index) => (
              <div key={index} className="p-1 border-b">
                {entry}
              </div>
            ))}
          </div>
        </div>
      )}
    </Te>
  );
};

export default BasicCalculator;
