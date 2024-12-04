"use client";
import React, { useState, useEffect } from "react";
import Searchbar from "@/components/ui/searchbar";
import Roundedsquare from "@/components/ui/Rounded_square";
import Just_squere from "@/components/ui/just_squere";
import Link from 'next/link';


const boxColors = ["#FF5733", "#FFFFFF"]; // Merah untuk kotak aktif, putih untuk lainnya
const bgImages = [
  "url('/image/background-a.jpg')", // Gambar untuk latar belakang pertama
  "url('/image/background-b.jpg')", // Gambar untuk latar belakang kedua
  "url('/image/background-c.jpg')"
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Indeks kotak aktif
  const [bgImage, setBgImage] = useState(bgImages[0]); // Gambar latar belakang

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3); // Pindah ke kotak berikutnya
    }, 4000); // Ganti setiap 2 detik

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
      {/* Searchbar tetap di tengah */}
      <div className="flex justify-center items-center">
        <Searchbar />
      </div>

      {/* Bagian kedua dengan teks dan kotak */}
      <div className="flex space-x-8.5 items-center mt-4 text-sm">
        <Link href="/anotherone" legacyBehavior>
          <a>Restoran</a>
        </Link>
        <Just_squere />
        <Link href="/anotherone" legacyBehavior>
          <a>Jasa Rumahan</a>
        </Link>
        <Just_squere />
        <Link href="/anotherone" legacyBehavior>
          <a>Auto Service</a>
        </Link>
        <Just_squere />
        <Link href="/anotherone" legacyBehavior>
          <a>Lainnya</a>
        </Link>
     </div>

      {/* Bagian ketiga dengan kotak rounded */}
      <div className="flex space-x-10 items-center absolute bottom-20">
        {[0, 1, 2].map((index) => (
          <Roundedsquare
            key={index}
            style={{
              backgroundColor: index === activeIndex ? boxColors[0] : boxColors[1],
              transition: "background-color 0.5s ease",
              width: "80px",
              height: "3px",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
