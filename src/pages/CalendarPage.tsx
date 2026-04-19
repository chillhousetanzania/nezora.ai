import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Eye, Edit3, Trash2 } from 'lucide-react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

interface ContentItem {
  id: string;
  title: string;
  platform: string;
  type: string;
  status: 'draft' | 'scheduled' | 'published' | 'review';
  agent: string;
  color: string;
}

const mockContent: Record<number, ContentItem[]> = {
  2: [
    { id: '1', title: 'Brand intro carousel', platform: '📸 Instagram', type: 'Carousel', status: 'scheduled', agent: 'Canvas', color: '#ec4899' },
  ],
  5: [
    { id: '2', title: 'Industry insights thread', platform: '🐦 Twitter', type: 'Thread', status: 'scheduled', agent: 'Maven', color: '#06b6d4' },
  ],
  8: [
    { id: '3', title: 'Behind-the-scenes reel', platform: '📸 Instagram', type: 'Reel', status: 'draft', agent: 'Canvas', color: '#ec4899' },
    { id: '4', title: 'Weekly tips post', platform: '💼 LinkedIn', type: 'Post', status: 'review', agent: 'Maven', color: '#06b6d4' },
  ],
  12: [
    { id: '5', title: 'Product teaser video', platform: '📸 Instagram', type: 'Reel', status: 'scheduled', agent: 'Canvas', color: '#ec4899' },
  ],
  15: [
    { id: '6', title: 'Customer story post', platform: '🐦 Twitter', type: 'Post', status: 'draft', agent: 'Pulse', color: '#f59e0b' },
    { id: '7', title: 'Blog announcement', platform: '💼 LinkedIn', type: 'Article', status: 'scheduled', agent: 'Maven', color: '#06b6d4' },
  ],
  18: [
    { id: '8', title: 'Engagement poll', platform: '🐦 Twitter', type: 'Poll', status: 'scheduled', agent: 'Pulse', color: '#f59e0b' },
  ],
  20: [
    { id: '9', title: 'Tutorial carousel', platform: '📸 Instagram', type: 'Carousel', status: 'draft', agent: 'Canvas', color: '#ec4899' },
  ],
  22: [
    { id: '10', title: 'Milestone announcement', platform: '💼 LinkedIn', type: 'Post', status: 'review', agent: 'Chief', color: '#8b5cf6' },
  ],
  25: [
    { id: '11', title: 'Weekend vibes story', platform: '📸 Instagram', type: 'Story', status: 'scheduled', agent: 'Pulse', color: '#f59e0b' },
  ],
  28: [
    { id: '12', title: 'Monthly recap thread', platform: '🐦 Twitter', type: 'Thread', status: 'draft', agent: 'Maven', color: '#06b6d4' },
  ],
};

const statusColors: Record<string, { bg: string; text: string }> = {
  draft: { bg: 'bg-slate-500/20', text: 'text-slate-400' },
  scheduled: { bg: 'bg-neon-blue/20', text: 'text-neon-blue' },
  published: { bg: 'bg-neon-green/20', text: 'text-neon-green' },
  review: { bg: 'bg-yellow-500/20', text: 'text-yellow-400' },
};

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const calendarDays = [];
  for (let i = 0; i < startOffset; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const selectedContent = selectedDay ? mockContent[selectedDay] || [] : [];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-2xl md:text-3xl font-bold">Content Calendar</h1>
        <p className="text-slate-400 mt-1">Plan, review, and schedule content across all platforms.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-1 glass rounded-2xl p-6"
        >
          {/* Month Nav */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setCurrentMonth(m => Math.max(0, m - 1))} className="p-2 rounded-xl hover:bg-white/5 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="font-heading text-lg font-semibold">{months[currentMonth]} {currentYear}</h2>
            <button onClick={() => setCurrentMonth(m => Math.min(11, m + 1))} className="p-2 rounded-xl hover:bg-white/5 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {days.map(d => (
              <div key={d} className="text-center text-xs font-medium text-slate-500 py-2">{d}</div>
            ))}
          </div>

          {/* Calendar cells */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, i) => {
              const content = day ? mockContent[day] : undefined;
              const isSelected = day === selectedDay;
              const isToday = day === 19;
              return (
                <button
                  key={i}
                  onClick={() => day && setSelectedDay(day)}
                  disabled={!day}
                  className={`relative aspect-square rounded-xl flex flex-col items-center justify-start p-1.5 text-sm transition-all duration-200 ${
                    !day ? 'cursor-default' :
                    isSelected ? 'bg-neon-purple/20 border border-neon-purple' :
                    isToday ? 'bg-neon-blue/10 border border-neon-blue/30' :
                    'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {day && (
                    <>
                      <span className={`text-xs font-medium ${isToday ? 'text-neon-blue' : isSelected ? 'text-neon-purple' : 'text-slate-300'}`}>
                        {day}
                      </span>
                      {content && (
                        <div className="flex gap-0.5 mt-1 flex-wrap justify-center">
                          {content.map((c) => (
                            <div
                              key={c.id}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: c.color }}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </div>

          {/* Add content button */}
          <button className="mt-4 w-full py-3 flex items-center justify-center gap-2 text-sm font-medium text-neon-purple bg-neon-purple/10 hover:bg-neon-purple/20 rounded-xl transition-all duration-200">
            <Plus className="w-4 h-4" />
            Create Content
          </button>
        </motion.div>

        {/* Side Panel - Selected Day */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-80 glass rounded-2xl p-6"
        >
          <h3 className="font-heading font-semibold mb-4">
            {selectedDay
              ? `${months[currentMonth]} ${selectedDay}`
              : 'Select a day'}
          </h3>

          {selectedDay && selectedContent.length === 0 && (
            <div className="text-center py-10">
              <p className="text-slate-500 text-sm">No content scheduled</p>
              <button className="mt-3 px-4 py-2 text-sm font-medium text-neon-purple bg-neon-purple/10 rounded-xl hover:bg-neon-purple/20 transition-all">
                + Add content
              </button>
            </div>
          )}

          <div className="space-y-3">
            {selectedContent.map((item) => (
              <div key={item.id} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs">{item.platform}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusColors[item.status].bg} ${statusColors[item.status].text}`}>
                    {item.status}
                  </span>
                </div>
                <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500">By {item.agent} · {item.type}</p>
                <div className="flex items-center gap-2 mt-3">
                  <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-red-500/10 transition-colors text-slate-400 hover:text-red-400">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {!selectedDay && (
            <div className="text-center py-10">
              <p className="text-slate-500 text-sm">Click a day to see scheduled content</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
