import HeroSection from "./HeroSection";
import Products from "./Products";

export default function Home() {
  return (
    <main>
      <HeroSection
        header="All your interersts in one place."
        paragraph="Discover a wide selection of products tailored just for you. Enjoy seamless shopping and exclusive deals every day."
        imgSrc="https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg"
      />
      <Products />
    </main>
  );
}
