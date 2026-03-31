"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Dojo.module.css";

const exercises = [
  {
    name: "Run Your First Build",
    action: "Click 'Run' on Project Alpha",
    observe: "Watch real-time logs stream in the Shell view and track duration analytics."
  },
  {
    name: "Modify a Trigger",
    action: "Edit the 'Weekly' schedule",
    observe: "See how the upcoming build timeline updates instantly in the dashboard."
  },
  {
    name: "Simulate Runner Failure",
    action: "Disconnect an Agent",
    observe: "Observe how the built-in health monitoring flags capacity issues immediately."
  }
];

export default function DojoExercises() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title} style={{ fontSize: '32px', textAlign: 'center' }}>Suggested Exercises</h2>
      </motion.div>

      <div className={styles.tableContainer}>
        <table className={styles.exerciseTable}>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>What You Do</th>
              <th>What To Observe</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <td className={styles.exerciseName}>{ex.name}</td>
                <td>
                  <span className={styles.exerciseStep}>{ex.action}</span>
                </td>
                <td className={styles.exerciseObserve}>{ex.observe}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
