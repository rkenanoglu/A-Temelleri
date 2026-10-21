# Ağ Atölyesi

Önlisans 1. sınıf Ağ Temelleri dersi için giriş gerektirmeyen öğrenme sitesi. Bu klasör, GitHub deposu olarak kullanılmaya ve Vercel üzerinde sohbet dahil yayımlanmaya hazır bağımsız Next.js projesidir.

## En kısa kurulum: GitHub → Vercel

### 1. Bu klasörü GitHub hesabınıza yükleyin

**GitHub Desktop ile:**

1. GitHub Desktop'ta hesabınıza giriş yapın.
2. **File → Add local repository** ile bu `github` klasörünü seçin.
3. “No Git repositories were found” uyarısı varsa **create a repository here** bağlantısını kullanın. Var olan dosyaları değiştirmeyin; `.gitignore` seçimini **None** bırakın.
4. İlk değişiklikler için **Commit to main**, ardından **Publish repository** seçin. Depo adı örneğin `ag-atolyesi` olabilir. Kaynak ders belgelerinin çıkarılmış metinlerini de içerdiğinden başlangıçta **Keep this code private** seçeneğini açık bırakabilirsiniz.

**GitHub web arayüzüyle alternatif:**

1. **New repository** ile bir depo oluşturun, varsayılan dal `main` olsun.
2. **Add file → Upload files** ile bu klasörün **içindekileri** depo köküne yükleyin. `package.json`, `app`, `content`, `lib`, `public`, `scripts`, `pnpm-lock.yaml`, `next.config.ts`, `tsconfig.json` ve `vercel.json` kökte bulunmalıdır. Projeyi bir `github` alt klasörü içine koymayın.
3. Gizli `.github`, `.gitignore`, `.gitattributes` ve `.env.example` dosyalarının da depoda olduğundan emin olun. Windows gizli dosyaları göstermiyorsa GitHub Desktop kullanmak daha kolaydır.
4. `.git`, `node_modules`, `.next`, `.qa` ve gerçek `.env.local` dosyasını yüklemeyin. ZIP dosyasını depoya tek dosya olarak yüklemek siteyi kurmaz; ZIP'i açıp proje dosyalarını yüklemek gerekir.

### 2. Vercel'e bağlayın

