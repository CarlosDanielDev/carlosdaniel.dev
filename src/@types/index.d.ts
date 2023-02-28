type AbortSignalConstructor = {
	new (): AbortSignal;
	prototype: AbortSignal;
	abort(reason?: any): AbortSignal;
	timeout(milliseconds: number): AbortSignal;
};

declare let AbortSignal: AbortSignalConstructor;
