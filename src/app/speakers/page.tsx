import SpeakersClient from "./SpeakersClient";
import speakersData from "@/data/speakers.json";

export default function SpeakersPage() {
  return <SpeakersClient speakers={speakersData} />;
}
