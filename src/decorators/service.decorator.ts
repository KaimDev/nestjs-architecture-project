import 'reflect-metadata';

export function Service(name: string): ClassDecorator {
    return function (constructor: Function): void {
        const target = constructor.prototype;  // Get the prototype

        /**
         * Get the Class's method's name
         */
        const methodNames = Object.getOwnPropertyNames(target).filter(
            item => typeof target[item] === 'function'
        );

        /**
         * Add metadata for each method
         */
        for (const methodName of methodNames) {
            const metadataKey = `service:${name}:${methodName}`;
            Reflect.defineMetadata(metadataKey, `${methodName}`, target, methodName);
        }
    }
}
