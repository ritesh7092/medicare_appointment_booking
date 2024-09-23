import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoIMG from "@/public/assets/images/mediCareLogo.png"


const Register = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);
      console.log(userId);
  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
        {/* <Image
        src="/assets/icons/logo-full.svg"
        height={1000}
        width={1000}
        alt="patient"
        className="mb-12 h-10 w-fit"
        /> */}

        <div className="flex items-center gap-4 pb-5">
          <Image
            // src="/assets/icons/logo-full.svg"
            src={logoIMG}
            height={2000}   
            width={2000}   
            alt="patient"
            className="h-[70px] w-[70px] rounded"  
          />

          <h1 className="text-3xl font-bold">MediCare</h1>
        </div>

        <RegisterForm user={user}/>

        <p className="copyright py-12">
        ©Developed by Ritesh Raj Tiwari
        </p>
      </div>
    </section>

    <Image
      src="/assets/images/register-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[390px]"
      />
  </div>
  )
}

export default Register
