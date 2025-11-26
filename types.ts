import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Teacher {
  name: string;
  role: string;
  image: string;
}

export interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SendingStatus {
  IDLE = 'IDLE',
  SENDING = 'SENDING',
  ERROR = 'ERROR'
}