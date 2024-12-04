import React, { useState, useEffect } from "react";
import Roundedsquare from "@/components/ui/Rounded_square";


const boxColors = ["#FF5733", "#FFFFFF"]; // Merah untuk kotak aktif, putih untuk lainnya
const bgImages = [
  "url('/images/background-a.jpg')", // Gambar untuk latar belakang pertama
  "url('/images/background-b.jpg')", // Gambar untuk latar belakang kedua
  "url('/images/background-c.jpg')", // Gambar untuk latar belakang ketiga
];

const Background_animation = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Indeks kotak aktif
  const [bgImage, setBgImage] = useState(bgImages[0]); // Gambar latar belakang

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3); // Pindah ke kotak berikutnya
    }, 2000); // Ganti setiap 2 detik

    return () => clearInterval(interval); // Hentikan interval saat komponen dihapus
  }, []);

  useEffect(() => {
    setBgImage(bgImages[activeIndex]); // Ubah gambar latar belakang berdasarkan kotak aktif
  }, [activeIndex]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen transition-all duration-500"
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      

      {/* Bagian ketiga dengan kotak rounded */}
      <div className="flex space-x-10 items-center absolute bottom-20">
        {[0, 1, 2].map((index) => (
          <Roundedsquare
            key={index}
            style={{
              backgroundColor: index === activeIndex ? boxColors[0] : boxColors[1],
              transition: "background-color 0.5s ease",
              width: "50px",
              height: "50px",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background_animation;
