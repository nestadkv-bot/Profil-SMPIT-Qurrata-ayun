import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// Note: We are using a factory function to ensure we catch missing keys gracefully if needed, 
// though the prompt guarantees process.env.API_KEY availability.
const getAIClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

const SCHOOL_CONTEXT = `
Anda adalah asisten virtual resmi untuk SMPIT Qurrata'ayun, sebuah sekolah Islam Terpadu modern di Kandangan.
Alamat Sekolah: Jl. Ahmad Yani, Kandangan Kota, Kec. Kandangan, Kabupaten Hulu Sungai Selatan, Kalimantan Selatan 71217 (Kode Plus: 67J7+MV5).
Visi: Mencetak generasi Qurani yang cerdas, mandiri, dan berakhlak mulia.

Informasi Utama:
- Fokus pada Tahfidz Al-Qur'an dan keunggulan akademik.
- Menggunakan kurikulum nasional dipadukan dengan kurikulum jaringan Sekolah Islam Terpadu (JSIT).
- Ekstrakurikuler: Pramuka, Panahan (Archery), Futsal, Science Club, English Club.
- Fasilitas: Ruang kelas ber-AC, Laboratorium Komputer, Masjid, Lapangan Olahraga.
- PPDB (Pendaftaran Peserta Didik Baru) biasanya dibuka mulai bulan Januari-Maret.

Gaya Bicara:
- Ramah, sopan, islami (gunakan salam seperti Assalamu'alaikum).
- Informatif dan membantu orang tua siswa atau calon siswa.
- Gunakan Bahasa Indonesia yang baik.
- Jika ditanya hal diluar konteks sekolah, arahkan kembali ke topik pendidikan atau sekolah dengan sopan.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const ai = getAIClient();
    
    // We utilize the chat model for conversational context
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SCHOOL_CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
      history: history 
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    
    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mohon maaf, terjadi kesalahan koneksi. Silakan coba beberapa saat lagi.";
  }
};