import Content1 from "../pages/content1";
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
            <Content1 /> 
          </div>
          <div>
            <ContactMe />
          </div>
        </div>
      </div>
      
    </>
  );
}
