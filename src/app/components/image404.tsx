import Image from "next/image";
export default function Image404() {
  return (
    <>
      <Image
        src="/img404.svg"
        alt="Picture"
        width={350}
        height={0} // kasih 0
        sizes="100vw"
        className="rounded-2xl"
        style={{ height: "auto" }}
      />
    </>
  );
}
