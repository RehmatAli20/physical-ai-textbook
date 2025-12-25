from fastapi import APIRouter
from app.services.embeddings import embed_text
from app.services.qdrant import search_vectors
from app.services.gemini_llm import generate_answer

router = APIRouter()

@router.post("/ask")
def ask(payload: dict):
    question = payload.get("question")

    query_vector = embed_text(question)
    contexts = search_vectors(query_vector)

    combined_context = "\n\n".join(contexts)

    answer = generate_answer(
        context=combined_context,
        question=question
    )

    return {
        "answer": answer
    }
