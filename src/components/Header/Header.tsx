import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex justify-around items-center px-4 py-2 box-border bg-card text-foreground border-b border-border">
      <h1 className="text-lg font-bold text-primary">ConnectaCloud Status</h1>
      <Button
        variant={"default"}
        size={"lg"}
        onClick={toggleTheme}
        className="border border-border rounded-lg px-3 py-1.5 bg-background text-foreground cursor-pointer transition-colors duration-200 flex-shrink-0 hover:border-primary hover:bg-card max-[400px]:px-2 max-[400px]:py-1 max-[400px]:text-sm"
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </Button>
    </header>
  );
}
