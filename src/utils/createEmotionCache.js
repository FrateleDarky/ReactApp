export default function createEmotionCache() {
    return createCache({ key: "css", prepend: true });
   }