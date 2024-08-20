import { Link } from "react-router-dom";
import { Button } from "/src/components/ui/button";
import { Carousel } from "/src/components/ui/carousel";
import { CarouselContent, CarouselItem } from "/src/components/ui/carousel";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "/src/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/src/components/ui/accordion";

const Landing = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10  sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Welcome,Find your dream job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get{" "}
            <img
              src="/logo.png"
              alt="logo image"
              className="h-14 sm:h-24 lg:h-32"
            />{" "}
          </span>{" "}
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore many job listing and find the perfect job for you{" "}
        </p>
      </section>

      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="pink" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="teal" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      {/* caraosuel */}
      <Carousel plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/ lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-20 object-contain "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner */}
      <img
        src="/banners.jpg"
        alt="banner image"
        className="w-[1500px] h-[900px] object-cover rounded-lg shadow-lg"
      ></img>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cards */}
        {/* First card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl ">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl">
            <p>Search,apply and track application and more</p>
          </CardContent>
        </Card>
        {/* 2nd card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl ">For Recruiters</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl">
            <p>Find The perfect candidate for your job</p>
          </CardContent>
        </Card>
      </section>

      {/* accordion */}
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default Landing;
