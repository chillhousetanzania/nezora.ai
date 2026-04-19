import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Paperclip, MoreVertical, Phone, Video, ArrowLeft } from 'lucide-react';
import { agents, getAgentById } from '../data/agents';
import { getResponse, MockMessage } from '../data/mockResponses';

export default function ChatPage() {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const [selectedAgent, setSelectedAgent] = useState(agentId || agents[0].id);
  const [messages, setMessages] = useState<Record<string, MockMessage[]>>({});
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const agent = getAgentById(selectedAgent);

  // Initialize messages for agent if not exists
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

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: MockMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input.trim(),
      time: 'Just now',
    };

    setMessages(prev => ({
      ...prev,
      [selectedAgent]: [...(prev[selectedAgent] || []), userMsg]
    }));
    setInput('');
    setIsTyping(true);

    // Simulate agent thinking
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const selectAgent = (id: string) => {
    setSelectedAgent(id);
    navigate(`/chat/${id}`, { replace: true });
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const currentMessages = messages[selectedAgent] || [];

  return (
    <div className="flex h-[calc(100vh-7rem)] gap-4 max-w-7xl mx-auto">
      {/* Agent List */}
      <div className="w-72 shrink-0 glass rounded-2xl overflow-hidden flex flex-col hidden md:flex">
        <div className="p-4 border-b border-white/5">
          <h2 className="font-heading font-semibold text-sm">Conversations</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {agents.map((a) => {
            const lastMsg = messages[a.id]?.[messages[a.id].length - 1];
            return (
              <button
                key={a.id}
                onClick={() => selectAgent(a.id)}
                className={`w-full p-3 text-left flex items-center gap-3 transition-all duration-200 ${
                  selectedAgent === a.id
                    ? 'bg-neon-purple/10 border-l-2 border-neon-purple'
                    : 'hover:bg-white/5 border-l-2 border-transparent'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ backgroundColor: `${a.color}20` }}
                >
                  {a.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{a.name}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      a.status === 'online' ? 'bg-neon-green' :
                      a.status === 'busy' ? 'bg-yellow-400' : 'bg-neon-blue'
                    }`} />
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {lastMsg?.text?.substring(0, 40) || a.role}
                    {lastMsg?.text && lastMsg.text.length > 40 ? '...' : ''}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass rounded-2xl flex flex-col overflow-hidden">
        {/* Agent Header */}
        {agent && (
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/chat')} className="md:hidden p-1 hover:bg-white/5 rounded-lg">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ backgroundColor: `${agent.color}20` }}
              >
                {agent.emoji}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm">{agent.name}</h3>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    agent.status === 'online' ? 'bg-neon-green' : 'bg-yellow-400'
                  }`} />
                  <span className="text-xs text-slate-400">{agent.title}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
                <Video className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence initial={false}>
            {currentMessages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[75%] ${msg.sender === 'user' ? 'order-1' : ''}`}>
                  {msg.sender === 'agent' && agent && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium" style={{ color: agent.color }}>{agent.name}</span>
                      <span className="text-[10px] text-slate-500">{msg.time}</span>
                    </div>
                  )}
                  <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-neon-purple to-neon-purple/80 text-white rounded-br-md'
                      : 'bg-white/5 text-slate-200 rounded-bl-md border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <p className="text-[10px] text-slate-500 text-right mt-1">{msg.time}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && agent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <div className="bg-white/5 rounded-2xl rounded-bl-md px-4 py-3 border border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">{agent.name} is thinking</span>
                  <div className="flex gap-1">
                    <div className="typing-dot w-1.5 h-1.5 rounded-full bg-neon-purple" />
                    <div className="typing-dot w-1.5 h-1.5 rounded-full bg-neon-purple" />
                    <div className="typing-dot w-1.5 h-1.5 rounded-full bg-neon-purple" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={`Message ${agent?.name || 'agent'}...`}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-purple/50 transition-all"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="p-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue hover:shadow-glow-purple disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
