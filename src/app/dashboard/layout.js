export default function DashbboardLayout({ children }) {
  return (
    <>
      <section className="main">
        <nav></nav>
        {children}
      </section>
    </>
  );
}
