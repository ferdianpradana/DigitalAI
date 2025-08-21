export default function Contact() {
  return (
    <>
      <footer className="bottom-0 left-0 rounded-t-4xl footer sm:footer-horizontal bg-gray-700 text-white p-10 pb-20 font-lora inset-x-0 ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <div className="flex flex-col">
            <fieldset className="w-auto">
              <div>
                <label>Enter your email address</label>
              </div>
              <div className="join pt-2 text-black">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item bg-white text-blck"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </div>
        </form>
      </footer>
    </>
  );
}
