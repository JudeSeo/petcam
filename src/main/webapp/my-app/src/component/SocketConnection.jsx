import React, { useEffect, useRef, useState } from "react";

const SocketConnection = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // WebSocket 연결
    const ws = new WebSocket("ws://localhost:8080/ws");
    setSocket(ws);

    ws.onmessage = async (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "offer") {
        await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(message));
        const answer = await peerConnectionRef.current.createAnswer();
        await peerConnectionRef.current.setLocalDescription(answer);
        ws.send(JSON.stringify(peerConnectionRef.current.localDescription));
      } else if (message.type === "answer") {
        await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(message));
      } else if (message.type === "candidate") {
        await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(message.candidate));
      }
    };

    // PeerConnection 생성
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });
    peerConnectionRef.current = pc;

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        ws.send(JSON.stringify({ type: "candidate", candidate: event.candidate }));
      }
    };

    pc.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    // 로컬 비디오 스트림 가져오기
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideoRef.current.srcObject = stream;
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));
    });

    return () => ws.close();
  }, []);

  const startCall = async () => {
    const offer = await peerConnectionRef.current.createOffer();
    await peerConnectionRef.current.setLocalDescription(offer);
    socket.send(JSON.stringify(offer));
  };

  return (
      <div>
        <h1>WebRTC Video Chat</h1>
        <video ref={localVideoRef} autoPlay muted style={{ width: "45%", border: "1px solid black" }} />
        <video ref={remoteVideoRef} autoPlay style={{ width: "45%", border: "1px solid black" }} />
        <button onClick={startCall}>Start Call</button>
      </div>
  );
};

export default SocketConnection;
