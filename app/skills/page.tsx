import Image from "next/image";
import { FrasurbaneArrow } from "@/components/icons/arrow";

export default function Skills() {
  return (
    <>
      <section className="first-section section bg-[url(/grid.png)] bg-cover bg-no-repeat bg-center bg-earth-dark-green">
        <div className="section-wrapper relative p-14 flex justify-center items-start h-full">
          <div className="skills-level flex justify-center items-center gap-8">
            <div className="skill-item flex justify-center items-center gap-2">
              <div className="level-color p-2.5 rounded-full bg-earth-white w-fit"></div>
              <p className="text-earth-white text-lg font-normal leading-8">Beginner</p>
            </div>
            <div className="skill-item flex justify-center items-center gap-2">
              <div className="level-color p-2.5 rounded-full bg-earth-light-green w-fit"></div>
              <p className="text-earth-white text-lg font-normal leading-8">Intermediate</p>
            </div>
            <div className="skill-item flex justify-center items-center gap-2">
              <div className="level-color p-2.5 rounded-full bg-earth-green w-fit"></div>
              <p className="text-earth-white text-lg font-normal leading-8">Advance</p>
            </div>
            <div className="skill-item flex justify-center items-center gap-2">
              <div className="level-color p-2.5 rounded-full bg-earth-brown w-fit"></div>
              <p className="text-earth-white text-lg font-normal leading-8">Fluent</p>
            </div>
          </div>
          <div className="info-3d flex flex-col justify-center items-end absolute bottom-10 right-7">
            <p className="text-earth-green font-bold text-5xl leading-12">My skills_</p>
          </div>
        </div>
      </section>
    </>
  );
}
