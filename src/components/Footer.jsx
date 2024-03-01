export default function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour < closeHour;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We&apos;re open till {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}
