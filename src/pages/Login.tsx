
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: "Success",
        description: `Welcome back, ${isAdmin ? 'Admin' : 'User'}!`,
      });
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20">
        <div className="absolute inset-0" 
             style={{
               background: "linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)",
               opacity: 0.8
             }}
        />
        <div className="relative z-10 text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-enterprise-900 mb-4">
            Enterprise Portal
          </h1>
          <p className="text-xl text-enterprise-600 max-w-md">
            Streamline your workflow with our powerful file management system
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-enterprise-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-enterprise-500">
              Please sign in to continue
            </p>
          </div>

          {/* Login Type Toggle */}
          <div className="flex justify-center gap-4 p-1">
            <Button
              type="button"
              variant={!isAdmin ? "default" : "outline"}
              onClick={() => setIsAdmin(false)}
              className="w-32"
            >
              User
            </Button>
            <Button
              type="button"
              variant={isAdmin ? "default" : "outline"}
              onClick={() => setIsAdmin(true)}
              className="w-32"
            >
              Admin
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-enterprise-700" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-enterprise-300 rounded-md text-enterprise-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-enterprise-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-enterprise-300 rounded-md text-enterprise-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
            >
              Sign in as {isAdmin ? 'Admin' : 'User'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
