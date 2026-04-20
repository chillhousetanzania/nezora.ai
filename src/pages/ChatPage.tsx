import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreVertical, Phone, Video, ArrowLeft } from 'lucide-react';
import { agents, getAgentById } from '../data/agents';
import { getResponse, MockMessage } from '../data/mockResponses';

// Import our new Chat components
import { MessageBubble } from '../components/chat/MessageBubble';
import { TypingIndicator } from '../components/chat/TypingIndicator';
import { AgentListSidebar } from '../components/chat/AgentListSidebar';
import { ChatInputArea } from '../components/chat/ChatInputArea';

export default function ChatPage() {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const [selectedAgent, setSelectedAgent] = useState(agentId || agents[0].id);
  const [messages, setMessages] = useState<Record<string, MockMessage[]>>({});
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const agent = getAgentById(selectedAgent);

  useEffect(() => {
    if (!messages[selectedAgent]) {
      const agentData = getAgentById(selectedAgent);
      setMessages(prev => ({
        ...prev,
        [selectedAgent]: [{
          id: '1',
          sender: 'agent',
          text: agentData?.id === 'chief'
            ? "Welcome! I'm Chief, your CEO. I've been reviewing our strategic priorities and the team is fully assembled. What would you like to focus on first?"
            : agentData?.id === 'maven'
            ? "Hey! 📊 I've been diving into market research for your industry. Got some exciting insights about trending content strategies — want to hear them?"
            : agentData?.id === 'canvas'
            ? "Hi there! 🎨 I've been working on brand visual concepts. I have 3 different style directions ready — minimal, bold, and playful. Which one speaks to you?"
            : agentData?.id === 'pulse'
            ? "Hey! 📱 I've mapped out the optimal posting schedule for your target audience. Peak engagement windows are looking promising!"
            : agentData?.id === 'ledger'
            ? "Hello! I've prepared an initial financial framework for your venture. Startup costs, projections, and funding strategies — ready when you are."
            : agentData?.id === 'forge'
            ? "Hey! 💻 I've been evaluating tech stack options for the MVP. Want me to walk you through the pros and cons of each approach?"
            : agentData?.id === 'atlas'
            ? "Hi! I've set up our project management framework. Tasks are organized, workflows are mapped, and we're ready to execute efficiently."
            : "Hey there! 🤝 I've been researching potential customers and partners. Found some promising leads — let's discuss our outreach strategy!",
          time: 'Just now'
        }]
      }));
    }
  }, [selectedAgent]);

  useEffect(() => {
    if (agentId && agentId !== selectedAgent) {
      setSelectedAgent(agentId);
    }
  }, [agentId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedAgent, isTyping]);

  const sendMessage = async (inputText: string) => {
    if (!inputText.trim()) return;

    const userMsg: MockMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText.trim(),
      time: 'Just now',
    };

    setMessages(prev => ({
      ...prev,
      [selectedAgent]: [...(prev[selectedAgent] || []), userMsg]
    }));
    setIsTyping(true);

    const thinkTime = 1200 + Math.random() * 1500;
    await new Promise(resolve => setTimeout(resolve, thinkTime));

    const agentMsg: MockMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'agent',
      text: getResponse(selectedAgent),
      time: 'Just now',
    };

    setIsTyping(false);
    setMessages(prev => ({
      ...prev,
      [selectedAgent]: [...(prev[selectedAgent] || []), agentMsg]
    }));
  };

  const selectAgent = (id: string) => {
    setSelectedAgent(id);
    navigate(`/chat/${id}`, { replace: true });
  };

  const currentMessages = messages[selectedAgent] || [];

  return (
    <div className="flex h-[calc(100vh-7rem)] max-w-7xl mx-auto rounded-2xl shadow-soft-md border border-neutral-200/10 dark:border-neutral-700/10 overflow-hidden bg-white dark:bg-neutral-800">
      {/* ── Agent List Sidebar ────────────────────── */}
      <AgentListSidebar
        agents={agents as any}
        selectedAgentId={selectedAgent}
        onSelectAgent={selectAgent}
        className="hidden md:flex"
      />

      {/* ── Chat Area ────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-neutral-800 relative">
        {/* Agent Header */}
        <AnimatePresence mode="popLayout">
          {agent && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 border-b border-neutral-200/50 dark:border-neutral-700/50 flex items-center justify-between bg-white/80 dark:bg-neutral-800/80 backdrop-blur z-10"
            >
              <div className="flex items-center gap-3">
                <button onClick={() => navigate('/chat')} className="md:hidden p-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5 text-neutral-500" />
                </button>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${agent.color}15, ${agent.color}30)` }}
                >
                  {agent.emoji}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm text-neutral-800 dark:text-neutral-100">{agent.name}</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      agent.status === 'online' ? 'bg-success-500' : 'bg-warning-500'
                    }`} />
                    <span className="text-xs text-neutral-500">{agent.title} • {agent.role}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-neutral-400 hover:text-primary-500">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-neutral-400 hover:text-primary-500">
                  <Video className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-neutral-400 hover:text-primary-500">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <AnimatePresence initial={false}>
            {currentMessages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <MessageBubble
                  content={msg.text}
                  sender={msg.sender as 'user' | 'agent'}
                  timestamp={msg.time}
                  avatar={msg.sender === 'agent' && agent ? agent.emoji : undefined}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && agent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <TypingIndicator
                agentName={agent.name}
                avatar={agent.emoji}
              />
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <ChatInputArea
          onSendMessage={sendMessage}
          disabled={isTyping}
        />
      </div>
    </div>
  );
}
