import { Event, EventStore } from 'klasa';
import { NodeServer } from 'veza';

export default class extends Event {
    public constructor(store: EventStore, file: string[], directory: string) {
        super(store, file, directory, {
            emitter: 'node',
            event: 'server.ready'
        });
    }

    public async run(server: NodeServer): Promise<void> {
        this.client.emit('log', `Node ${server.name} has successfully initialized`);
    }
}