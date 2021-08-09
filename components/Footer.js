function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 text-gray px-32 py-14 bg-gray-100">
        <div className="text-xs space-y-4 text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="text-xs space-y-4 text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>Support</p>
          <p>Connections</p>
          <p>Referrals accepted</p>
          <p>Notifications</p>
        </div>
        <div className="text-xs space-y-4 text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Messages</p>
          <p>Notifications</p>
          <p>Requests</p>
          <p>Booking</p>
          <p>Packages</p>
        </div>
        <div className="text-xs space-y-4 text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Chat Support</p>
          <p>Service</p>
          <p>Help</p>
          <p>Premium Plus</p>
          <p>Call Support</p>
        </div>
      </div>
      <div><h2 className="text-sm bg-gray-100 text-center">Made with ❤️ by Paurush</h2></div>
    </>
  );
}

export default Footer;
