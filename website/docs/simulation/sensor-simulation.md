# Sensor Simulation

Sensors allow robots to perceive the world. In simulation, sensor behavior must
be modeled accurately so AI systems can learn effectively.

Common simulated sensors include:
- Cameras
- LiDAR
- IMUs
- Depth sensors

---

## Why Sensor Simulation Matters

If sensors are simulated unrealistically, AI models trained in simulation may
fail in the real world.

**Example:**  
A perfectly clean camera image in simulation does not reflect real-world noise.
Adding noise helps models generalize better.

---

## Camera Simulation

Simulated cameras provide visual input such as:
- RGB images
- Depth maps

These are used for tasks like object detection and navigation.

---

## LiDAR Simulation

LiDAR sensors measure distance by emitting laser pulses. In simulation, they are
used for:
- Mapping environments
- Obstacle detection
- Localization

**Example:**  
A robot navigating a corridor uses simulated LiDAR data to avoid walls.

---

## IMU Simulation

IMUs measure acceleration and rotation. They are critical for balance and motion
control.

**Example:**  
A humanoid robot uses IMU data to maintain balance while walking.

---

## Adding Realism to Sensor Simulation

To reduce the sim-to-real gap, simulations introduce:
- Noise
- Delays
- Incomplete data

This prepares AI systems for real-world uncertainty.
