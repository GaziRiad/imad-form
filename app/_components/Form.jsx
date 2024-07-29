"use client";

import { useRouter } from "next/navigation";
import Input from "./Input";

function Form() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // PUT HERE THE KEY OF THE CLIENT
        access_key: "a1846d20-df92-4f28-8c3e-2268e92f1866",
        subject: "Nieuwe bestelling Denise Anna website",
        from_name: "Denise Anna",
        FirstName: e.target.firstName.value,
        LastName: e.target.lastName.value,
        email: e.target.email.value,
        birthDay: e.target.brithDay.value,
        phoneNumber: e.target.phoneNum.value,
        bootcamLessons: e.target.bootcampLesson.value,
        bestXChallenge: e.target.bestChallenge.value,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (result.success) {
      router.push("/thankyou");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-screen-sm flex-col justify-center"
    >
      <div className="z-50 mb-24">
        <h2 className="text-center font-display text-[2.5rem]">
          Personal Information
        </h2>
        <div className="flex flex-col items-stretch gap-5">
          <Input
            id="firstName"
            placeholder="First Name"
            type="text"
            label="First Name"
          />
          <Input
            id="lastName"
            placeholder="Achternaam"
            type="text"
            label="Last Name"
          />
          <Input
            id="email"
            placeholder="E-mailadres"
            type="email"
            label="E-mailadres"
          />
          <Input
            id="brithDay"
            type="date"
            label="BirthDay"
            max={new Date().toISOString().split("T")[0]}
          />
          <Input
            id="phoneNum"
            type="number"
            label="Phone number"
            placeholder="06 1234 5678"
          />
        </div>
      </div>
      {/*  */}
      {/* <div className="z-50 mb-14">
        <h2 className="text-center font-display text-[2.5rem]">
          Wat wil je bestellen?
        </h2>
        <div className="flex flex-col items-stretch gap-5">
          <Input
            id="bootcampLesson"
            placeholder="0"
            min="0"
            max="50"
            type="number"
            label="Bootcamp lessen"
          />
          <Input
            id="bestChallenge"
            placeholder="0"
            min="0"
            max="1"
            type="number"
            label="Jouw Beste Versie de challenge"
          />
        </div>
      </div> */}

      <button className="z-50 mx-auto w-fit rounded-[40px] border px-6 py-2 text-base font-light transition-all bg-white hover:bg-blue-800 hover:text-white">
        Make an order
      </button>
    </form>
  );
}

export default Form;
