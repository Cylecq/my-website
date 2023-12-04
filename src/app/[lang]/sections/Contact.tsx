import Image from 'next/image';
import React from 'react'
import mail from '../../../../public/svg/mail.svg';
import download from '../../../../public/svg/download.svg';


type Props = {
  contactDict: {
    title: string;
    mailTitle: string;
    mailButton: string;
    cvTitle: string;
    cvButton: string;
  };
};

function CV({ contactDict }: Props) {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="bg-white w-11/12 py-4 px-2 z-10 border border-primary shadow-inner flex flex-col justify-center items-center gap-6">
        <h2 className="font-display text-2xl mb-2 self-start">{contactDict.title}</h2>
        <div className='flex flex-col gap-10'>
          <div className="w-full flex flex-col items-center">
            <div>
              <h3>{contactDict.mailTitle}</h3>
            </div>
            <button className="relative h-[50px] w-56 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black">
              <span className="relative z-10 flex items-center justify-center gap-4">
              {contactDict.mailButton}
              <Image src={mail} alt="mail" width={30} height={30} />
              </span>
            </button>
          </div>
          <div className="w-full flex flex-col items-center">
            <div>
              <h3>{contactDict.cvTitle}</h3>
            </div>
            <button className="relative h-[50px] w-56 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black">
              <span className="relative z-10 flex items-center justify-center gap-4">
              {contactDict.cvButton}
              <Image src={download} alt="download" width={30} height={30} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV