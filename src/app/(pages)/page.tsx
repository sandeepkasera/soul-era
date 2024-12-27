import Products from "./products/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 m-4">
      <Products/>
    </main>
  );
}
