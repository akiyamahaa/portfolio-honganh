import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import Link from "next/link";
import PAnim from "../animation/PAnim";
import DivAnim from "../animation/DivAnim";

const Content = () => {
  return (
    <Container>
      <DivAnim className="pt-32 space-y-12">
        {/* Part 1 */}
        <div className="space-y-12">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-primary-600">
            The base of my life - Family
          </h1>
          <PAnim className="text-base xl:text-lg text-gray-600">
            My family has always been my foundation. My parents are dynamic
            entrepreneurs, managing companies, which means they&apos;re often
            busy. That&apos;s why my childhood is closely tied to memories of my
            mother&apos;s office. She would often pick me up from school and
            take me directly to her workplace, and it&apos;s likely that my
            early interest in the financial field began there.
          </PAnim>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src={images.finance4}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance2}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance3}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance5}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
            </div>
            <div className="hidden xl:w-1/3 xl:block">
              <Image
                src={images.finance1}
                className="rounded-3xl h-[514px] object-cover"
                alt="img-passion"
              />
            </div>
          </div>
          <PAnim className="text-base xl:text-lg text-gray-600">
            Growing up, I learned the importance of independence—whether it was
            handling schoolwork on my own or figuring out my meals. My dad
            taught me resilience and the value of hard work, while my mom&apos;s
            sharp business intuition showed me the importance of strategic
            thinking.
          </PAnim>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src={images.finance6}
              className="rounded-3xl h-[376px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.finance7}
              className="rounded-3xl h-[376px] object-cover"
              alt="img-passion"
            />
          </div>
          <PAnim className="text-base xl:text-lg text-gray-600">
            Then there’s my big brother, who’s currently studying at Fordham
            University on a scholarship. He’s my biggest inspiration, showing me
            that with dedication, it’s possible to step out into the world and
            make a difference. Seeing his journey has pushed me to set my own
            goals high and work relentlessly to achieve them.
          </PAnim>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src={images.finance8}
              className="rounded-3xl h-[376px] object-cover"
              alt="img-passion"
            />
            <Image
              src={images.finance9}
              className="rounded-3xl h-[376px] object-cover"
              alt="img-passion"
            />
          </div>
        </div>

        {/* Part 2 */}
        <div className="space-y-12">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-primary-600">
            Let&apos;s see my dedication!
          </h1>
          {/* Sub part */}
          <div className="space-y-6">
            <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">
              The NON Project
            </h2>
            <PAnim className="text-base xl:text-lg text-gray-600">
              My journey with &quot;Non Project,&quot; a start-up dedicated to
              showcasing the beauty of lotus leaf conical hats, has involved
              every step from the craft&apos;s origins to expanding its reach.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              I began in Dong Ba Market, where I observed the entire hat-making
              process—from dyeing dried lotus leaves to meticulous shaping and
              decoration. This hands-on experience deepened my appreciation for
              the craft. I also successfully negotiated a 20% reduction in
              purchasing costs from local suppliers, strengthening ties with
              artisans and supporting fair trade.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              A key highlight was collaborating with Goc Viet to host a cultural
              event at Sword Lake, Hanoi, where we sold 100 hats, earning 20
              million VND. This event boosted brand visibility and underscored
              the appeal of traditional, eco-friendly fashion.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              I then led online and offline campaigns, utilizing social media
              and local pop-ups. Within three months, these efforts generated 28
              million VND, cementing &quot;Non Project&apos;s&quot; market
              presence. This experience blended cultural heritage with business
              innovation, turning a traditional craft into a modern fashion
              statement.
            </PAnim>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="hidden xl:w-1/3 xl:block">
                <Image
                  src={images.finance12}
                  className="rounded-3xl h-[514px] object-cover"
                  alt="img-passion"
                />
              </div>
              <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src={images.finance10}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.finance11}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.finance13}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
                <Image
                  src={images.finance14}
                  className="rounded-3xl h-[245px] object-cover"
                  alt="img-passion"
                />
              </div>
            </div>
          </div>

          {/* Sub part */}
          <div className="space-y-6">
            <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">
              The DEco Project
            </h2>
            <PAnim className="text-base xl:text-lg text-gray-600">
              At &quot;DEco Project,&quot; a non-profit promoting sustainable
              development through community service, I guided the initiative
              from its start to meaningful impact.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              Over a year, I managed a team of five, creating a project proposal
              and communication strategy that led to the successful launch of a
              fan page with 1,400 followers. A key achievement was the “Green
              Cycle” project, where I organized a workshop for 63 high school
              students, teaching them to assemble electricity-generating
              bicycles and raising awareness about renewable energy.
            </PAnim>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <Image
                src={images.finance15}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance16}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance17}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance18}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance19}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance20}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
            </div>
            <PAnim className="text-base xl:text-lg text-gray-600">
              I also secured a sponsorship with Volunteer For Education (VEO),
              boosting our resources and visibility. Additionally, I promoted
              the “Thuong Thuong” workshop, which showcased handicrafts made by
              disabled artisans at MIPEC Tower, generating 7 million VND and
              attracting over 80 participants. This experience allowed me to
              combine leadership and creativity, making a tangible impact on
              sustainability and community outreach.
            </PAnim>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <Image
                src={images.finance21}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance22}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance23}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance24}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance25}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance26}
                className="rounded-3xl h-[245px] object-cover"
                alt="img-passion"
              />
            </div>
          </div>

          {/* Sub part */}
          <div className="space-y-6">
            <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">
              Work Experience at Báo Đầu tư (Investment Review)
            </h2>
            <PAnim className="text-base xl:text-lg text-gray-600">
              As a Copywriting Collaborator for Báo Đầu tư, a leading Vietnamese
              online newspaper in investment and finance, I was responsible for
              creating engaging content on topics like fashion, real estate,
              entertainment, and infrastructure.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              I conducted in-depth research, gathering financial data from
              reputable sources such as The Wall Street Journal and The
              Economist. This required keeping up with global trends, analyzing
              market shifts, and understanding the financial impact of local and
              international events. Accuracy was crucial for producing reliable
              content.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              Guided by Mr. Dang Hong Hai, Head of the Financial Investment
              Editors Department, I honed my data-gathering skills, maintaining
              high journalism standards. My writing aimed to make complex
              financial concepts accessible, blending data analysis with
              storytelling to engage a wide audience.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              My experience at Báo Đầu tư allowed me to develop both creative
              and analytical skills, contributing to the publication&apos;s
              reputation as a reliable source for investment and finance news.
            </PAnim>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="text-center">
                <Image
                  src={images.finance27}
                  className="h-[360px] object-cover"
                  alt="img-passion"
                />
                <div className="mt-4">
                  <Link
                    href="https://baodautu.vn/nha-dau-tu-ngoai-tang-toc-viet-nam-san-sang-don-dong-von-lon-d222173.html"
                    target="_blank"
                    className="underline text-blue-600"
                  >
                    baodautu.vn
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <Image
                  src={images.finance28}
                  className="h-[360px] object-cover"
                  alt="img-passion"
                />
                <div className="mt-4">
                  <Link
                    href="https://baodautu.vn/batdongsan/dat-nen-phia-nam-ha-noi-ruc-rich-sot-theo-ha-tang-d220832.html"
                    target="_blank"
                    className="underline text-blue-600"
                  >
                    baodautu.vn
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sub part */}
          <div className="space-y-6">
            <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">
              Internship at MITEC Company
            </h2>
            <PAnim className="text-base xl:text-lg text-gray-600">
              As an Finance & Accounting Intern at MITEC Co., Ltd, I received
              extensive training in Fast accounting software and tax laws,
              preparing me to handle financial data accurately.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              I managed invoice data entry and reconciled bank statements,
              identifying and correcting two errors to ensure accuracy.
              Additionally, I assisted in preparing payroll for 36 employees,
              calculating salaries and deductions to maintain a smooth and
              reliable process.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              In business meetings, I offered insights on exchange rate reserves
              and shipping costs, aiming to optimize expenses. I also compiled
              the July 2023 financial report, analyzing data to guide financial
              decisions.
            </PAnim>
            <PAnim className="text-base xl:text-lg text-gray-600">
              This experience gave me a solid understanding of accounting, from
              data management to strategic financial planning, supporting
              MITEC&apos;s financial efficiency.
            </PAnim>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <Image
                src={images.finance29}
                className="rounded-3xl h-[420px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance30}
                className="rounded-3xl h-[420px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance31}
                className="rounded-3xl h-[420px] object-cover"
                alt="img-passion"
              />
              <Image
                src={images.finance32}
                className="rounded-3xl h-[420px] object-cover"
                alt="img-passion"
              />
            </div>
          </div>
        </div>
      </DivAnim>
    </Container>
  );
};

export default Content;
