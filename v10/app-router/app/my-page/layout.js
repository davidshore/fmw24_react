export default function MyPageLayout({ children }) {
  return (
    <div>
      <header>My header </header>
      {children}
      <footer>My footer</footer>
    </div>
  );
}
