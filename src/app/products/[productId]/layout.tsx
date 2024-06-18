export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <p>----------------------------------------</p>
      <h2>Featured Products</h2>
      <p>----------------------------------------</p>
    </>
  );
}
