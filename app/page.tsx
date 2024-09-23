import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import bookingIMG from "@/public/assets/images/bookingImg.jpg"
import logoIMG from "@/public/assets/images/mediCareLogo.png"
import PasskeyModal from "@/components/PasskeyModal";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal/>}
      
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
        {/* <Image
          src="/assets/icons/logo-full.svg"
          // src={logoIMG}
          height={2000}
          width={2000}
          alt="patient"
          className="mb-12 h-10 w-fit rounded"
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


          <PatientForm/>

          <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
          ©Developed by Ritesh Raj Tiwari
          </p>
          <Link href="/?admin=true" className="text-green-500">
          Admin
          </Link>
          </div>
        </div>
      </section>

      <Image
        // src="/assets/images/onboarding-img.png"
        src={bookingIMG}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%] border-rounded"
        />
    </div>
  );
}
