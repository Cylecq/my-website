import Image from "next/image";
import Link from "next/link";

type Props = {
  icon: any;
};

const DownloadCVButton = ({ icon }: Props) => {
  return (
    <Link
      href="/download/CV_Cyril_Leclercq.pdf"
      target="_blank"
      rel="noopener noferrer"
      className="relative h-[50px] w-56 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black"
    >
      <span className="relative z-10 flex items-center justify-center gap-4 h-full">
        Télécharger mon CV
        <Image src={icon} alt="Télécharger mon CV" width={30} height={30} />
      </span>
    </Link>
  );
};

export default DownloadCVButton;
