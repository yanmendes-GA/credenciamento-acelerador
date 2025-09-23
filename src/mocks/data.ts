// Mock data for the accreditation system

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  status: 'active' | 'inactive';
  location: string;
}

export interface Accredited {
  id: string;
  eventId: string;
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  photo: string;
  document: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  createdAt: string;
}

// Mock users for login
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@acelerador.com',
    password: '123456',
    name: 'Administrador'
  },
  {
    id: '2',
    email: 'operador@acelerador.com',
    password: '123456',
    name: 'Operador'
  }
];

// Mock events
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Imersão Empresarial - Janeiro 2025',
    date: '2025-01-15',
    status: 'active',
    location: 'São Paulo - SP'
  },
  {
    id: '2',
    title: 'Workshop de Liderança',
    date: '2025-02-20',
    status: 'active',
    location: 'Rio de Janeiro - RJ'
  },
  {
    id: '3',
    title: 'Aceleração de Negócios',
    date: '2024-12-10',
    status: 'inactive',
    location: 'Belo Horizonte - MG'
  }
];

// Mock accredited people
export const mockAccredited: Accredited[] = [
  {
    id: '1',
    eventId: '1',
    fullName: 'João Silva Santos',
    cpf: '123.456.789-00',
    email: 'joao@email.com',
    phone: '(11) 99999-9999',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    document: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
    status: 'pending',
    createdAt: '2025-01-10T10:00:00Z'
  },
  {
    id: '2',
    eventId: '1',
    fullName: 'Maria Oliveira Costa',
    cpf: '987.654.321-00',
    email: 'maria@email.com',
    phone: '(11) 88888-8888',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b6d3?w=300&h=300&fit=crop&crop=face',
    document: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
    status: 'approved',
    createdAt: '2025-01-09T14:30:00Z'
  },
  {
    id: '3',
    eventId: '1',
    fullName: 'Carlos Roberto Lima',
    cpf: '456.789.123-00',
    email: 'carlos@email.com',
    phone: '(11) 77777-7777',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    document: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
    status: 'rejected',
    rejectionReason: 'Documento ilegível',
    createdAt: '2025-01-08T09:15:00Z'
  },
  {
    id: '4',
    eventId: '2',
    fullName: 'Ana Paula Ferreira',
    cpf: '789.123.456-00',
    email: 'ana@email.com',
    phone: '(21) 66666-6666',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    document: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
    status: 'pending',
    createdAt: '2025-01-07T16:45:00Z'
  }
];