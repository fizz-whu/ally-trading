module.exports = {
  apps: [{
    name: 'ally-trading',
    script: 'serve',
    args: '-s build -l 3000',
    env: {
      PORT: 3000,
      NODE_ENV: 'production'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: '/home/ubuntu/ally-trading/logs/err.log',
    out_file: '/home/ubuntu/ally-trading/logs/out.log',
    log_file: '/home/ubuntu/ally-trading/logs/combined.log',
    time: true
  }]
};