"use client";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 7);
  const thirdRow = products.slice(7, 9);
  const fourthRow = products.slice(12, 16);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 200, damping: 40, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-100, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.25, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [30, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  // Define the starting and ending Y positions for the stacking animation
  // Adjust these values based on your layout and desired effect
  const startStackingScrollProgress = 0.8; // Example start scroll progress to begin stacking
  const endStackingScrollProgress = 1; // End at the bottom of the scroll

  // Calculate translateY values for each row to stack them as the user scrolls
  // Adjust the output range values based on your specific layout needs
  const firstRowTranslateY = useTransform(
    scrollYProgress,
    [startStackingScrollProgress, endStackingScrollProgress],
    [0, 200]
  ); // Example values
  const secondRowTranslateY = useTransform(
    scrollYProgress,
    [startStackingScrollProgress, endStackingScrollProgress],
    [0, 400]
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] py-60 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-10 space-x-10 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-10 space-x-10 ">
          {fourthRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Rumi Allbert <br /> Blog & Stuff
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-3 dark:text-neutral-200">
        Under Construction 🔨
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

// Pages

export const products = [
  {
    title: "In Search of Platos Guardian",
    link: "",
    thumbnail: "/images/plato.png",
  },
  {
    title: "Echoes of Ancient Wisdom",
    link: "",
    thumbnail: "/images/echoesofvirtue.png",
  },
  {
    title: "Psychadelic Revelation",
    link: "",
    thumbnail: "/images/psychadelicrevelation.png",
  },

  {
    title: "From Purgatory to Principle",
    link: "",
    thumbnail: "/images/lovetoprinciple.png",
  },
  {
    title: "Reason and Revelation",
    link: "",
    thumbnail: "/images/reasonandrevelation.png",
  },
  {
    title: "Lust’s Lure",
    link: "",
    thumbnail: "/images/lustlure.png",
  },

  {
    title: "Beyond Words",
    link: "",
    thumbnail: "/images/beyondwords.png",
  },
  // {
  //   title: "Aceternity UI",
  //   link: "",
  //   thumbnail: "",
  // },
  // {
  //   title: "Tailwind Master Kit",
  //   link: "",
  //   thumbnail: "",
  // },
  // {
  //   title: "SmartBridge",
  //   link: "",
  //   thumbnail: "",
  // },
  // {
  //   title: "Renderwork Studio",
  //   link: "",
  //   thumbnail: "",
  // },

  // {
  //   title: "Creme Digital",
  //   link: "",
  //   thumbnail: "",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "",
  //   thumbnail: "",
  // },
];
