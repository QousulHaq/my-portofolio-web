import React from 'react'
import Image from "next/image";
import Link from "next/link";
import SendIcon from "@/components/icons/send";

const Page = () => {
    return (
        <section className="second-section w-[100%] h-[100vh] ps-7 pe-2 pt-[84px] bg-earth-dark-green">
            <div className="section-wrapper relative flex-col justify-between items-center h-full">
                <div className="banner-image-and-photo relative w-[100%] h-[280px] bg-[url(/banner-linkedin2.png)] bg-cover bg-no-repeat bg-center">
                    <Image src={"/profile-linkedin.png"} width={220} height={220} alt="profile-linkedin" className="rounded-full border-8 border-earth-dark-green absolute -bottom-14 left-14" />
                </div>
                <div className="profile-content p-14 flex justify-between items-start mt-5">
                    <div className="profile-user space-y-4">
                        <div className="user-name">
                            <h1 className="text-earth-white text-4xl font-semibold leading-12">Ahmad Qousul Haq</h1>
                            <p className="text-earth-white text-2xl font-normal w-[805px]">Front-End Developer | React.js • Laravel • Tailwind | Turning Ideas into Interactive Web Apps</p>
                        </div>
                        <div className="user-address flex items-center gap-4">
                            <p className="text-earth-white text-lg font-normal">Surabaya, Jawa Timur, Indonesia</p>
                            <p className="text-earth-white text-lg font-normal">•</p>
                            <Link href={"#"} className="text-earth-light-green text-lg font-semibold">Informasi kontak</Link>
                        </div>
                        <div className="buttons-container flex items-center gap-3">
                            <Link href={"#"} className="bg-earth-light-green rounded-full px-5 py-3 flex justify-center items-center gap-4">
                                <SendIcon color="#373D20" />
                                <p className="text-earth-dark-green text-xl font-medium">Message</p>
                            </Link>
                            <Link href={"#"} className="border-2 border-earth-light-green rounded-full px-5 py-3 flex justify-center items-center gap-4">
                                <p className="text-earth-light-green text-xl font-medium">Visit my Linkedin 🚀</p>
                            </Link>
                        </div>
                    </div>
                    <div className="company-user">
                        <div className="company-content flex justify-center items-center gap-3">
                            <Image src={"/logo-pens.png"} width={24} height={24} alt="logo-pens" />
                            <p className="text-earth-white text-xl font-semibold leading-6">Politeknik Elektronika Negeri Surabaya</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page