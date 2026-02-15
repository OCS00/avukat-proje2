import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "4s0lvqpp", // Sanity.io'dan alacağın ID buraya!
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Canlı veriyi anlık çekmek için false
});