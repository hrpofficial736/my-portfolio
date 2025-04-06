import React, { useEffect, useState } from "react";
import { ubuntuFont } from "./Menus";

export const DateTime: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = `${new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date)}, ${new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)} ${date.getDate()}`;
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`glassmorphism ${ubuntuFont.className} mt-3 flex gap-x-3 text-black/80 max-md:text-white font-semibold px-2 py-1`}
    >
      <p>{formattedDate}</p>
      <p>{time}</p>
    </main>
  );
};
