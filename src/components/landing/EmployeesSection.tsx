import { EMPLOYEES } from '../../data/employees'
import { Card, Badge } from '../ui'

export default function EmployeesSection() {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-12 bg-neutral-50" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">The Staff</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-neutral-900 mb-4 tracking-tight">
            Meet your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">twelve employees</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Every role your company needs — from strategy to legal — filled on day one. Each employee is specialised, connected to the tools they need, and works around the clock.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {EMPLOYEES.map((emp, i) => (
            <Card key={emp.initials} variant="default" hoverable padding="md" className="flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200/50 flex items-center justify-center text-lg font-bold text-primary-600 shadow-soft-sm">
                  {emp.initials}
                </div>
                <Badge variant="default" size="sm" className="bg-neutral-100">
                  EMP-{String(i + 1).padStart(2, '0')}
                </Badge>
              </div>
              
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">{emp.role}</h3>
              <p className="text-sm font-medium text-primary-500 mb-4">{emp.title}</p>
              
              <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
                {emp.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {emp.tools.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] font-semibold text-neutral-600 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
