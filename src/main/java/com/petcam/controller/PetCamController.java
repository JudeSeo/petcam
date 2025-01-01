package com.petcam.controller;

import com.petcam.sevice.PetCamDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("PetCam")
public class PetCamController {
    @RequestMapping("/startCam")
    public ResponseEntity<String> startCamera(@RequestBody PetCamDto dto) {
        // 원격 핸드폰에 명령 전송 로직 추가
        return ResponseEntity.ok("Camera started");
    }

    @RequestMapping("/stopCam")
    public ResponseEntity<String> stopCamera() {
        // 카메라 중지 명령 처리
        return ResponseEntity.ok("Camera stopped");
    }
}
