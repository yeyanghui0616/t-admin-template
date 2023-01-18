import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'

export default ({command,mode}:ConfigEnv)=>{
  console.log('command', command)
  console.log('mode', mode)
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root)
  parseEnv(env)
  
  return {
    plugins: [vue()],
    resolve:{
      alias
    }
  }
} 