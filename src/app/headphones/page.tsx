import HeadphonesClient from "./HeadphonesClient";
import headphonesData from "@/data/headphones.json";

export default function HeadphonesPage() {
  return <HeadphonesClient headphones={headphonesData} />;
}
