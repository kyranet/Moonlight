import { KlasaClient } from 'klasa';
import { Node } from 'veza';
import './MoonlightPreload';

declare module 'klasa' {
    interface Client {
        node: Node;
    }
}

export class MoonlightClient extends KlasaClient {
    public node: Node = new Node('Moonlight');
}