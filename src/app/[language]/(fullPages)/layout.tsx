import Navigation from "@/components/Navigation/Navigation";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navigation />
      <main
        style={{
          padding: "3rem",
          minHeight: "calc(100vh - 6rem)",
        }}
      >
        {children}
      </main>
    </main>
  );
}
