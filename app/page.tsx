import HomeView from "@/components/Home";
import { getMetaDataBySlug, getMetadata } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getMetaDataBySlug("page", "home");
  return getMetadata(data, "https://drshreyankeducare.com/");
}

export default function Home() {
  return <HomeView />;
}
