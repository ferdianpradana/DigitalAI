"use client"
import Content3 from "../pages/content3";
import Navbar from "../components/navbar";
import ContactMe from "../pages/contactMe";
export default function tes3() {
  return (
    <>
      <div className="bg-indigo-100 min-h-screen px-7 max-w-max container mx-auto ">
        <div>
          <Navbar />
        </div>
        <div className="font-robotSlab">
          <div className="min-h-screen">
            <Content3 /> 
          </div>
          <div>
            <ContactMe />
          </div>
        </div>
      </div>
      
    </>
  );
}
