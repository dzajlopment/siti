import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities} />
  );
}
