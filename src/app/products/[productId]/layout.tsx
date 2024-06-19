export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
  };
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading Product");
  }

  return (
    <>
      {children}
      <p>----------------------------------------</p>
      <h2>Featured Products</h2>
      <p>----------------------------------------</p>
    </>
  );
}
