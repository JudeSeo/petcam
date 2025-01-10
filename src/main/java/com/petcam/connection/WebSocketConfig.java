package com.petcam.connection;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    private final SignalingServerHandler signalingServerHandler;

    public WebSocketConfig(SignalingServerHandler signalingServerHandler) {
        this.signalingServerHandler = signalingServerHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(signalingServerHandler, "/ws").setAllowedOrigins("*");
    }
}
