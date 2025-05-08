import React from 'react';
import { 
  Calculator, 
  Percent, 
  CalendarDays, 
  ArrowLeftRight, 
  Binary, 
  BarChart3, 
  PlusSquare 
} from 'lucide-react';
import { cn } from '../../lib/utils';

export type CalculatorType = 
  | 'basic'
  | 'bmi'
  | 'compound'
  | 'factorial'
  | 'conversion'
  | 'date'
  | 'percentage';

type SidebarProps = {
  activeCalculator: CalculatorType;
  setActiveCalculator: (calculator: CalculatorType) => void;
};

type CalculatorOption = {
  id: CalculatorType;
  name: string;
  icon: React.ReactNode;
};

const calculatorOptions: CalculatorOption[] = [
  {
    id: 'basic',
    name: 'Calculadora Básica',
    icon: <Calculator className="h-5 w-5" />,
  },
  {
    id: 'bmi',
    name: 'Calculadora de IMC',
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    id: 'compound',
    name: 'Calculadora de Juros Compostos',
    icon: <PlusSquare className="h-5 w-5" />,
  },
  {
    id: 'factorial',
    name: 'Calculadora de Fatorial',
    icon: <Binary className="h-5 w-5" />,
  },
  {
    id: 'conversion',
    name: 'Calculadora de Conversão de Unidades',
    icon: <ArrowLeftRight className="h-5 w-5" />,
  },
  {
    id: 'date',
    name: 'Calculadora de Data',
    icon: <CalendarDays className="h-5 w-5" />,
  },
  {
    id: 'percentage',
    name: 'Cálculo Rápido de Porcentagem',
    icon: <Percent className="h-5 w-5" />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ activeCalculator, setActiveCalculator }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <aside 
      className={cn(
        "bg-calculity-light shadow-xl transition-all duration-300 h-[calc(100vh-4rem)]",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex justify-end">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-md hover:bg-primary hover:text-white"
        >
          {isCollapsed ? '>>' : '<<'}
        </button>
      </div>
      <nav className="px-2">
        <ul className="space-y-1">
          {calculatorOptions.map((option) => (
            <li key={option.id}>
              <button
                onClick={() => setActiveCalculator(option.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors",
                  activeCalculator === option.id
                    ? "bg-gradient-to-r from-calculity-gradient-start via-calculity-gradient-mid to-calculity-gradient-end text-white"
                    : "hover:bg-calculity-light"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-md",
                  activeCalculator === option.id
                    ? "text-white"
                    : "bg-gradient-to-br from-calculity-gradient-start to-calculity-gradient-end text-white"
                )}>
                  {option.icon}
                </div>
                {!isCollapsed && <span>{option.name}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;