# Backend FastAPI + ROS 2 Humble (Ubuntu 22.04, compatible con JetPack 6 / arm64)
FROM ros:humble-ros-base

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

RUN apt-get update && apt-get install -y --no-install-recommends \
        python3-pip \
        curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY app ./app

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
    CMD curl -fs http://localhost:8000/health || exit 1

# Carga el entorno de ROS 2 antes de lanzar uvicorn (rclpy disponible en el backend)
CMD ["bash", "-c", "source /opt/ros/humble/setup.bash && exec uvicorn app.main:app --host 0.0.0.0 --port 8000"]
