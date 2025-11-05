import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>imurodl — Full-stack developer</title>
        <meta
          name="description"
          content="Full-stack developer from Uzbekistan, based in Seoul."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-lg w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Hi, I&apos;m Murod
          </h1>
          <p className="mt-4 text-slate-600">
            I&apos;m a full-stack developer building production-ready web
            applications.
          </p>
          <div className="mt-6">
            <a
              className="text-blue-600 hover:underline"
              href="http://solven.uz"
              target="_blank"
              rel="noreferrer"
            >
              Solven project
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
