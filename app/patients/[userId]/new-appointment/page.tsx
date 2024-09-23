import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import bookingIMG from "@/public/assets/images/bookingImg.jpg"
import logoIMG from "@/public/assets/images/mediCareLogo.png"
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

import * as Sentry from '@sentry/nextjs'

export default async function NewAppointment({ params: { userId }}: SearchParamProps) {
  const patient = await getPatient(userId);

  Sentry.metrics.set("user_view_new-appointment", patient.name);
  
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
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


          <AppointmentForm 
          type="create"
           userId={userId}
           patientId={patient.$id}
          />

          <p className="copyright mt-10 py-12">
          ©Developed by Ritesh Raj Tiwari
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        // src={bookingIMG}
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
        />
    </div>
  );
}
