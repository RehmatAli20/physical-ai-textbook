# Nodes, Topics, and Services

ROS 2 systems are built using small, independent programs called nodes. Each node
performs a specific task, such as reading sensor data, controlling motors, or making
decisions.

This modular design allows Physical AI systems to be flexible and maintainable.

---

## Nodes

A node is a single executable process that performs one responsibility.

**Examples of nodes in a robot:**
- A camera node that publishes images
- A localization node that estimates position
- A motion control node that sends commands to motors

Nodes do not directly depend on each other. Instead, they communicate using well-defined
communication mechanisms.

---

## Topics

Topics are used for continuous data streaming between nodes.

A node can publish data to a topic, and other nodes can subscribe to that topic.
Publishers and subscribers do not need to know about each other directly.

**Example:**  
A camera node publishes images to a topic called `/camera/image`.
A perception node subscribes to this topic and processes the images to detect objects.

This approach allows data to flow efficiently through the system.

---

## Services

Services are used for request-response communication.

Unlike topics, services are synchronous and are used when a node needs a specific
answer from another node.

**Example:**  
A navigation node may request a service to reset the robot’s position or change
a navigation mode.

---

## Why This Model Fits Physical AI

Physical AI systems require both continuous perception and discrete decision making.
Topics handle continuous sensor data, while services handle specific commands or
queries.

This separation makes ROS 2 suitable for complex embodied intelligence systems.
