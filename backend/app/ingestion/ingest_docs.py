# Docs ingestion
import os
import uuid
from app.services.embeddings import embed_text
from app.services.qdrant import init_collection, upsert_vector
from app.utils.text_splitter import split_text

DOCS_PATH = "../website/docs"  # adjust if needed

def ingest():
    init_collection()

    for root, _, files in os.walk(DOCS_PATH):
        for file in files:
            if file.endswith(".md"):
                path = os.path.join(root, file)
                with open(path, "r", encoding="utf-8") as f:
                    text = f.read()

                chunks = split_text(text)

                for chunk in chunks:
                    vector = embed_text(chunk)
                    upsert_vector(
                        id=str(uuid.uuid4()),
                        vector=vector,
                        payload={"text": chunk}
                    )

    print("✅ Book ingestion completed")

if __name__ == "__main__":
    ingest()





