import Redis from 'ioredis';

export const redis = new Redis({ host: 'redis' });

export default redis;
