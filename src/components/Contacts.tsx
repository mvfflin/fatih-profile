import Link from "next/link";

export default function ContactSection() {
  return (
    <>
      <section id="contacts" className="min-h-screen flex">
        <div className="m-auto">
          <h1 className="text-3xl lg:text-5xl font-helvetica font-bold text-center">
            Contacts
          </h1>
          <hr className="mt-5 w-3/5 lg:w-1/5 mx-auto" />
          <h2 className="text-xl mt-5 font-poppins text-center mx-20">
            These are my active contacts, feel free to contact me!
          </h2>
          <div className="grid lg:grid-cols-2 gap-5 p-5">
            <Link
              href={"https://instagram.com/@fthihsn_"}
              className="bg-zinc-900 p-5 mt-5 lg:mt-0 hover:scale-105 rounded-sm"
            >
              <div className="inline-flex gap-5">
                <h1 className="font-icons text-2xl lg:text-4xl">Q</h1>
                <h2 className="font-helvetica text-xl lg:text-3xl font-semibold">
                  Instagram
                </h2>
              </div>
              <h3 className="text-xl lg:text-3xl m-5 mt-5">@fthihsn_</h3>
            </Link>
            <Link
              href={"mailto:mynameisfatihul@gmail.com"}
              className="bg-zinc-900 p-5 mt-5 lg:mt-0 hover:scale-105 rounded-sm"
            >
              <div className="inline-flex gap-5">
                <h1 className="font-icons text-2xl lg:text-4xl">k</h1>
                <h2 className="font-helvetica text-xl lg:text-3xl font-semibold">
                  E-mail
                </h2>
              </div>
              <h3 className="text-xl lg:text-3xl m-5 mt-5">
                mynameisfatihul@gmail.com
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
