package com.petcam.controller;

import com.petcam.sevice.PetCamDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/PetCam")
public class PetCamController {

    @RequestMapping(value = "/connectPhone", method = RequestMethod.POST)
    public ResponseEntity<Boolean> connectPhone(@RequestBody PetCamDto dto) {
        // 원격 핸드폰 연결
        try {
            dto.getDeviceId(); // 사용
            // 집에 있는 핸드폰과 연결
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
    }

    @RequestMapping(value = "/startCam", method = RequestMethod.POST)
    public ResponseEntity<Boolean> startCamera(@RequestBody PetCamDto dto) {
        // 원격 핸드폰에 명령 전송 로직 추가
        try {
            if (dto.getCameraType().equals("back")) {
                // 후면 카메라를 실행
            } else {
                // 전면 카메라를 실행
            }
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
    }

    @RequestMapping(value = "/controlAudio", method = RequestMethod.POST)
    public ResponseEntity<Boolean> controlAudio(@RequestBody PetCamDto dto) {
        // 원격 핸드폰에 명령 전송 로직 추가
        try {
            if (dto.isEnableAudio()) {
                // 오디오 실행
            } else {
                // 오디오 종료
            }
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
    }

    @RequestMapping(value = "/stopCam", method = RequestMethod.POST)
    public ResponseEntity<Boolean> stopCamera(@RequestBody PetCamDto dto) {
        // 원격 핸드폰에 명령 전송 로직 추가
        try {
            // 카메라 종료
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(true);
    }
}
