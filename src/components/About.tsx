import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="min-h-screen flex">
        <div className="m-auto">
          <h1 className="text-3xl lg:text-5xl font-helvetica font-bold text-center">
            All about me
          </h1>
          <hr className="mt-5 w-3/5 lg:w-1/5 mx-auto" />
          <h2 className="text-xl mt-5 font-poppins text-center mx-20">
            Hi, I'm Fatihul Ihsan Ramadhan, you can call me{" "}
            <span className="italic font-bold">Fatih</span>, I'm 16 years old, I
            live in Indonesia, right now my status is a student in SMAN 5 Kota
            Bekasi. I love to code, video games, and much more. I want to focus
            to be a better programmer soon. I got small projects, and i build
            some of them with my friend,{" "}
            <Link
              href={"https://github.com/WillisRH"}
              className="font-bold underline cursor-pointer"
            >
              WillisRH
            </Link>
            . I'm open for a commision. I'm able to build a fullstack website
            with low price, but it still depends on the complexity of the
            program. Feel free to contact me!
          </h2>
        </div>
      </section>
    </>
  );
}
