# Voice to Action

Voice-to-action systems allow robots to receive spoken commands and convert them
into physical behavior. This makes human–robot interaction more natural and intuitive.

Instead of pressing buttons or writing code, users can simply speak to the robot.

---

## How Voice Commands Work

A typical voice-to-action pipeline includes:

1. **Speech Recognition** – converting spoken words into text
2. **Language Understanding** – interpreting the meaning of the text
3. **Action Planning** – deciding what actions to perform
4. **Execution** – controlling motors and actuators

Each step plays a critical role in accurate robot behavior.

---

## Example Voice Command

Command:
> “Move forward and stop near the table.”

What the robot does internally:
- Converts speech to text
- Identifies movement intent
- Uses vision to detect the table
- Moves until it reaches a safe distance

---

## Simple Conceptual Example (Python-style)

This example illustrates how a voice command might be processed conceptually:

```python
command = "move to the table"

if "table" in command:
    target = "table"
    action = "move"
