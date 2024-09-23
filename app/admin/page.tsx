import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logoIMG from '@/public/assets/images/mediCareLogo.png'
import StatCard from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions'
import {DataTable} from '@/components/table/DataTable'
import {columns} from '@/components/table/columns'

const Admin = async() => {
  const appointments = await getRecentAppointmentList()

  return (
    <div className="mx-auto flex mx-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
        <div className="flex items-center gap-4 pb-5">
          <Image
            // src="/assets/icons/logo-full.svg"
            src={logoIMG}
            height={2000}  
            width={2000}   
            alt="patient"
            className="h-[70px] w-[70px] rounded"  
          />

          <h1 className="text-2xl font-bold">MediCare</h1>
        </div>
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">Start the day with managing new appointments</p>
        </section>

        <section className="admin-stat">
          <StatCard 
          type="appointments" 
          count={appointments.scheduledCount} 
          label="Scheduled appointments"
          icon="/assets/icons/appointments.svg"
          />
          <StatCard 
          type="pending" 
          count={appointments.pendingCount} 
          label="Pending appointments"
          icon="/assets/icons/pending.svg"
          />
          <StatCard 
          type="cancelled" 
          count={appointments.cancelledCount} 
          label="Cancelled appointments"
          icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  )
}

export default Admin
