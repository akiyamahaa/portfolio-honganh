import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import DivAnim from "../animation/DivAnim";
import PAnim from "../animation/PAnim";

const Content = () => {
  return (
    <Container>
      <DivAnim className="pt-32 space-y-12">
        {/* Part 1 */}
        <div className="space-y-6">
          <PAnim className="text-base xl:text-lg text-gray-600">
            I have a special love and desire to help poor children in difficult
            living conditions, especially ethnic minority children in
            mountainous areas. From my trips to the highlands, I have clearly
            seen the difficulties that children here face: poor living
            conditions, limited learning opportunities, and inadequate
            facilities. These images have been deeply imprinted in my mind,
            urging me to take action to improve their lives.
          </PAnim>
          <PAnim className="text-base xl:text-lg text-gray-600">
            In the volunteer trips I have participated in, I have always been
            the one to connect people together, call for support from the
            community and find ways to create sustainable solutions for ethnic
            minority children in mountainous areas. I have learned to listen and
            understand their real needs, and always strive to bring about
            long-term positive changes. I do not only want to give material
            things, but also want to bring them faith and hope for a better
            future.
          </PAnim>
          <PAnim className="text-base xl:text-lg text-gray-600">
            In 8th grade, I had the chance to organize a volunteer trip to five
            preschools in Ba Khe, Cat Thinh commune, Van Chan district, Yen Bai
            province. Our goal was to support children lacking basic necessities
            during the cold season. I reached out to my family, explaining the
            children&apos;s needs, and they generously contributed VND 30
            million and a delivery truck for the donations. This allowed us to
            expand our efforts significantly. On the visit day, we handed out
            200 gift sets, each including a jacket, slippers, socks, a hat, a
            food container, a kilogram of rice, and a box of instant noodles.
            The total value of the gifts reached 100 million VND. Seeing the
            children&apos;s joy made all the work worthwhile, highlighting the
            impact of collective effort in helping those in need
          </PAnim>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <Image
              src={images.support1}
              className="rounded-3xl h-[376px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support2}
              className="rounded-3xl h-[376px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support3}
              className="rounded-3xl h-[376px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support4}
              className="rounded-3xl h-[376px] object-cover"
              alt="img-passion"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">
            The Renouveau Project
          </h2>
          <PAnim className="text-base xl:text-lg text-gray-600">
            As part of the &quot;Renouveau Project,&quot; a volunteer initiative
            to build schools for underprivileged students in northwest Vietnam,
            I led fundraising and financial management efforts.
          </PAnim>
          <PAnim className="text-base xl:text-lg text-gray-600">
            I managed a Finance team of seven, organizing well-planned
            fundraising activities. A key achievement was creating the
            Sponsorship Profile, securing a 10 million VND sponsorship from
            Milkity, a local beverage company, to build a restroom at Xeo Di Ho
            Primary School in Bac Kan province.
          </PAnim>
          <PAnim className="text-base xl:text-lg text-gray-600">
            To further raise funds, I organized a successful event at the Hanoi
            Tourism Gift Festival, selling traditional Vietnamese food and
            generating 25 million VND in revenue for our construction projects.
            I also implemented transparent budgeting and financial reporting,
            reducing losses by 10% and ensuring efficient resource use.
          </PAnim>
          <PAnim className="text-base xl:text-lg text-gray-600">
            Through my role, I combined financial expertise, strategic planning,
            and community service, significantly improving educational
            facilities for children in remote areas.
          </PAnim>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-6">
            <Image
              src={images.support5}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support6}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support7}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support8}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support9}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support10}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support11}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support12}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.support13}
              className="rounded-3xl h-[256px] object-cover"
              alt="img-passion"
            />
          </div>
        </div>
      </DivAnim>
    </Container>
  );
};

export default Content;
