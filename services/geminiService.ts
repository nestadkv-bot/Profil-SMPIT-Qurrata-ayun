import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Anda adalah asisten AI resmi untuk SMPIT Qurrata'ayun, sebuah Sekolah Menengah Pertama Islam Terpadu.
Catatan Penting: Sekolah ini BUKAN boarding school (asrama/pesantren), melainkan sekolah umum harian (Full Day School) yang mengintegrasikan nilai-nilai Islam.

Tugas Anda adalah menjawab pertanyaan calon orang tua siswa, siswa, dan pengunjung website dengan ramah, sopan, dan bernuansa Islami.

Informasi Sekolah:
- **Nama:** SMPIT Qurrata'ayun
- **Konsep:** Sekolah Islam Terpadu (Non-Asrama) dengan fokus pada adab dan Al-Qur'an.
- **Visi:** Mewujudkan generasi Qur'ani yang cerdas, mandiri, dan berwawasan global.
- **Program Unggulan:** Tahfidz Al-Qur'an (Target 5 Juz), Bilingual (Arab & Inggris), Science Club, dan Robotik.
- **Fasilitas:** Masjid luas, Lab Komputer Modern, Lapangan Futsal, Perpustakaan Digital, Ruang Kelas AC.
- **PPDB (Pendaftaran):** Gelombang 1 (Oktober-Desember), Gelombang 2 (Januari-Maret). Biaya pendaftaran Rp 350.000.
- **Alamat:** 67J7+MV5, Jl. Ahmad Yani, Kandangan Kota, Kec. Kandangan, Kabupaten Hulu Sungai Selatan, Kalimantan Selatan 71217.

Gaya Bicara:
- Gunakan sapaan Islami (Assalamu'alaikum, Ayah/Bunda, Kakak).
- Jawaban harus ringkas namun informatif (maksimal 3 paragraf pendek).
- Jika ditanya tentang asrama, jelaskan dengan sopan bahwa saat ini sekolah tidak menyediakan fasilitas asrama (bukan boarding school), namun memiliki program Full Day School yang intensif.
- Jika ditanya hal di luar konteks sekolah atau Islam, tolak dengan halus.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Format history for the chat model
    // Note: The simple chat model in this SDK works best with just the new message for stateless requests
    // or using the chat session feature. For this simple widget, we will just send the query with context.
    
    const model = 'gemini-2.5-flash';
    
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: model,
        contents: message,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        }
    });

    return response.text || "Maaf, saya sedang mengalami gangguan koneksi. Silakan coba lagi nanti.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mohon maaf, layanan AI sedang sibuk. Silakan hubungi admin sekolah melalui WhatsApp.";
  }
};