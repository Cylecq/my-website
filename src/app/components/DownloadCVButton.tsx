"use client";
import Image from "next/image";

type Props = {
  icon: any;
};

const DownloadCVButton = ({ icon }: Props) => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/api/file");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "CV_Cyril_Leclercq.pdf";
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="relative h-[50px] w-56 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-primary before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-primary after:duration-500 hover:text-black hover:shadow-primary hover:before:h-2/4 hover:after:h-2/4 hover:border-black"
    >
      <span className="relative z-10 flex items-center justify-center gap-4">
        Télécharger mon CV
        <Image src={icon} alt="Télécharger mon CV" width={30} height={30} />
      </span>
    </button>
  );
};

export default DownloadCVButton;
