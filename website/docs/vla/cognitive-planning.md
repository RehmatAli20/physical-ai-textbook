
---

# Cognitive Planning

Cognitive planning is the ability of a robot to decide **what to do next** based on goals,
environmental conditions, and available actions.

Rather than following a fixed script, the robot reasons about the best sequence of
actions to achieve a goal.

---

## What Is Planning in Robotics?

Planning involves:
- Understanding the goal
- Evaluating possible actions
- Choosing the safest and most efficient path

**Example Goal:**  
“Clean the room.”

This is not a single action but a sequence of tasks such as moving, detecting objects,
and interacting with them.

---

## Planning with Language Models

Modern robots can use language models to convert high-level instructions into action
sequences.

**Example:**
> “Pick up the bottle and place it on the table.”

Possible plan:
1. Locate bottle
2. Move toward bottle
3. Grasp bottle
4. Locate table
5. Move to table
6. Place bottle

---

## Conceptual Planning Example

```python
goal = "place bottle on table"

steps = [
    "find bottle",
    "move to bottle",
    "grasp bottle",
    "find table",
    "move to table",
    "release bottle"
]
