import { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("Bon Dia");

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 20 || hours < 6) {
      setGreeting("Bona Nit");
    } else if (hours >= 12) {
      setGreeting("Bona Tarda");
    } else {
      setGreeting("Bon Dia");
    }
  });

  return (
    <h3 id="greeting" className="text-3xl font-bold text-white mt-4">
      {greeting}
    </h3>
  );
};
export default Greeting;
