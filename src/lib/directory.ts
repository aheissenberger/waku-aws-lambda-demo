'use server'
import fs from 'fs';

export const getDirectoryList = (path: string): string[] => {
    try {
      const files = fs.readdirSync(path);
      return files;
    } catch (error) {
      console.error('Error reading directory:', error);
      return [];
    }
  };
