export default RootLayout = (children) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
};
