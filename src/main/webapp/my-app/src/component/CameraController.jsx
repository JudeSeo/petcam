import React, {useState} from "react";
import axios from "./axiosInstance";

const CameraController = () => {
    const [cameraStatus, setCameraStatus] = useState(null); // 카메라 상태 저장

    const startCamera = async () => {
        const response = ((await axios.post("/PetCam/startCam", {cameraType: "front"}, {
            headers: {
                'Content-Type': 'application/json', // 본문 데이터 형식 지정
            }
        })).data);

        try {
            // 응답 데이터에서 필요한 정보 추출
            setCameraStatus(response.data.message || "Camera started successfully");
        } catch (error) {
            console.error("Error starting camera:", error);
            setCameraStatus("Error occurred while starting camera");
        }
    };

    return (
        <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}}>
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
            <div style={{marginTop: "20px"}}>
                <strong>Status:</strong> {cameraStatus ? cameraStatus : "No action taken yet"}
            </div>
        </div>
    );
};

export default CameraController;
