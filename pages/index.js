import Header from "../components/Header"
import Landing from "../components/Landing"
import Trending from "../components/Trending"
import Discover from "../components/discover"
import Blogs from "../components/Blogs"

export default function Home() {
  return (
    <div >
      <Header />
      <Landing />
      <Trending />
      <Discover />
      <Blogs />
    </div>
  )
}
