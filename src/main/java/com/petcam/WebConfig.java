package com.petcam;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // 프론트엔드 주소만 추가
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 요청 메서드들 허용
                .allowedHeaders("Content-Type", "Accept") // 필수 헤더만 허용
                .allowCredentials(true); // 쿠키나 인증 정보 허용 (필요 시)
    }
}
