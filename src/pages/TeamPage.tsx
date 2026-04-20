import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Star } from 'lucide-react';
import { agents } from '../data/agents';
import { Card, Badge } from '../components/ui';

export default function TeamPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-200">Your AI Team</h1>
        <p className="text-neutral-500 mt-1">8 specialized agents working around the clock for your company.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Card variant="default" padding="lg" hoverable>
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                  style={{ background: `linear-gradient(135deg, ${agent.color}15, ${agent.color}35)` }}
                >
                  {agent.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-200">{agent.name}</h3>
                      <p className="text-sm font-medium" style={{ color: agent.color }}>{agent.title}</p>
                    </div>
                    <Badge
                      variant={agent.status === 'online' ? 'success' : agent.status === 'busy' ? 'warning' : 'primary'}
                      size="sm"
                    >
                      {agent.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">{agent.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {agent.skills.map((skill) => (
                      <Badge key={skill} variant="default" size="sm">{skill}</Badge>
                    ))}
                  </div>

                  {/* Current task */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
                    <Star className="w-3 h-3 text-warning-500" />
                    <span>Currently: {agent.currentTask}</span>
                  </div>

                  {/* Chat button */}
                  <button
                    onClick={() => navigate(`/chat/${agent.id}`)}
                    className="mt-4 flex items-center gap-2 h-10 px-4 text-sm font-medium rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat with {agent.name}
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
