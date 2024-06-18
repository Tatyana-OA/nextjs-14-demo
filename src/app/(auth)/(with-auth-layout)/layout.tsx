export default function WithAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Outer Layout</h2>
      <p>----------------------------------------</p>
      <h2>Inner Layout</h2>
      {children}
      <p>----------------------------------------</p>
    </>
  );
}
