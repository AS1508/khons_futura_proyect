# Simulación del rover: ROS 2 Humble + Gazebo (ros_gz)
FROM ros:humble-ros-base

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
        ros-humble-ros-gz \
        ros-humble-xacro \
        ros-humble-robot-state-publisher \
        ros-humble-joint-state-publisher \
        ros-humble-ros2-control \
        ros-humble-ros2-controllers \
        python3-colcon-common-extensions \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /ws
COPY . /ws/src

RUN . /opt/ros/humble/setup.sh && \
    if [ -n "$(find /ws/src -name package.xml -print -quit)" ]; then \
        colcon build --symlink-install; \
    fi

COPY ros_entrypoint.sh /ros_entrypoint.sh
RUN chmod +x /ros_entrypoint.sh
ENTRYPOINT ["/ros_entrypoint.sh"]
CMD ["bash"]
