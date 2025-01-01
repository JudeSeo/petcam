package com.petcam.sevice;

public class PetCamDto {
    private String deviceId;       // 원격 핸드폰을 식별하기 위한 고유 ID
    private String cameraType;     // 전면("front") 또는 후면("back") 카메라
    private int resolutionWidth;   // 요청 해상도 가로 크기
    private int resolutionHeight;  // 요청 해상도 세로 크기
    private boolean enableAudio;   // 오디오 스트림 활성화 여부
    private int audioBitrate; // 마이크 품질 조정

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public String getCameraType() {
        return cameraType;
    }

    public void setCameraType(String cameraType) {
        this.cameraType = cameraType;
    }

    public int getResolutionWidth() {
        return resolutionWidth;
    }

    public void setResolutionWidth(int resolutionWidth) {
        this.resolutionWidth = resolutionWidth;
    }

    public int getResolutionHeight() {
        return resolutionHeight;
    }

    public void setResolutionHeight(int resolutionHeight) {
        this.resolutionHeight = resolutionHeight;
    }

    public boolean isEnableAudio() {
        return enableAudio;
    }

    public void setEnableAudio(boolean enableAudio) {
        this.enableAudio = enableAudio;
    }

    public int getAudioBitrate() {
        return audioBitrate;
    }

    public void setAudioBitrate(int audioBitrate) {
        this.audioBitrate = audioBitrate;
    }
}
