import { useState } from 'react';
import api from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { saveAuth } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const endpoint = isSignup ? '/auth/signup' : '/auth/login';
      const payload = isSignup ? form : { email: form.email, password: form.password };
      const { data } = await api.post(endpoint, payload);
      saveAuth(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    }
  };

  return (
    <div className="mx-auto mt-20 max-w-md card">
      <h2 className="text-xl font-semibold mb-4">{isSignup ? 'Create account' : 'Login'}</h2>
      <form onSubmit={submit} className="space-y-3">
        {isSignup && (
          <input className="input" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        )}
        <input className="input" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="input" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="btn w-full">{isSignup ? 'Sign up' : 'Login'}</button>
      </form>
      <button className="mt-3 text-sm text-blue-600" onClick={() => setIsSignup((v) => !v)}>
        {isSignup ? 'Already have an account? Login' : 'Need an account? Sign up'}
      </button>
    </div>
  );
}
