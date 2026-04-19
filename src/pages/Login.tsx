export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <main className="w-full max-w-md bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-fixed opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-surface-tint opacity-10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center mb-10">
          <h1 className="font-headline font-bold text-3xl tracking-tighter text-primary mb-2">Nezora AI</h1>
          <p className="font-body text-on-surface-variant text-center">Welcome back. Please enter your details.</p>
        </div>
        <form className="relative z-10 space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <label className="font-label text-sm font-medium text-on-surface-variant uppercase tracking-wider block mb-1.5 pl-1" htmlFor="email">Email</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 pointer-events-none" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
                <input className="w-full bg-surface-container-low text-on-surface rounded-xl pl-12 pr-4 py-3.5 border-transparent focus:border-primary/40 focus:ring-0 transition-colors placeholder:text-outline-variant outline-none" id="email" name="email" placeholder="name@company.com" required type="email" />
              </div>
            </div>
            <div className="relative group">
              <div className="flex items-center justify-between mb-1.5 pl-1 pr-1">
                <label className="font-label text-sm font-medium text-on-surface-variant uppercase tracking-wider block" htmlFor="password">Password</label>
                <a className="text-sm font-medium text-primary hover:text-primary-container transition-colors" href="#">Forgot Password?</a>
              </div>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 pointer-events-none" style={{ fontVariationSettings: "'FILL' 0" }}>lock</span>
                <input className="w-full bg-surface-container-low text-on-surface rounded-xl pl-12 pr-4 py-3.5 border-transparent focus:border-primary/40 focus:ring-0 transition-colors placeholder:text-outline-variant outline-none" id="password" name="password" placeholder="••••••••" required type="password" />
              </div>
            </div>
          </div>
          <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-medium rounded-xl py-3.5 flex items-center justify-center gap-2 hover:shadow-[0_12px_24px_-8px_rgba(0,62,199,0.3)] transition-shadow" type="submit">
            Log In
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
          </button>
        </form>
        <div className="relative z-10 mt-8 mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-surface-container-lowest text-on-surface-variant">Or continue with</span>
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-medium rounded-xl py-3 transition-colors border border-outline-variant/15" type="button">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>login</span>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-medium rounded-xl py-3 transition-colors border border-outline-variant/15" type="button">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>devices</span>
            Apple
          </button>
        </div>
        <p className="relative z-10 text-center mt-8 text-on-surface-variant font-body">
          Don't have an account? <a className="font-medium text-primary hover:text-primary-container transition-colors" href="#">Sign up</a>
        </p>
      </main>
    </div>
  );
}
