import React, {useState} from "react";
import axios from "./axiosInstance";

const CameraController = () => {
    const [cameraStatus, setCameraStatus] = useState(""); // 카메라 상태 저장
    const [deviceId, setDeviceId] = useState(""); // 카메라 상태 저장

    const connectDevide = async () => {
        const response = ((await axios.post("/PetCam/connectPhone", {deviceId})).data);
        if (!response) return setCameraStatus("기기 연결 실패")
    }

    const startCamera = async () => {
        const response = ((await axios.post("/PetCam/startCam", {cameraType: "back"})).data);
        if (!response) return setCameraStatus("카메라 실행 실패")
    };


    const stopCamera = async () => {
        const response = ((await axios.post("/PetCam/stopCam", {deviceId})).data);
        if (!response) return setCameraStatus("카메라 종료 실패")
    };

    return (
        <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}}>
            <h1>Camera Controller</h1>
            <input value={deviceId} onChange={e => setDeviceId(e.target.value)}/>
            <button
                onClick={connectDevide}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >Connect Devide
            </button>
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
            >Start Camera
            </button>
            <button
                onClick={stopCamera}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >Stop Camera
            </button>
            <div style={{marginTop: "20px"}}>
                <strong>Status:</strong> {cameraStatus ? cameraStatus : "No action taken yet"}
            </div>
        </div>
    );
};

export default CameraController;
