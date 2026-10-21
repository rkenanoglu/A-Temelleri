# Hazırlık doğrulaması

21 Ekim 2026 tarihinde bu bağımsız GitHub/Vercel sürümü için:

- Next.js 16.3.4 üretim derlemesi başarılı. Ana sayfa statik, `/api/chat` Node.js sunucu rotası olarak üretildi.
- TypeScript kontrolü başarılı.
- 12 hafta, 240 benzersiz soru, 16 adet 20 soruluk test ve üç haftalık testlerde 7/7/6 dağılımı doğrulandı.
- Kaynak dizininde 6 PDF ve 14 sunumun çıkarılmış metni doğrulandı.
- API testleri: farklı kaynaktan istek reddi, eksik anahtar, bozuk ve büyük gövde, konuşma geçmişi, kaynak bulma, yanlış sorulara göre bağlam, sağlayıcı hata durumları ve istek sınırı başarılı. Bu testler sahte sağlayıcı yanıtı kullanır; ücretli gerçek API isteği yapmaz.
- Kaynak dosyalarda ve üretimdeki 22 istemci JavaScript paketinde sağlayıcı anahtarı bulunmadı.
- Yerel üretim sunucusunda ana sayfa, ders açılışı ve 20 soruluk test haritası tarayıcıda kontrol edildi.

Paketin içine gerçek Gemini anahtarı konulmadı. Yeni GitHub/Vercel hesabınıza yükleme veya yayın işlemi yapılmadı; hesabınıza giriş yaptıktan sonra README adımlarını izleyerek tamamlayabilirsiniz. Yeni Vercel ortamında gerçek sohbet kontrolü, anahtar eklendikten sonra yapılmalıdır.

Yerel testlerin oluşturduğu `node_modules`, `.next` ve `.qa` klasörleri teslim paketi dışında bırakıldı. Bunlar kurulum ve derleme komutlarıyla yeniden oluşur.
