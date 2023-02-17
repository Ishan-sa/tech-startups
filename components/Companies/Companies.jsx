import companies from "../../data/data.json";
import Image from "next/image";
import MyCard from "components/Card/Card";

export default function Companies() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((item, index) => {
          return (
            // <div key={index}>
            //   <h1>{item.company_name}</h1>
            //   <p>{item.headline}</p>
            //   <Image
            //     src={`/images/images/${item.id}.jpg`}
            //     alt="MF Logo"
            //     width={100}
            //     height={100}
            //   />
            // </div>
            <div key={index}>
              <MyCard
                src={`/images/images/${item.id}.jpg`}
                title={item.company_name}
                description={item.headline}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
