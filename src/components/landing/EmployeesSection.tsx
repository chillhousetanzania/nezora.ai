import { EMPLOYEES } from '../../data/employees'

export default function EmployeesSection() {
  return (
    <section className="section" id="team">
      <div className="section-label">// the staff</div>
      <h2 className="section-title">
        Meet your <em>twelve employees</em>
      </h2>
      <p className="section-sub">
        Every role your company needs — from strategy to legal — filled on day one. Each employee is specialised, connected to the tools they need, and works around the clock.
      </p>

      <div className="employees-grid">
        {EMPLOYEES.map((emp, i) => (
          <div key={emp.initials} className="employee-card">
            <div className="employee-avatar">{emp.initials}</div>
            <div className="employee-id">// emp-{String(i + 1).padStart(2, '0')}</div>
            <div className="employee-role">{emp.role}</div>
            <div className="employee-title">{emp.title}</div>
            <div className="employee-desc">{emp.desc}</div>
            <div className="employee-tools">
              {emp.tools.map(t => (
                <span key={t} className="employee-tool">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
