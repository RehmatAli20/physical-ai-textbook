

from openai import OpenAI
from app.config import settings


client = OpenAI(
    api_key=settings.GEMINI_API_KEY,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

SYSTEM_PROMPT = (
    "You are an AI assistant for a textbook.\n"
    "Answer ONLY from the provided context.\n"
    "If the answer is not in the context, say:\n"
    "'I don't know based on the provided text.'"
)

def generate_answer(context: str, question: str):
    response = client.chat.completions.create(
        model="gemini-2.5-flash",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {
                "role": "user",
                "content": f"Context:\n{context}\n\nQuestion:\n{question}"
            }
        ],
        temperature=0.2
    )

    return response.choices[0].message.content
