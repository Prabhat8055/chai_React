import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual theme change
  useEffect(() => {
    //remove initial unknown value
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="dark:bg-gray-600 h-[100vh]">
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <h1 className="text-4xl dark:text-white font-medium w-full text-center p-10">
          Theme Switcher{" "}
        </h1>
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme button  */}
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
