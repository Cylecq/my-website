"use client";
import Image from "next/image";
import React from "react";
import mail from "../../../../public/svg/mail.svg";
import download from "../../../../public/svg/download.svg";
import github from "../../../../public/svg/github.svg";
import linkedin from "../../../../public/svg/linkedin.svg";

type Props = {
  contactDict: {
    title: string;
    mailTitle: string;
    mailButton: string;
    cvTitle: string;
    cvButton: string;
    networksTitle: string;
  };
};

function Contact({ contactDict }: Props) {
  const handleClick = async () => {
    const response = await fetch("/api/file");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV_Cyril_Leclercq.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  };
  return (
    <section id="contact" className="h-screen flex justify-center items-center">
      <div className="bg-white w-11/12 py-4 px-2 z-10 border border-primary shadow-inner flex flex-col justify-center items-center gap-6">
        <h2 className="font-display text-2xl mb-2 self-start">
          {contactDict.title}
        </h2>
        <div className="flex flex-col gap-10">
          <div className="w-full flex flex-col items-center gap-2">
            <h3>{contactDict.mailTitle}</h3>
            <a href="mailto:leclercq.cyril06@gmail.com">
              <button className="relative h-[50px] w-56 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black">
                <span className="relative z-10 flex items-center justify-center gap-4">
                  {contactDict.mailButton}
                  <Image src={mail} alt="mail" width={30} height={30} />
                </span>
              </button>
            </a>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <h3>{contactDict.cvTitle}</h3>
            <button
              onClick={handleClick}
              className="relative h-[50px] w-56 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                {contactDict.cvButton}
                <Image src={download} alt="download" width={30} height={30} />
              </span>
            </button>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <h3>{contactDict.networksTitle}</h3>
            <div className="w-full flex justify-around">
              <a
                target="blank"
                className="shadow-2xl"
                href="https://github.com/Cylecq"
              >
                <Image src={github} alt="github" width={30} height={30} />
              </a>
              <a
                target="blank"
                className="shadow-2xl"
                href="https://www.linkedin.com/in/cylecq/"
              >
                <Image src={linkedin} alt="linkedin" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