1. [Vercel](https://vercel.com/new) hesabınıza GitHub hesabınızla giriş yapın.
2. **Add New → Project → Import Git Repository** üzerinden depoyu seçin. İstenen GitHub erişimini ilgili depo için verin.
3. **Framework Preset: Next.js**, **Root Directory: `./`**, **Node.js: 24.x** kullanın. Build ve install komutları `vercel.json` içinde hazırdır.
4. **Environment Variables** bölümüne aşağıdaki değerleri ekleyin:

| Değişken | Değer | Nerede kullanılır? |
| --- | --- | --- |
| `GEMINI_API_KEY` | Size ait çalışan Gemini anahtarı | Yalnız sunucu |
| `GEMINI_MODEL` | `gemini-3.8-flash` | Yalnız sunucu |

5. **Deploy** düğmesine basın. Kurulum sonunda Vercel'in verdiği `https://...vercel.app` adresini kullanın.
6. Vercel'de **Settings → Deployment Protection** bölümünü kontrol edin. Öğrencilere verdiğiniz **Production** adresi Vercel girişi istememelidir. Uygulamada öğrenci hesabı veya kayıt ekranı bulunmaz.

Anahtar bu pakete bilerek dahil edilmemiştir. Daha önceki yayındaki gizli değerler yeni Vercel projesine kendiliğinden taşınmaz. Anahtarı yalnız Vercel'in ortam değişkenleri alanına girin. `NEXT_PUBLIC_GEMINI_API_KEY` gibi bir ad kullanmayın; bu önek gizli değeri tarayıcıya açabilir.

Sonradan anahtar değiştirirseniz **Deployments → Redeploy** ile yeniden yayımlayın. GitHub `main` dalına yaptığınız sonraki güncellemeler, bağlı Vercel projesinde otomatik yeni yayın başlatır.

### 3. Yayını kontrol edin

- Ana sayfa ve 12 haftanın tamamı giriş yapmadan açılıyor mu?
- “Switch ile router arasındaki fark nedir?” sorusuna cevap geliyor mu? Ardından “Bir örnek daha verir misin?” diye devam edin.
- Bir haftanın 20 sorusunu tamamlayıp sonuçları ve **Çalışma planım** ekranını açın.
- Telefonda menüyü açarak farklı haftalara geçin.

## Bilgisayarınızda çalıştırma

[Node.js 24 LTS](https://nodejs.org/) kurulu olmalıdır. Terminalde bu klasöre geçip:

```powershell
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
Copy-Item .env.example .env.local
```

`.env.local` dosyasındaki `GEMINI_API_KEY=` alanına kendi anahtarınızı ekleyin. Ardından:

```powershell
pnpm dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın. Dersler ve testler anahtarsız da çalışır; sohbet için anahtar gerekir. Üretim kontrolü:

```powershell
pnpm test
pnpm test:api
pnpm build
pnpm typecheck
pnpm verify:secrets
pnpm start
```

## Neler hazır?

- İzlenceye göre 12 hafta, her hafta 4 anlatım bölümü ve uygulama etkinliği.
- 240 soruluk özgün banka; haftalık 12 test ve dört genel test, her testte 20 soru.
- Genel testler ilgili üç haftanın bankasından 7 + 7 + 6 soru seçer.
- Açıklamalı sonuçlar, yanlışlara göre çalışma metni, TXT indirme ve tarayıcıda ilerleme kaydı.
- Ders kaynaklarını arayıp ilgili parçalarla ve son konuşma geçmişiyle Gemini'den yanıt alan `/api/chat` sunucusu.
- GitHub Actions ile içerik, API, üretim derlemesi, tip ve anahtar sızıntısı kontrolleri. Actions testleri gerçek Gemini isteği yapmaz ve API anahtarı gerektirmez.

## Dosyalar ve içerik düzenleme

| Dosya | İçerik |
| --- | --- |
| `app/page.tsx` | Öğrenci arayüzü, test ve sohbet akışı |
| `app/globals.css` | Masaüstü ve mobil görünüm |
| `app/api/chat/route.ts` | Sunucuda Gemini ve kaynak tarama |
| `content/course.ts` | 12 haftanın ders anlatımları |
| `content/questions.ts` | Sorular, seçenekler ve açıklamalar |
| `content/sources.json` | 6 PDF ve 14 sunumdan sayfa/slayt bilgisiyle çıkarılmış metin; sunucuda kullanılır |
| `lib/learning.ts` | Test sonuçlarından çalışma planı |
| `.github/workflows/ci.yml` | GitHub üzerinde otomatik doğrulama |

Sohbet için model yeniden eğitilmez; istek sırasında ilgili kaynak parçaları bulunup bağlam olarak gönderilir. Öğrenci mesajları ve seçilen kaynak parçaları Google Gemini'ye iletilir. Test sonuçları ve tamamlanan dersler kullanılan tarayıcıda saklanır; cihazlar arasında eşitlenmez. Sohbet geçmişi sayfa yenilenince silinir.

## Sorun giderme

| Sorun | Çözüm |
| --- | --- |
| Dersler çalışıyor, asistan yapılandırılmamış diyor | Vercel'de `GEMINI_API_KEY` ekleyin ve Redeploy yapın. |
| Kredi tükendi / HTTP 402 | Anahtarın bağlı olduğu Google AI Studio projesinin kredi ve faturalandırmasını kontrol edin. |
| Kota uyarısı | Google model/proje kotasını kontrol edin; bir süre sonra yeniden deneyin. |
| Model kullanılamıyor | `GEMINI_MODEL` için projenizde erişilebilir model seçin ve Redeploy yapın. |
| Her öğrenci istek sınırına takılıyor | Kurumun aynı dış IP'sini paylaşıyor olabilirler. Sunucudaki IP başına sınırı sınıf kullanımınıza göre düzenleyin. |
| Vercel girişi isteniyor | Production URL ve Deployment Protection ayarlarını kontrol edin. |
| GitHub Actions derlemesi başlamıyor | `.github/workflows/ci.yml` dosyasını kökteki `.github` klasörüne yükleyin ve Actions'ı etkinleştirin. |

İstek sınırı her sunucu örneğinde bellekte tutulur; sunucusuz altyapıda bütün örnekler arasında küresel bütçe sınırı değildir. Google projenizin kota ve bütçe ayarları ayrıca yönetilir. Standart sohbet isteği 45 saniyede zaman aşımına uğrar; sunucu işlevi 60 saniyeye kadar çalışacak şekilde ayarlanmıştır.

GitHub Pages sunucu tarafındaki Gemini anahtarını saklayıp bu API'yi çalıştıramaz. Bu paket, seçtiğiniz **GitHub deposu + Vercel** kurulumu içindir.

## Resmî kurulum belgeleri

- [Next.js dağıtım seçenekleri](https://nextjs.org/docs/app/getting-started/deploying)
- [Vercel'de GitHub bağlantısı](https://vercel.com/docs/git/vercel-for-github)
- [Vercel ortam değişkenleri](https://vercel.com/docs/environment-variables)
- [GitHub Pages kapsamı](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
