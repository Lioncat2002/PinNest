import Image from "next/image";
export default function NavBar() {
  return (
    <div className="flex flex-row justify-between p-4">
      <div className="flex flex-row justify-between w-40">
        <Image src="./Icon.svg" alt="icons" width={30} height={30} />
        <div>Home</div>
        <div>Explore</div>
      </div>
      <div>
        <div>Account</div>
      </div>
    </div>
  );
}
