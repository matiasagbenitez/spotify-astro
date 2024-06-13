import { allPlaylists, songs } from "@/lib/data";

export async function GET({ params, request }) {
    const { url } = request;
    const urlObject = new URL(url);
    const id = urlObject.searchParams.get("id");
    const albumId = urlObject.searchParams.get("albumId");

    const song = songs.find((song) => song.id == id && song.albumId == albumId);
    
    const playlist = allPlaylists.find((playlist) => playlist.id == song.albumId);
    const allSongs = songs.filter((song) => song.albumId == playlist.id);

    return new Response(JSON.stringify({ playlist, song, songs: allSongs }), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}