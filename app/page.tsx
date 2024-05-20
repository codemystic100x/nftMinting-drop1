/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { sanityClient } from '@/sanity';
import { Collection } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  collections: Collection[];
}
export default function Home({ collections }: Props) {
  return (
    <div>
      <h1 className='mb-10 text-4xl font-extralight'>
        The{' '}
        <span className='font-extrabold underline decoration-pink-600/50'>
          NFT
        </span>{' '}
        Market Place
      </h1>

      {/* <main className='bg-slate-100 p-10 shadow-xl shadow-rose-400/20'>
        <div className='grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {collections.map((collection) => (
            <Link key={collection._id} href={`/nft/${collection.slug.current}`}>
              <div className='flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105'>
                <img
                  className='h-96 w-60 rounded-2xl object-cover'
                  src={urlFor(collection.mainImage).url()}
                  alt=''
                />
                <div className='p-5'>
                  <h2 className='text-3xl'>{collection.title}</h2>
                  <p className='mt-2 text-sm text-gray-400'>
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main> */}
    </div>
  );
}
