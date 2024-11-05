import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1 style={{ color: "red" }}>BenLY</h1>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </main>
    </>
  );
}
