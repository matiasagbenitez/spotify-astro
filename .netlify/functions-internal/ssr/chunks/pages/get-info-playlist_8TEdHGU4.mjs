import { a as allPlaylists, s as songs } from './_id__CjG2J9tZ.mjs';

async function GET({ request }) {
    const { url } = request;
    const urlObject = new URL(url);
    const id = urlObject.searchParams.get("id");

    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    const playlistSongs = songs.filter((song) => song.albumId === playlist?.albumId);

    return new Response(JSON.stringify({ playlist, songs: playlistSongs }), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export { GET };
