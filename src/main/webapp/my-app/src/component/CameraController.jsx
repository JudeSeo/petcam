import React, { useState } from "react";

const CameraController = () => {
    const [cameraStatus, setCameraStatus] = useState(null); // 카메라 상태 저장

    const startCamera = async () => {
        try {
            const response = await fetch("/api/start-camera", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cameraType: "front" }),
            });

            if (response.ok) {
                const data = await response.json();
                setCameraStatus(data); // 서버의 응답을 상태로 저장
            } else {
                setCameraStatus("Failed to start camera");
            }
        } catch (error) {
            console.error("Error starting camera:", error);
            setCameraStatus("Error occurred while starting camera");
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Camera Controller</h1>
            <button
                onClick={startCamera}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Start Camera
            </button>
            <div style={{ marginTop: "20px" }}>
                <strong>Status:</strong>{" "}
                {cameraStatus ? cameraStatus : "No action taken yet"}
            </div>
        </div>
    );
};

export default CameraController;
