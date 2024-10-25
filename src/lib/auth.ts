import { create } from 'zustand';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'buyer' | 'seller' | 'agent';
  avatar?: string;
}

// This is a mock implementation. Replace with your actual auth service.
export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'buyer',
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  register: async (email: string, password: string, name: string) => {
    // Mock registration - replace with actual API call
    const mockUser: User = {
      id: '1',
      email,
      name,
      role: 'buyer',
    };
    set({ user: mockUser, isAuthenticated: true });
  },
}));