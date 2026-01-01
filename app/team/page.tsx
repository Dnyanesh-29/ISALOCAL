"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"
import Image from "next/image"
import styles from "./team.module.css"



const coreTeam = [
  { name: "Member 1", role: "President", img: "/team/president.jpg" },
  { name: "Member 2", role: "Vice President", img: "/team/vice-president.jpg" },
  { name: "Member 3", role: "General Secretary", img: "/team/general-secretary.jpg" },
  { name: "Member 4", role: "Treasurer", img: "/team/treasurer.jpg" },
]
const heads = [
  { name: "Dnyanesh", role: "WEB DEV Head", img: "team/Dnyanesh_web1.jpg" },
  { name: "AATISH", role: "WEB DEV Head", img: "team/AATISH_web2.jpg" },
  { name: "JAYESH", role: "AIML Head", img: "team/JAYESH_AI2.jpg" },
  { name: "ATUL", role: "AIML Head", img: "team/ATUL_AI1.png" },
  { name: "NEIL", role: "Mech Head", img: "team/NEIL_mech1.jpg" },
  { name: "ADITYA", role: "MECH Head", img: "/team/ADITYA_mech2.jpg" },
  { name: "UTKARSH", role: "ROBOTICS Head", img: "/team/UTKARSH_R1.jpg" },
  { name: "JAY", role: "ROBOTICS Head", img: "/team/JAY_R1.jpg" },
  { name: "AMAN", role: "CSF Head", img: "/team/AMAN_CSF1.jpg" },
  { name: "member", role: "CSF Head", img: "/team/" },
  { name: "AARYA", role: "DATABASE Head", img: "/team/AARYA_D1.png" },
  { name: "ABHAY", role: "DATABASE Head", img: "/team/ABHAY_D2.png" },


]

export default function TeamPage() {
  return (
    <>
      <SiteNavbar solidBackground />
      <main className={styles.main}>
        <PageHeader
          title="Meet Our Team"
          subtitle="A diverse group of builders, designers, and organizers powering ISA VIT Pune."
          ctas={false}
        />
        <section className={styles.section} aria-label="Core Team">
          <h2 className={styles.sectionTitle}>Core Team</h2>
          <div className={styles.grid}>
            {coreTeam.map((m, idx) => (
              <motion.article
                key={m.name}
                className={styles.card}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
              >
                <div className={styles.avatarWrap}>
                  <Image
                    src={m.img || "/placeholder.svg"}
                    alt={`${m.name} - ${m.role}`}
                    fill
                    className={styles.avatar}
                    sizes="(min-width: 768px) 250px, 100vw"
                  />
                </div>
                <div className={styles.meta}>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-label="Department Heads">
          <h2 className={styles.sectionTitle}>Heads</h2>
          <div className={styles.gridHeads}>
            {heads.map((m, idx) => (
              <motion.article
                key={m.name}
                className={styles.card}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
              >
                <div className={styles.avatarWrap}>
                  <Image
                    src={m.img || "/placeholder.svg"}
                    alt={`${m.name} - ${m.role}`}
                    fill
                    className={styles.avatar}
                    sizes="(min-width: 768px) 250px, 100vw"
                  />
                </div>
                <div className={styles.meta}>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
