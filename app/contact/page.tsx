import Image from "next/image";
import { FrasurbaneArrow } from "@/components/icons/arrow";

export default function Contact() {
  return (
    <>
      <section className="first-section section bg-[url(/grid.png)] bg-cover bg-no-repeat bg-center bg-earth-dark-green">
        <div className="section-wrapper relative p-14 flex justify-between items-center h-full">
          <div className="info-3d flex flex-col justify-center items-end absolute bottom-10 right-7">
            <p className="text-earth-green font-bold text-5xl leading-12">Contact me_</p>
          </div>
        </div>
      </section>
    </>
  );
}
