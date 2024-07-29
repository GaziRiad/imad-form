import Link from "next/link";
import Form from "./_components/Form";

function page() {
  return (
    <section className="min-h-screen bg-brown px-5 py-20 text-lightGrey bg-white text-black section-bg">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center font-display text-[2.5rem] leading-tight xl:text-[4rem]">
          Study in Russia Signup
        </h1>
        <p className="mb-16 text-center text-base font-normal text-lightGrey/90">
          Embark on an educational journey like no other. Our program offers
          comprehensive support and guidance to help you secure your spot at top
          universities in Russia. From application assistance to visa guidance,
          we are here to make your dream of studying in Russia a reality. Join a
          diverse community of international students and experience the rich
          culture, world-class education, and vibrant student life that Russia
          has to offer. Start your journey today!
        </p>
      </div>

      <Form />
    </section>
  );
}

export default page;
