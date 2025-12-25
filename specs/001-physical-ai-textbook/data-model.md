# Data Model: Physical AI Textbook

## Entities

### Chapter
-   **ID**: Unique identifier (UUID or sequential)
-   **Title**: String (e.g., "Introduction to Embodied AI")
-   **Slug**: String (URL-friendly identifier)
-   **Content**: Markdown/MDX text, references to media and interactive elements
-   **Concepts Covered**: List of Concept IDs
-   **Case Studies Referenced**: List of Case Study IDs
-   **Interactive Elements Included**: List of Interactive Element IDs
-   **Order**: Integer (position in the textbook flow)
-   **Prerequisites**: List of Chapter IDs or Concept IDs
-   **Last Updated**: Timestamp

### Concept
-   **ID**: Unique identifier (UUID or sequential)
-   **Name**: String (e.g., "Inverse Kinematics", "Reinforcement Learning for Locomotion")
-   **Description**: Short summary (String)
-   **Related Chapters**: List of Chapter IDs
-   **Related Case Studies**: List of Case Study IDs
-   **Keywords**: List of Strings

### Case Study
-   **ID**: Unique identifier (UUID or sequential)
-   **Title**: String (e.g., "Robotic Surgery", "Boston Dynamics' Spot")
-   **Description**: Markdown/MDX text, references to media
-   **Concepts Applied**: List of Concept IDs
-   **Interactive Elements Included**: List of Interactive Element IDs
-   **Difficulty**: Enum (e.g., Beginner, Intermediate, Advanced)

### Interactive Element
-   **ID**: Unique identifier (UUID or sequential)
-   **Type**: Enum (e.g., Code Example, Simulation, Quiz, Diagram)
-   **Title**: String (e.g., "Python Inverse Kinematics Calculator")
-   **Description**: Short explanation (String)
-   **Content**: Code snippet, simulation configuration, quiz questions/answers
-   **Associated Chapter**: Chapter ID
-   **Associated Concept**: Concept ID (optional)
-   **Expected Output/Behavior**: String
-   **Difficulty**: Enum (e.g., Easy, Medium, Hard)

### Student
-   **ID**: Unique identifier (UUID)
-   **Username**: String (for login, if applicable)
-   **Email**: String (unique)
-   **Progress**: Map (Chapter ID -> Status, e.g., "completed", "in_progress", "score")
-   **Quiz Scores**: Map (Interactive Element ID -> Score)
-   **Last Active**: Timestamp

## Relationships

-   **Chapter** has many **Concepts** (through `Concepts Covered`)
-   **Chapter** has many **Case Studies** (through `Case Studies Referenced`)
-   **Chapter** has many **Interactive Elements** (through `Interactive Elements Included`)
-   **Concept** can be covered by many **Chapters**
-   **Case Study** applies many **Concepts**
-   **Interactive Element** is associated with one **Chapter** and optionally one **Concept**
-   **Student** tracks **Progress** across **Chapters** and **Quiz Scores** for **Interactive Elements**

## Validation Rules

-   All IDs MUST be unique.
-   **Chapter.Title** and **Chapter.Slug** MUST be unique.
-   **Concept.Name** MUST be unique.
-   **Student.Email** and **Student.Username** (if applicable) MUST be unique.
-   Content fields (e.g., **Chapter.Content**, **CaseStudy.Description**, **InteractiveElement.Content**) MUST support Markdown/MDX formatting and secure embedding of external resources.
