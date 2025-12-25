import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="A professional textbook on Physical AI, Robotics, and Embodied Intelligence">

      <main className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Physical AI & Humanoid Robotics
          </h1>

          <p className={styles.subtitle}>
            A modern, spec-driven textbook on embodied intelligence,
            robotics middleware, simulation, and AI-powered humanoid systems.
          </p>

          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to="/intro/overview">
              Start Reading
            </Link>

            <Link
              className={styles.secondaryButton}
              to="/physical-ai/what-is-physical-ai">
              Explore Physical AI
            </Link>
          </div>
        </div>
      </main>

      <section className={styles.sections}>
        <div className={styles.sectionCard}>
          <h3>🧠 Physical AI</h3>
          <p>Understand embodied intelligence and AI systems operating in the real world.</p>
        </div>

        <div className={styles.sectionCard}>
          <h3>🤖 ROS 2</h3>
          <p>Learn how robots communicate using modern middleware and modular systems.</p>
        </div>

        <div className={styles.sectionCard}>
          <h3>🧪 Simulation</h3>
          <p>Explore Gazebo, Unity, and digital twins for safe robotic development.</p>
        </div>

        <div className={styles.sectionCard}>
          <h3>🚀 NVIDIA Isaac</h3>
          <p>Discover AI-powered perception, navigation, and sim-to-real workflows.</p>
        </div>
      </section>
    </Layout>
  );
}
