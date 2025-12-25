from google import genai
from app.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)

def embed_text(text: str):
    result = client.models.embed_content(
        model="text-embedding-004",
        contents=text
    )
    return result.embeddings[0].values



# # def embed_text(text: str):
# #     # Gemini embedding quota exhausted
# #     # Return dummy vector to avoid API call
# #     return [0.0] * 768





