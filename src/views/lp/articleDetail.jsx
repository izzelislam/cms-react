import React from 'react'
import MainLayoutGuest from '../../components/layout/lp/main'
import { Link } from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa6";
import { FcSms } from "react-icons/fc";

function ArticleDetailPage() {
  return (
    <>
      <MainLayoutGuest>
      <div className='bg-[bg-[#E2E8F0]] mb-10'>
          <div className='container my-8'>
            <h1 className='text-sm text-gray-500 italic'>Article Detail / namanya-belajar-react</h1>
          </div>
          <div className='container grid grid-cols-12 gap-6 grid-flow-row-dense'>
          <div className='col-span-12 md:col-span-8 bg-white rounded-lg drop-shadow-md p-8'>
              <div 
                style={{backgroundImage: `url(https://www.petanikode.com/img/cover/cpp-union.png)`}}
                className='w-full h-96 bg-cover bg-center rounded-md mb-4'
              ></div>

              <div className='mb-4 flex items-center'>
                <img src='https://upload.wikimedia.org/wikipedia/id/thumb/d/d5/Aang_.jpg/300px-Aang_.jpg'  className='w-8 h-8 rounded-full'/>
                <p className='ml-2 text-gray-500 text-xs'>Avatar the legend</p>
                <p className='ml-2 text-gray-500 text-xs'>- 12 Januari 2024</p>
              </div>

              <h1 className='text-xl text-gray-700 font-semibold mb-2'>Belajar C++ #13: Mengenal Tipe Data Union</h1>
              <p className='text-sm text-gray-500'>
                ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                <br/><br/><br/>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                <br/><br/><br/>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                <br/><br/><br/>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>

            {/* sidebar section */}
            <div className='col-span-12 md:col-span-4'>
              <div className='bg-white rounded-lg drop-shadow-md p-8 mb-8'>
                <h4 className='text-xl font-semibold text-gray-600 mb-2 flex items-center'> <FcSms className='mr-2' />Newsletter.</h4>
                <p className='text-sm text-gray-500'>
                  Mau dapat tips belajar coding, info teknologi, dan perkembangan karir sebagai programmer?
                </p>
                <div className='mt-4'>
                  <button className='w-full h-10 bg-green text-white rounded-xl flex justify-center items-center hover:bg-slate-green hover:text-green transition-all duration-300'> <FaEnvelope className='mr-2' /> Subscribe </button>
                </div>
              </div>
              <div className='bg-white rounded-lg drop-shadow-md p-8 mb-8'>
                <h4 className='text-xl font-semibold text-gray-600 mb-2 flex items-center mb-4'> <span className='block-inline me-2'>🔥</span> Artikel Terbaru </h4>

                {
                  Array(5).fill(0).map((_, index) => (
                    <div className='mb-3' key={index}>
                      <div className='flex'>
                        <div 
                          style={{backgroundImage: `url(https://www.petanikode.com/img/cover/cpp-union.png)`}}
                          className='w-24 h-12 bg-cover bg-center rounded-md mr-4'
                        ></div>
                        <div>
                          <div className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                        </div>
                      </div>
                      <hr className='mt-3'/>
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </MainLayoutGuest>
    </>
  )
}

export default ArticleDetailPage
