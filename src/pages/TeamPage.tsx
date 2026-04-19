import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Star } from 'lucide-react';
import { agents } from '../data/agents';

export default function TeamPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold">Your AI Team</h1>
        <p className="text-slate-400 mt-1">8 specialized agents working around the clock for your company.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ backgroundColor: `${agent.color}20`, boxShadow: `0 0 20px ${agent.color}20` }}
              >
                {agent.emoji}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{agent.name}</h3>
                    <p className="text-sm" style={{ color: agent.color }}>{agent.title}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      agent.status === 'online' ? 'bg-neon-green' :
                      agent.status === 'busy' ? 'bg-yellow-400' : 'bg-neon-blue animate-pulse'
                    }`} />
                    <span className="text-xs text-slate-400 capitalize">{agent.status}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{agent.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {agent.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/5 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Current task */}
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <Star className="w-3 h-3" />
                  <span>Currently: {agent.currentTask}</span>
                </div>

                {/* Chat button */}
                <button
                  onClick={() => navigate(`/chat/${agent.id}`)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white/5 hover:bg-neon-purple/20 rounded-xl transition-all duration-200 group-hover:bg-neon-purple/10"
                  style={{ color: agent.color }}
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat with {agent.name}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
