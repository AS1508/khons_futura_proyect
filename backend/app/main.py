from fastapi import FastAPI

app = FastAPI(title="Rover backend")


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}
