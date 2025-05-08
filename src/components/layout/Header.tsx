import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 flex items-center px-6 bg-primary shadow-md">
      <div className="flex w-full justify-center items-center gap-2">
        <Calculator className="h-6 w-6 text-primary-foreground" />
        <h1 className="text-2xl font-bold text-primary-foreground">Calculity</h1>
      </div>
      <div className="ml-auto">
        {/* Theme toggle can go here in future */}
      </div>
    </header>
  );
};

export default Header;
