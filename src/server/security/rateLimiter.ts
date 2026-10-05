interface RateLimitRecord {
  timestamps: number[];
}

class RateLimiter {
  private store: Map<string, RateLimitRecord> = new Map();

  /**
   * Check if a client (IP or identifier) has exceeded limit within windowMs
   */
  public check(key: string, limit: number, windowMs: number): { allowed: boolean; remaining: number; resetMs: number } {
    const now = Date.now();
    const record = this.store.get(key) || { timestamps: [] };

    // Filter timestamps within current window
    const recent = record.timestamps.filter(ts => now - ts < windowMs);

    if (recent.length >= limit) {
      const oldest = recent[0];
      const resetMs = windowMs - (now - oldest);
      return {
        allowed: false,
        remaining: 0,
        resetMs: Math.max(0, resetMs),
      };
    }

    recent.push(now);
    this.store.set(key, { timestamps: recent });

    return {
      allowed: true,
      remaining: limit - recent.length,
      resetMs: windowMs,
    };
  }

  public cleanup() {
    const now = Date.now();
    for (const [key, record] of this.store.entries()) {
      const recent = record.timestamps.filter(ts => now - ts < 3600000); // 1 hour
      if (recent.length === 0) {
        this.store.delete(key);
      } else {
        this.store.set(key, { timestamps: recent });
      }
    }
  }
}

const globalForLimiter = global as unknown as { rateLimiter: RateLimiter };
export const rateLimiter = globalForLimiter.rateLimiter || new RateLimiter();
if (process.env.NODE_ENV !== 'production') globalForLimiter.rateLimiter = rateLimiter;
