declare namespace NodeJS {
    interface Global {
      AbortSignal: {
        new (): AbortSignal;
        prototype: AbortSignal;
        abort(reason?: any): AbortSignal;
        timeout(milliseconds: number): AbortSignal;
      }
    }
  }
  