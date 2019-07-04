import cp from 'child_process';
import os from 'os';

export function getUserName(): string {
  return os.userInfo().username;
};

export function getComputerName(): string {
  switch (process.platform) {
    case 'win32':
      return process.env.COMPUTERNAME || '';
    case 'darwin':
      return cp.execSync('scutil --get ComputerName').toString().trim()
    default:
      return os.hostname()
  }
};
