
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.chat import router as chat_router


app = FastAPI(
    title="Physical AI RAG Backend",
    version="1.0.0"
)

# ✅ CORS FIX (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # for hackathon/demo
    allow_credentials=True,
    allow_methods=["*"],   # OPTIONS, POST, GET
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Backend running successfully"}

app.include_router(chat_router, prefix="/api")
