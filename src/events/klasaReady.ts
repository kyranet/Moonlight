import { Event, EventStore } from 'klasa';

export default class extends Event {
    public constructor(store: EventStore, file: string[], direcory: string) {
        super(store, file, direcory, {
            once: true
        });
    }

    public async run(): Promise<void> {
        await this.client.node.serve(6969);
    }
}
