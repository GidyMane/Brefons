/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: Omit<CardProps, "discription" | "icon">[] = [
  {
    label: "Water pans Constructed/Rehabilitated",
    amount: "27/28",
  },
  {
    label: "Boreholes constructed/Rehabilited",
    amount: "21/28",
  },
  {
    label: "Shallow wells constructed/Rehabilitated",
    amount: "19/28",
  },
  {
    label: "Water Harvesting structures Developed",
    amount: "64%",
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Baringo",
    email: "637 activities",
  },
  {
    name: "West Pokot",
    email: "88 activities",
  },
  {
    name: "Turkana",
    email: "637 activities",
  },
  {
    name: "Marsabit",
    email: "89 activities",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="REPORTS" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Activities Achieved</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>County Activities</p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
