import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google Logo"
          width={300} 
          height={100}
        />
      </div>
    </>
  );
}
