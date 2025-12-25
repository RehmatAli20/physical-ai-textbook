# Introduction to URDF

URDF (Unified Robot Description Format) is a file format used to describe the physical
structure of a robot. It defines how a robot looks, how its parts are connected, and
how those parts move.

In Physical AI, understanding the robot’s body is just as important as understanding
the environment.

---

## What URDF Describes

A URDF file describes:
- Links (rigid parts of the robot)
- Joints (connections between links)
- Joint limits (how far a joint can move)
- Physical properties such as mass and inertia

**Example:**  
A humanoid robot arm may consist of:
- Upper arm link
- Lower arm link
- Shoulder and elbow joints

URDF defines how these parts are connected and how they move relative to each other.

---

## Why URDF Matters for AI Control

AI models that control robots must understand the robot’s physical constraints.
URDF provides the structural information needed for motion planning, simulation,
and control.

Without an accurate URDF, a robot may attempt movements that are physically impossible
or unsafe.

---

## URDF in Simulation and Real Robots

URDF files are used both in simulation environments and on real robots. This allows
the same robot description to be shared across development stages.

**Example:**  
A robot can be simulated in Gazebo using a URDF file, and the same file can later be
used to control the real robot.

This consistency is essential for sim-to-real workflows in Physical AI systems.
