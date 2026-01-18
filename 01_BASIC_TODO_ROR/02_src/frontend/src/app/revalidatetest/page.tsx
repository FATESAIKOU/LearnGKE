import { RevalidateTestBtn } from "@/components/RevalidateTestBtn";

export default async function Home() {
  return (
    <main>
      <p>Rendered at: {new Date().toISOString()}</p>

      <RevalidateTestBtn url='/revalidatetest' />
    </main>
  );
}
