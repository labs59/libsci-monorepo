import Image from 'next/image';
import Link from 'next/link';

const data = [{
  title: 'New Research Unit to Explore A New Horizon of Information Landscape',
  description: 'Expand your horizon and worldviews of information, data, and knowledge management from cultural perspectives.',
  image: '/hero-img.svg',
  link: '/about',
}]

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="flex items-start justify-center w-full bg-[#341443]">
      <section className="max-w-5xl w-full py-8 px-6 flex md:flex-row flex-col-reverse items-center justify-between gap-6">
        <div className="flex flex-col gap-4 md:w-2/4 w-full">
          <h1 className="text-4xl text-white font-bold">{data[0].title}</h1>
          <p className="text-white">{data[0].description}</p>
          <Link href={data[0].link} className="w-fit px-4 py-2 bg-white text-stone-700 rounded-full font-medium">Learn More</Link>
        </div>
        <div className='w-2/4'>
          <Image src={data[0].image} alt="Landing Image" width={400} height={263} className="w-fit" />
        </div>        
      </section>
    </div>
  );
}
