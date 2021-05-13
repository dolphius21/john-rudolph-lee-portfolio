const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>&#169; All rights reserved {date} - John Rudolph Lee</p>
    </footer>
  );
};

export default Footer;
