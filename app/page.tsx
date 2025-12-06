import { fetchPosts } from "./actions/PostActions";
import Homepage from "./components/Homepage";

export default async function Home() {
  const posts = await fetchPosts()

  return (
  <>
    
    <Homepage posts={posts || []} />
  </>
);
}
