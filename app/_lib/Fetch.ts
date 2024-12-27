export default function Fetch(input: string | URL | globalThis.Request, init?: RequestInit) {

    return fetch(input, init)
    .then(
        r => r.json(),
        r => console.error(r)
    );
}