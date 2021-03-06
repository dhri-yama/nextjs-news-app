import Head from 'next/head'
export default function Home() {
  
  return (
    <>
    <Head>
    <title>Next.js News App</title>
    </Head>
    <div className=" h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-center font-semibold mb-4">
            Next.js News App</h1>
        <h3 className="text-2xl md:text-4xl font-light text-center">Your one stop shop for the </h3>
        <h3 className="text-2xl md:text-4xl font-light text-center mt-3">
          latest <span className=" bg-gradient-to-r from-yellow-400 to-red-500 text-white font-normal"> news articles</span>
        </h3>
      </div>
      
    </div>
    </>
  )
}
