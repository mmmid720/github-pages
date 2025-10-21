import SearchClient from "./SearchClient";

export const dynamic = "force-static";

export default function SearchPage() {
  // For static export, we'll handle search entirely on the client side
  return <SearchClient />;
}
