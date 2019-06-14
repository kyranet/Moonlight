import { Event, EventStore } from 'klasa';
import { NodeServerClient } from 'veza';

export default class extends Event {
    public constructor(store: EventStore, file: string[], directory: string) {
        super(store, file, directory, {
            event: 'client.identify',
            emitter: 'node'
        });
    }

    public async run(client: NodeServerClient): Promise<void> {
        this.client.emit('log', `${client.name} connected.`);
    }
}