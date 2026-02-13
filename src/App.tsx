import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function AppContent() {
  const { user, loading } = useAuth();
  const [page, setPage] = useState<'signup' | 'signin'>('signup');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-400 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        {page === 'signup' ? (
          <SignUp onNavigate={setPage} />
        ) : (
          <SignIn onNavigate={setPage} />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Dashboard />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
