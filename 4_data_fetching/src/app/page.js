import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
       <Link href="/todos/create" className="text-2xl font-bold text-blue-500 absolute text-center
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></Link>

        

      </main>

  );
}
