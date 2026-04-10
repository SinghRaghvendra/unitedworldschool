"use client";

import React, { useEffect, useRef, useState } from 'react';
import StreamingAvatar, { AvatarQuality, StreamingEvents, TaskType } from '@heygen/streaming-avatar';

export default function InteractiveAvatar() {
  const [avatar, setAvatar] = useState<StreamingAvatar | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [text, setText] = useState("");
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'agent', message: string }[]>([]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<HTMLVideoElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize Web Speech API for voice recognition if available
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setText(transcript);
        // Ensure state is updated before sending
        setTimeout(() => {
          handleSendMessage(transcript);
        }, 100);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [avatar]);

  // Handle stream assignment to video tag
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current?.play().catch(console.error);
      };
    }
  }, [stream]);

  const startAvatarSession = async () => {
    setIsLoadingSession(true);
    try {
      // 1. Fetch token
      const res = await fetch('/api/heygen-token', { method: 'POST' });
      const { token, error } = await res.json();
      
      if (error || !token) {
        throw new Error(error || "Failed to retrieve HeyGen Token");
      }

      // 2. Initialize Avatar
      const newAvatar = new StreamingAvatar({ token });
      
      // 3. Setup event listeners
      newAvatar.on(StreamingEvents.STREAM_READY, (e: any) => {
        console.log("Stream Ready", e);
        setStream(e.detail);
      });

      newAvatar.on(StreamingEvents.STREAM_DISCONNECTED, () => {
        console.log("Stream Disconnected");
        setStream(null);
        setAvatar(null);
      });

      newAvatar.on(StreamingEvents.AVATAR_START_TALKING, () => {
        setIsSpeaking(true);
      });

      newAvatar.on(StreamingEvents.AVATAR_STOP_TALKING, () => {
        setIsSpeaking(false);
      });

      // 4. Create Session
      await newAvatar.createStartAvatar({
        quality: AvatarQuality.Medium,
        avatarName: 'josh_lite3_20230714', // Default highly functional interactive avatar ID
        voice: {
            rate: 1.1, // slightly faster to seem more natural
            emotion: 'Excited' as any
        }
      });

      setAvatar(newAvatar);

      // Initial Greeting
      const greeting = "Hello, I am the United World School AI Teacher. How can I help you today?";
      setChatHistory([{ role: 'agent', message: greeting }]);
      await newAvatar.speak({
        text: greeting,
        taskType: TaskType.REPEAT,
      });

    } catch (e) {
      console.error(e);
      alert("Error starting avatar session. Please check console.");
    } finally {
      setIsLoadingSession(false);
    }
  };

  const endAvatarSession = async () => {
    if (avatar) {
      await avatar.stopAvatar();
      setAvatar(null);
      setStream(null);
    }
  };

  const handleSendMessage = async (overrideText?: string) => {
    const userMessage = overrideText || text;
    if (!userMessage.trim() || !avatar) return;

    // Add to UI history
    setChatHistory(prev => [...prev, { role: 'user', message: userMessage }]);
    setText("");

    try {
      // 1. Fetch response from Gemini API Route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      
      const { reply } = await response.json();

      setChatHistory(prev => [...prev, { role: 'agent', message: reply }]);

      // 2. Transmit to HeyGen to speak
      await avatar.speak({
        text: reply,
        taskType: TaskType.REPEAT,
      });

    } catch (e) {
      console.error("Error sending message:", e);
    }
  };

  const toggleMic = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-[#E2E8F0] shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row h-[600px]">
      
      {/* Video Container */}
      <div className="md:w-1/2 bg-[#0A2540] relative flex items-center justify-center overflow-hidden">
        {stream ? (
          <video 
            ref={videoRef}
            className="w-full h-full object-cover scale-105"
            autoPlay
            playsInline
          />
        ) : (
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <p className="text-white text-lg font-bold mb-4">Start the AI Session to connect with your Global Teacher.</p>
            {isLoadingSession ? (
              <button disabled className="px-6 py-3 bg-[#1E3A8A] text-white rounded-full font-bold opacity-70 cursor-not-allowed flex items-center justify-center gap-2 mx-auto">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Connecting...
              </button>
            ) : (
              <button onClick={startAvatarSession} className="px-6 py-3 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full font-bold shadow-lg transition-transform hover:scale-105">
                Connect AI Teacher
              </button>
            )}
          </div>
        )}

        {/* Live Audio Indicator overlay */}
        {isSpeaking && (
           <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
             <div className="flex gap-1 items-end h-3">
                <div className="w-1 h-2 bg-green-400 animate-bounce"></div>
                <div className="w-1 h-3 bg-green-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1.5 bg-green-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
             </div>
             <span className="text-white text-xs font-bold">Speaking</span>
           </div>
        )}

      </div>

      {/* Chat / Interaction Area */}
      <div className="md:w-1/2 flex flex-col bg-[#F8F9FA] h-full relative">
        {/* Header */}
        <div className="p-4 border-b border-[#E2E8F0] bg-white flex justify-between items-center z-10 shadow-sm">
          <div>
            <h3 className="font-bold text-[#0A2540]">Interactive AI Session</h3>
            <p className="text-xs text-[#4A5568] flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${stream ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></span>
              {stream ? 'Secure Connection Active' : 'Offline'}
            </p>
          </div>
          {stream && (
            <button onClick={endAvatarSession} className="text-xs text-[#D32F2F] hover:underline font-bold px-3 py-1.5 bg-red-50 rounded-full">
              End Session
            </button>
          )}
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
          {chatHistory.length === 0 && (
             <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-400">
               <svg className="w-12 h-12 mb-3 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z"/></svg>
               <p className="text-sm">Initiate the session to begin talking.</p>
               <p className="text-xs mt-2">You can type your answers or speak directly.</p>
             </div>
          )}
          {chatHistory.map((msg, idx) => (
             <div key={idx} className={`max-w-[85%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-[#0A2540] text-white self-end rounded-tr-sm' : 'bg-white border border-[#E2E8F0] text-gray-800 self-start rounded-tl-sm shadow-sm'}`}>
                <p className="text-sm">{msg.message}</p>
             </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-[#E2E8F0] shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          <div className="flex gap-2">
            
            <button 
                onClick={toggleMic}
                disabled={!stream}
                className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full transition-all border-2 ${!stream ? 'bg-gray-100 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed' : isListening ? 'bg-red-50 border-[#D32F2F] text-[#D32F2F] shadow-[0_0_15px_rgba(211,47,47,0.3)] animate-pulse' : 'bg-gray-50 border-[#CBD5E1] text-[#4A5568] hover:border-[#1E3A8A] hover:bg-gray-100'}`}
                title="Voice Input"
            >
              {isListening ? (
                 <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
              ) : (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              )}
            </button>

            <input 
              type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              disabled={!stream}
              placeholder={!stream ? "Connect to start chatting..." : isListening ? "Listening..." : "Type your message..."}
              className="flex-1 bg-[#F1F5F9] border focus:border-transparent border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A8A] rounded-2xl px-4 py-2 outline-none text-[#0A2540] disabled:opacity-50"
            />
            
            <button 
              onClick={() => handleSendMessage()}
              disabled={!stream || !text.trim()}
              className="w-12 h-12 flex-shrink-0 bg-[#0A2540] hover:bg-[#1E3A8A] border-2 border-transparent disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center rounded-full transition-colors"
            >
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
