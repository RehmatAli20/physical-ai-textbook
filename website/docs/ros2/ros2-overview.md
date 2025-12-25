# ROS 2 Overview

ROS 2 (Robot Operating System 2) is a middleware framework used to build and manage
robotic systems. It does not control robots by itself, but instead provides the
communication infrastructure that allows different software components of a robot
to work together.

In a Physical AI system, intelligence is not located in a single program. Instead,
multiple independent components handle sensing, decision making, and actuation.
ROS 2 acts as the nervous system that connects all these components.

---

## Why ROS 2 Is Important for Physical AI

Physical AI systems operate in real environments where timing, reliability, and
safety matter. ROS 2 is designed to handle these constraints by supporting real-time
communication, distributed systems, and fault tolerance.

**Example:**  
A humanoid robot may have:
- A camera system for vision
- A navigation system for movement
- An AI model for decision making
- Motor controllers for joints

ROS 2 allows all these systems to communicate without being tightly coupled.

---

## ROS 2 vs Traditional Software Systems

Traditional software applications usually run as a single program. If one part fails,
the entire application may crash. In contrast, ROS 2 systems are distributed.

Each component runs independently and communicates through defined interfaces.
If one component fails, others can continue operating or recover gracefully.

This design is essential for robots operating in unpredictable physical environments.

---

## ROS 2 as a Foundation for Humanoid Robotics

Humanoid robots are complex systems with many sensors and actuators. ROS 2 provides
a scalable architecture that allows developers to add, remove, or upgrade components
without redesigning the entire system.

For this reason, ROS 2 is widely used in research, industry, and autonomous robotics
applications.
