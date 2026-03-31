"use client";
import React from "react";
import DojoHero from "@/components/Dojo/DojoHero";
import DojoInfo from "@/components/Dojo/DojoInfo";
import DojoExercises from "@/components/Dojo/DojoExercises";
import DojoCta from "@/components/Dojo/DojoCta";
import styles from "@/components/Dojo/Dojo.module.css";

export default function DojoPage() {
  return (
    <div className={styles.dojoPage}>
      <DojoHero />
      <DojoInfo />
      <DojoExercises />
      <DojoCta />
    </div>
  );
}
