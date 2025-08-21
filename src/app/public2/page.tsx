import Content2 from "../pages/content2";
import Navbar from "../components/navbar";
import ContactMe from "../pages/contactMe";
export default function tes2() {
  return (
    <>
      <div className="bg-indigo-100 min-h-screen px-7 max-w-max container mx-auto ">
        <div>
          <Navbar />
        </div>
        <div className="font-robotSlab">
          <div className="min-h-screen">
            <Content2 /> 
          </div>
          <div>
            <ContactMe />
          </div>
        </div>
      </div>
      
    </>
  );
}
