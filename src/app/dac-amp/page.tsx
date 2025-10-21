import DacAmpClient from "./DacAmpClient";
import dacAmpsData from "@/data/dacAmps.json";

export default function DacAmpPage() {
  return <DacAmpClient dacAmps={dacAmpsData} />;
}
