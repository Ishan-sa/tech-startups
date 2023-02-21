import Head from "next/head";
import Hero from "components/Hero/Hero";
import { useRef } from "react";
import MyCard from "../../components/Card/Card";
import Link from "next/link";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import data from "../../data/data.json";

export default function Home({ data }) {
  const companiesRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Tech Startups | 2023</title>
        <meta name="description" content="Developed By - Ishan Sachdeva" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <Lottie
            animationData={require("../../public/lottie-files/loading.json")}
            style={{
              width: 400,
              height: 400,
            }}
          />
        </div>
      )}

      {!loading && (
        <main className="p-8 flex flex-col" id="main-tag-testing">
          <div className="flex justify-center items-center">
            <Hero
              onScrollClick={() => {
                window.scrollTo({
                  top: 800,
                  behavior: "smooth",
                });
              }}
            />
          </div>
          <div ref={companiesRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`/companies/${index + 1}`}
                    className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
                  >
                    <MyCard
                      src={`/images/images/${item.id}.jpg`}
                      title={item.company_name}
                      description={item.headline}
                      avatarSrc={`/images/images/${item.id}.jpg`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      data,
    },
  };
};
