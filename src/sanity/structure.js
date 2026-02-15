// src/sanity/structure.js

// Bu kod: "Şemada ne varsa onu listele" der.
// Bizde sadece Post ve Category kaldığı için otomatik onları gösterir, hata vermez.

export const structure = (S) =>
  S.list()
    .title('İçerik Yönetimi') // Sol üstteki başlık
    .items(S.documentTypeListItems());