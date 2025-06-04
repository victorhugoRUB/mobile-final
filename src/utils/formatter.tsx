export function getIdFromVideoUrl(videoUrl: string): string {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = videoUrl.match(regex);
    if (match && match[4]) {
        return match[4];
    }
    return '';
}