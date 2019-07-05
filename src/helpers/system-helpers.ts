import cp from 'child_process';
import os from 'os';

/**
 * Gets the user name of the current user.
 */
export function getUserName(): string {
  return os.userInfo().username;
};

/**
 * Gets the name of the computer.
 */
export function getComputerName(): string {
  const cases: { [key: string]: () => string } = {
    win32() {
      return process.env.COMPUTERNAME || '';
    },
    darwin() {
      return cp.execSync('scutil --get ComputerName').toString().trim();
    },
    default() {
      return os.hostname();
    }
  };

  return (cases[process.platform] || cases.default)();
};
