from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance
from app.config import settings


client = QdrantClient(
    url=settings.QDRANT_URL,
    api_key=settings.QDRANT_API_KEY or None
)

def init_collection():
    if not client.collection_exists(settings.COLLECTION_NAME):
        client.create_collection(
            collection_name=settings.COLLECTION_NAME,
            vectors_config=VectorParams(
                size=768,
                distance=Distance.COSINE
            )
        )

def upsert_vector(id: str, vector: list, payload: dict):
    client.upsert(
        collection_name=settings.COLLECTION_NAME,
        points=[{
            "id": id,
            "vector": vector,
            "payload": payload
        }]
    )

# ✅ NEW & CORRECT SEARCH METHOD
def search_vectors(query_vector: list, limit: int = 5):
    result = client.query_points(
        collection_name=settings.COLLECTION_NAME,
        prefetch=[],
        query=query_vector,
        limit=limit
    )
    return [point.payload["text"] for point in result.points]
