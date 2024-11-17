import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function build() {
  try {
    console.log('Installing dependencies...');
    await execAsync('npm install');
    
    console.log('Building project...');
    await execAsync('npx vite build');
    
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();